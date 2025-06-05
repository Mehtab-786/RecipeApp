import React, { useContext } from 'react'
import { recipcontext } from '../context/RecipeContext'
import RecipeCard from '../components/RecipeCard'

export const Recipes = () => {
  let {data} = useContext(recipcontext)

  const rendering = data.map((recipe) => (    
    <RecipeCard recipe={recipe} key={recipe.id} />
  ))
  
  return (
    <div className='text-white mt-10 flex items-center gap-6 flex-wrap justify-start'>{rendering}</div>

  )
}
