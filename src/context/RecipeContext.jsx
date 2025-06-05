import { createContext, useEffect, useState } from "react";

let recipes = [
  {
    id: 1,
    title: "Spaghetti Carbonara",
    ingredients: "Spaghetti, Eggs, Parmesan Cheese, Pancetta, Black Pepper",
    instructions: "Cook spaghetti. In a bowl, mix eggs and cheese. Fry pancetta until crisp. Combine all with pasta and season with pepper.",
    desc: "A classic Italian pasta dish made with eggs, cheese, pancetta, and pepper.",
    chef: "Giovanni Rossi",
    category: "Italian",
    image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8Zm9vZHxlbnwwfHwwfHx8MA%3D%3D"
  },
  {
    id: 2,
    title: "Sushi Platter",
    ingredients: "Sushi Rice, Nori, Salmon, Tuna, Avocado, Cucumber",
    instructions: "Prepare sushi rice. Slice fish and vegetables. Assemble rolls with nori, rice, and fillings. Slice and serve with soy sauce.",
    desc: "An assortment of fresh sushi rolls featuring various fillings.",
    chef: "Aiko Tanaka",
    category: "Japanese",
    image: "https://plus.unsplash.com/premium_photo-1675252369719-dd52bc69c3df?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGZvb2R8ZW58MHx8MHx8fDA%3D"
  },
  {
    id: 3,
    title: "Chicken Tikka Masala",
    ingredients: "Chicken, Yogurt, Tomato Puree, Cream, Spices",
    instructions: "Marinate chicken in yogurt and spices. Grill until cooked. Simmer tomato sauce with cream and spices. Combine with chicken.",
    desc: "Grilled chicken pieces in a creamy spiced tomato sauce.",
    chef: "Raj Kapoor",
    category: "Indian",
    image: "https://plus.unsplash.com/premium_photo-1690214491960-d447e38d0bd0?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Y2FrZXxlbnwwfHwwfHx8MA%3D%3D"
  },
  {
    id: 4,
    title: "French Croissants",
    ingredients: "Flour, Butter, Yeast, Milk, Sugar, Salt",
    instructions: "Prepare dough and layer with butter. Fold and roll multiple times. Shape into croissants and bake until golden.",
    desc: "Flaky, buttery pastries perfect for breakfast.",
    chef: "Marie Dubois",
    category: "French",
    image: "https://images.unsplash.com/photo-1523294587484-bae6cc870010?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGJha2VyeXxlbnwwfHwwfHx8MA%3D%3D"
  },
  {
    id: 5,
    title: "Beef Tacos",
    ingredients: "Tortillas, Ground Beef, Lettuce, Tomato, Cheese, Sour Cream",
    instructions: "Cook ground beef with spices. Warm tortillas. Assemble tacos with beef and toppings.",
    desc: "Crispy tacos filled with seasoned beef and fresh toppings.",
    chef: "Carlos Mendez",
    category: "Mexican",
    image: "https://plus.unsplash.com/premium_photo-1681826507324-0b3c43928753?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjF8fGJha2VyeXxlbnwwfHwwfHx8MA%3D%3D"
  }
];


export const recipcontext = createContext(null);

function RecipeContext(props) {
  const [data, setData] = useState([]);

  useEffect(() => {

    let storedRecipes = JSON.parse(localStorage.getItem("recipes"))
    

    if(!storedRecipes ){
      localStorage.setItem('recipes', JSON.stringify(recipes))
      setData(recipes)
    }else {
      setData(storedRecipes)
    }
    
  }, []);

  return (
    <recipcontext.Provider value={{ data, setData }}>
      {props.children}
    </recipcontext.Provider>
  );
}

export default RecipeContext;
