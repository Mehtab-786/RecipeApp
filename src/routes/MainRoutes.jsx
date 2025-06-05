import { Route, Routes } from "react-router-dom";
import { Home } from "../pages/Home";
import { Recipes } from "../pages/Recipes";
import { Create } from "../pages/Create";
import SingleRecipe from "../pages/SingleRecipe";
import PageNotFound from "../pages/PageNotFound";
import Favourite from "../pages/Favourite";

export const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/recipes" element={<Recipes />} />
      <Route path="/recipes/details/:id" element={<SingleRecipe />} />
      <Route path="/create" element={<Create />} />
      <Route path="/fav" element={<Favourite />} />
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  );
};
