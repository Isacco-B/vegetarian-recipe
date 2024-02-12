/* eslint-disable react/prop-types */
import axios from "axios";
import _ from "lodash";
import { useEffect, useState } from "react";
import { FaLongArrowAltRight } from "react-icons/fa";
import RecipeCard from "./RecipeCard";

export default function RecipesList({ limit, type, diet, name }) {
  const [recipes, setRecipes] = useState([]);
  const [showMore, setShowMore] = useState(true);
  const [recipeLimit, setRecipeLimit] = useState(4);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const BASE_URL = "https://api.spoonacular.com";

  useEffect(() => {
    const fetchRecipes = async () => {
      try {
        setLoading(true);
        const getLocalRecipes = localStorage.getItem("recipes" + "_" + name);
        if (getLocalRecipes) {
          setRecipes(JSON.parse(getLocalRecipes));
          setLoading(false);
        } else {
          const tags = [];
          diet ? tags.push(type) : tags.push("vegetarian");
          if (type) tags.push(type);
          const tagsString = tags.join(",");
          const res = await axios.get(
            `${BASE_URL}/recipes/random?apiKey=${
              import.meta.env.VITE_APIKEY
            }&number=${
              limit || 4
            }&include-tags=${tagsString}&exclude-tags=Pescetarian,Paleo,Primal,Whole30`
          );
          const data = res.data;
          const recipes = _.get(data, "recipes", []);
          setRecipes(recipes);
          localStorage.setItem("recipes" + "_" + name, JSON.stringify(recipes));
          setLoading(false);
        }
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    };
    fetchRecipes();
  }, []);

  const handleShowMore = () => {
    setRecipeLimit(showMore ? recipes.length : 4);
    setShowMore((prev) => !prev);
  };

  if (loading || error) {
    return (
      <div className="h-[250px] flex justify-center items-center border">
        <p className="text-xl font-light leading-9">Loading...</p>
      </div>
    );
  }
  return (
    <div className="flex flex-wrap items-center justify-center gap-4 w-full">
      {recipes.slice(0, recipeLimit).map((recipe, i) => (
        <RecipeCard recipe={recipe} key={i} />
      ))}
      {recipes.length > 4 && (
        <div className="flex items-center justify-end gap-2 w-full px-4">
          <button
            className="text-md md:text-lg font-light hover:underline cursor-pointer"
            onClick={handleShowMore}
          >
            {showMore ? "See more" : "See less"}{" "}
            <span className="font-normal">{name} recipes</span>
          </button>
          <FaLongArrowAltRight />
        </div>
      )}
    </div>
  );
}
