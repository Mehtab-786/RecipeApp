import React from "react";
import { Link } from "react-router-dom";

function RecipeCard(props) {
  const { id, title, ingredients, instructions, desc, chef, category, image } =
    props.recipe;

  return (
    <Link
      to={`/recipes/details/${id}`}
      className="text-white relative rounded w-[20vw] h-64 block overflow-hidden hover:scale-95 duration-200 bg-gray-900 bg-opacity-60"
    >
      <img
        src={
          image
            ? image
            : "https://images.unsplash.com/photo-1633078654544-61b3455b9161?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGVycm9yfGVufDB8fDB8fHww"
        }
        alt="Food image"
        className="object-cover h-[70%] w-full aspect-video rounded-2xl"
      />

      <div className="p-3">
        <h3 className="text-sm text-gray-300 font-semibold mb-1 tracking-wide">
          {chef}
        </h3>
        <h1 className="text-lg font-bold truncate max-w-full mb-2 leading-snug">
          {title.slice(0, 50)}..
        </h1>

        <button className="text-xs text-blue-400 hover:text-blue-600 font-medium absolute right-4 bottom-4 bg-blue-900 bg-opacity-30 px-3 py-1 rounded-full shadow-md transition-colors duration-200">
          more
        </button>
      </div>
    </Link>
  );
}

export default RecipeCard;
