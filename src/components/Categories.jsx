/* eslint-disable react/prop-types */
import { categories } from "../constants";
import axios from "axios";
import _ from "lodash";
import { useEffect, useState } from "react";
import RecipeCard from "./recipe/RecipeCard";

export default function Categories() {
  const [recipes, setRecipes] = useState([]);
  const [cuisine, Setcuisine] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const BASE_URL = "https://api.spoonacular.com";

  useEffect(() => {
    const fetchRecipes = async () => {
      try {
        const getLocalRecipes = localStorage.getItem("recipes" + "_" + cuisine);
        if (getLocalRecipes) {
          setRecipes(JSON.parse(getLocalRecipes));
        } else {
          if (!cuisine) return;
          setLoading(true);
          const res = await axios.get(
            `${BASE_URL}/recipes/random?apiKey=${
              import.meta.env.VITE_APIKEY
            }&number=${4}&cuisine=${cuisine}`
          );
          const data = res.data;
          const recipes = _.get(data, "recipes", []);
          setRecipes(recipes);
          localStorage.setItem(
            "recipes" + "_" + cuisine,
            JSON.stringify(recipes)
          );
          setLoading(false);
        }
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    };
    fetchRecipes();
  }, [cuisine]);

  return (
    <div className="w-full mt-6 px-4 border-b">
      <h2 className="font-bold text-3xl tracking-widest mb-6">
        I WANT TO FIND
      </h2>
      <div className="flex flex-wrap items-center justify-center gap-4 w-full">
        {categories &&
          categories.map((category) => (
            <div
              className="max-w-[150px] lg:max-w-[200px] mb-8 cursor-pointer"
              key={category.id}
              onClick={() => {
                Setcuisine(category.name);
              }}
            >
              <img
                src={category.image}
                alt="recipe cover"
                className="w-full object-cover rounded-full hover:opacity-80"
              />
              <p className="text-xl leading-8 text-center mt-2 line-clamp-2">
                {category.name}
              </p>
            </div>
          ))}
      </div>
      {error || loading ? (
        <div className="h-[250px] flex justify-center items-center border">
          <p className="text-xl font-light leading-9">Loading...</p>
        </div>
      ) : (
        <>
          {recipes && (
            <>
              <h2 className="font-bold text-2xl text-center tracking-widest mb-6 uppercase">{cuisine}</h2>
              <div className="flex flex-wrap items-center justify-center gap-4 w-full">
                {recipes.map((recipe, i) => (
                  <RecipeCard recipe={recipe} key={i} />
                ))}
              </div>
            </>
          )}
        </>
      )}
    </div>
  );
}
