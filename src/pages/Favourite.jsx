import RecipeCard from '../components/RecipeCard'

function Favourite() {
  let fav = JSON.parse(localStorage.getItem('fav')) || [];

  return (
    <div className='text-white mt-10 flex items-center gap-16 flex-wrap min-h-[40vh]'>
      {fav.length > 0 ? (
        fav.map((recipe) => (
          <RecipeCard recipe={recipe} key={recipe.id} />
        ))
      ) : (
        <div className="text-xl text-neutral-400">No favourites yet</div>
      )}
    </div>
  );
}

export default Favourite;