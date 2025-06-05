import { useContext } from "react";
import { Link } from "react-router-dom";
import { recipcontext } from "../context/RecipeContext";
import RecipeCard from "../components/RecipeCard";
import { Recipes } from "./Recipes";

export const Home = () => {

  let {data} = useContext(recipcontext)
  const rendering = data.map((recipe) => (    
    <RecipeCard recipe={recipe} key={recipe.id} />
  ))
  
  return (
    <div className="min-h-screen  text-gray-200 px-4 py-10">
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold text-blue-700 mb-4">
          Welcome to RecipeBook
        </h1>
        <p className="text-lg md:text-xl max-w-2xl mx-auto">
          Discover, create, and save your favorite recipes. A personalized cooking experience crafted for you.
        </p>
        <div className="mt-6 flex justify-center gap-4">
          <Link to="/recipes" className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition">
            Explore Recipes
          </Link>
          <Link to="/create" className="bg-gray-800 text-white px-6 py-2 rounded-lg hover:bg-gray-900 transition">
            Create Recipe
          </Link>
        </div>
      </div>

      <div className="mt-10 text-center text-lg italic text-gray-400">
        “Cooking is like love. It should be entered into with abandon or not at all.”
      </div>

          
    <Recipes />
  
    </div>
  );
};
