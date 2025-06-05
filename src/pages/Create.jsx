import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { nanoid } from "nanoid";
import { recipcontext } from "../context/RecipeContext";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

export const Create = () => {
  let {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const { data, setData } = useContext(recipcontext);

  let navigate = useNavigate();

  let submitHandler = (recipe) => {
    recipe.id = nanoid();
    const copydata = [...data];
    copydata.push(recipe);
    setData(copydata);
    toast.success("New recipe added");
    localStorage.setItem("recipes", JSON.stringify(copydata));
    navigate("/recipes");
    reset();
  };

  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto  rounded-xl shadow-lg p-8 text-white">
        <h2 className="text-3xl font-semibold mb-6 text-center">Add New Recipe</h2>
        <form onSubmit={handleSubmit(submitHandler)} className="space-y-6">
          <div>
            <label className="block text-sm font-medium mb-1">Image URL</label>
            <input
              {...register("image")}
              type="url"
              placeholder="https://..."
              className="w-full p-2 text-white border-b-2 border-gray-500 focus:outline-none "
            />
            {errors.image && <p className="text-red-400 text-sm mt-1">Errors are shown like this</p>}
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Title</label>
            <input
              {...register("title", {
                required: "Name of the dish is required",
                minLength: { value: 3, message: "Name must be of 4 characters" },
                maxLength: { value: 25, message: "Name must be under 25 letters" },
              })}
              type="text"
              placeholder="Dish title"
              className="w-full p-2 text-white border-b-2 border-gray-500 focus:outline-none "
            />
            {errors.title && <p className="text-red-400 text-sm mt-1">{errors.title.message}</p>}
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Description</label>
            <input
              {...register("description")}
              type="text"
              placeholder="Brief description"
              className="w-full p-2 text-white border-b-2 border-gray-500 focus:outline-none "
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Chef</label>
            <input
              {...register("chef")}
              type="text"
              placeholder="Chef's name"
              className="w-full p-2 text-white border-b-2 border-gray-500 focus:outline-none "
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Ingredients</label>
            <textarea
              {...register("ingredients")}
              placeholder="List of ingredients"
              className="w-full rounded-md p-2 text-white border-b-2 border-gray-500 focus:outline-none"
            ></textarea>
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Instructions</label>
            <textarea
              {...register("instructions")}
              placeholder="Step-by-step cooking instructions"
              className="w-full p-2 text-white border-b-2 border-gray-500 focus:outline-none "
            ></textarea>
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Category</label>
            <select
              {...register("category")}
              defaultValue="Indian"
              className="w-full p-2 text-white bg-gray-900 border-b-2 border-gray-500 focus:outline-none "
            >
              <option value="" disabled hidden>Select category</option>
              <option value="Chinese">Chinese</option>
              <option value="Indian">Indian</option>
              <option value="American">American</option>
            </select>
          </div>

          <div className="text-center">
            <button
              type="submit"
              className="inline-block w-1/2 py-2 px-4 bg-green-600 hover:bg-green-700 transition rounded-lg text-white font-semibold shadow-md"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};