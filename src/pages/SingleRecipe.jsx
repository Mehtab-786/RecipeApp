import React, { useContext, useState } from "react";
import { recipcontext } from "../context/RecipeContext";
import { useNavigate, useParams } from "react-router-dom";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

function SingleRecipe() {
  const { data, setData } = useContext(recipcontext);
  let param = useParams();
  let recipe = data.find((recipe) => recipe.id == param.id);
  let { register, handleSubmit } = useForm({
    defaultValues: {
      title: recipe?.title,
      chef: recipe?.chef,
      image: recipe?.image,
      instructions: recipe?.instructions,
      ingredients: recipe?.ingredients,
      desc: recipe?.desc,
    },
  });

  let navigate = useNavigate();
  let updateHandler = (recipe) => {
    const index = data.findIndex((recipe) => recipe.id == param.id);
    const copydata = [...data];
    copydata[index] = { ...copydata[index], ...recipe };

    localStorage.setItem("recipes", JSON.stringify(copydata));

    toast.success("Recipe updated");
    setData(copydata);
  };

  
  let deleteHandler = () => {
    let filteredData = data.filter((recipe) => recipe.id != param.id);
    
    let favRecipes = JSON.parse(localStorage.getItem('fav')) || []
    let updatedFav =  favRecipes.filter(item => item.id != param.id)

    localStorage.setItem('fav', JSON.stringify(updatedFav))
            
    toast.success("recipe deleted");
    setData(filteredData);
    localStorage.setItem("recipes", JSON.stringify(filteredData));

    navigate("/recipes");
  };

  const [favourites, setFavourites] = useState(JSON.parse(localStorage.getItem("fav")) || [])

  const isFavourite = favourites.some((fav) => fav.id === recipe.id);

  let favouriteHandler = () => {
    let copyfav = [...favourites]
    copyfav.push(recipe)
    setFavourites(copyfav)
    localStorage.setItem("fav", JSON.stringify(copyfav));
  };
  let UnfavouriteHandler = () => {
    const favouritefilter = favourites.filter((f) => f.id != recipe?.id);
    setFavourites(favouritefilter)
    localStorage.setItem("fav", JSON.stringify(favouritefilter));
  };
  return recipe ? (
    <div className="w-full bg-emerald-950 p-5 flex mt-10">
      <div className="w-1/2 flex flex-col ">
        <img
          src={
            recipe.image
              ? recipe.image
              : "https://images.unsplash.com/photo-1633078654544-61b3455b9161?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGVycm9yfGVufDB8fDB8fHww"
          }
          className=" h-[50vh] object-cover rounded-2xl w-full"
        />
        <div className="flex justify-between items-center w-full">
          <h1 className="text-3xl font-bold mb-2">{recipe.title}</h1>

          {isFavourite ? (
            <i
              onClick={UnfavouriteHandler}
              className="ri-heart-3-fill text-red-600 text-3xl"
            ></i>
          ) : (
            <i
              onClick={favouriteHandler}
              className="ri-heart-line   text-red-600 text-3xl"
            ></i>
          )}
        </div>
        <div className="flex items-center gap-4 mb-4">
          <span className="bg-green-700 px-3 py-1 rounded-full text-sm font-semibold">
            {recipe.chef}
          </span>
          <span className="bg-blue-700 px-3 py-1 rounded-full text-sm font-semibold">
            {recipe.category || recipe.cat}
          </span>
        </div>
        <p className="text-lg mb-4 text-neutral-300">{recipe.desc}</p>

        <div className="mb-6">
          <h2 className="text-xl font-semibold mb-2 text-green-400">
            Ingredients
          </h2>
          <p className="whitespace-pre-line text-neutral-200">
            {recipe.ingredients || recipe.ingred}
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-2 text-blue-400">
            Instructions
          </h2>
          <p className="whitespace-pre-line text-neutral-200">
            {recipe.instructions || recipe.inst}
          </p>
        </div>
      </div>
      <div className="w-1/2">
        <form
          className="text-gray-200 ml-20 space-y-8"
          onSubmit={handleSubmit(updateHandler)}
        >
          <input
            {...register("image")}
            type="url"
            placeholder="Enter Image Url"
            className="border-b p-2 outline-0 w-3/4 mt-5 block"
            defaultValue={recipe.image}
          />
          <input
            {...register("title")}
            type="text"
            placeholder="Title"
            className="border-b p-2 outline-0 w-3/4 mt-5 block"
          />
          <input
            {...register("desc")}
            type="text"
            placeholder="Description"
            className="border-b p-2 outline-0 w-3/4 mt-5 block"
          />
          <input
            {...register("chef")}
            type="text"
            placeholder="Chef"
            className="border-b p-2 outline-0 w-3/4 mt-5 block"
          />
          <textarea
            className="border-b p-2  outline-0 w-3/4 mt-5 block"
            placeholder="//enter you ingredients"
            {...register("ingred")}
          ></textarea>

          <textarea
            className="border-b p-2 outline-0 w-3/4 mt-5 block"
            placeholder="//enter you instructions "
            {...register("inst")}
          ></textarea>

          <select
            className="border-b p-2 outline-0 w-3/4 mt-5 block"
            {...register("cat")}
          >
            <option value="" disabled hidden>
              Select category
            </option>
            <option className="bg-neutral-700" value="Chinese">
              Chinese
            </option>
            <option className="bg-neutral-700" value="Indian">
              Indian
            </option>
            <option className="bg-neutral-700" value="American">
              American
            </option>
          </select>

          <button
            onClick={deleteHandler}
            className="px-4 py-2 bg-red-500 mr-20 font-bold rounded-lg mt-5"
          >
            Delete
          </button>
          <button
            type="submit"
            className="px-4 py-2 bg-green-600 font-bold rounded-lg mt-5"
          >
            Update Recipe
          </button>
        </form>
      </div>
    </div>
  ) : (
    <div className="flex justify-center items-center h-screen text-white text-2xl">
      Loading..
    </div>
  );
}

export default SingleRecipe;
