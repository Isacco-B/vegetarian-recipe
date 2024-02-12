import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { CiClock2, CiHeart, CiForkAndKnife } from "react-icons/ci";
import RecipesList from "../components/recipe/RecipesList";
import Servings from "../components/recipe/Servings";
import ReadyInMinutes from "../components/recipe/ReadyInMinutes";
import HealthScore from "../components/recipe/HealthScore";
import CallToAction from "../components/CallToAction";

export default function RecipePage() {
  const [recipe, setRecipe] = useState({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const { recipeId } = useParams();
  const BASE_URL = "https://api.spoonacular.com";

  useEffect(() => {
    const fetchRecipe = async () => {
      try {
        setLoading(true);
        const localRecipe = localStorage.getItem(`recipe_${recipeId}`);
        if (localRecipe) {
          setRecipe(JSON.parse(localRecipe));
          setLoading(false);
        } else {
          const res = await axios.get(
            `${BASE_URL}/recipes/${recipeId}/information?apiKey=${
              import.meta.env.VITE_APIKEY
            }`
          );
          const data = res.data;
          localStorage.setItem(`recipe_${recipeId}`, JSON.stringify(data));
          setRecipe(data);
          setLoading(false);
          setError(false);
        }
      } catch (error) {
        setError(true);
        setLoading(false);
      }
    };
    fetchRecipe();
  }, [recipeId]);

  const {
    title,
    image,
    servings,
    readyInMinutes,
    summary,
    instructions,
    healthScore,
    diets,
  } = recipe;

  if (loading || error) {
    return (
      <div className="min-h-screen flex justify-center items-center">
        <p className="text-xl font-light leading-9">Loading...</p>
      </div>
    );
  }
  return (
    <article className="min-h-screen max-w-[1070px] mx-auto flex flex-col pt-24 p-4 gap-10">
      <h1 className="font-bold text-2xl md:text-4xl mb-4 tracking-widest text-center uppercase">
        {title}
      </h1>
      {diets && diets.length !== 0 && (
        <div className="flex flex-col md:flex-row gap-1 md:gap-3 items-baseline">
          <h3 className="font-bold text-1xl tracking-widest text-start">
            DIETS:
          </h3>
          <ul className="flex flex-wrap">
            {diets.map((diet, i) => (
              <li
                key={i}
                className="text-lg font-light underline leading-9 mr-2"
              >
                {diet}
              </li>
            ))}
          </ul>
        </div>
      )}
      <img
        src={image}
        alt={title}
        className="max-h-[600px] w-full object-cover rounded-3xl"
      />
      <div className="flex justify-around items-center w-full md:w-1/2 mx-auto">
        <Servings
          content={servings || 0}
          icon={<CiForkAndKnife size={24} />}
          style={"w-24 h-24"}
        />
        <ReadyInMinutes
          content={readyInMinutes || 0}
          icon={<CiClock2 size={24} />}
          style={"w-24 h-24"}
        />
        <HealthScore
          content={healthScore || 0}
          icon={<CiHeart size={24} />}
          style={"w-24 h-24"}
        />
      </div>
      <div>
        <h2 className="font-bold text-2xl tracking-widest mb-3 ">SUMMARY</h2>
        <p
          dangerouslySetInnerHTML={{ __html: summary && summary }}
          className="text-xl font-light  font-roboto leading-9"
        ></p>
      </div>
      <div>
        <h2 className="font-bold text-2xl tracking-widest mb-3 ">
          INSTRUCTIONS
        </h2>
        <p
          dangerouslySetInnerHTML={{ __html: instructions && instructions }}
          className="text-xl font-light font-roboto leading-9"
        ></p>
        <p className="text-xl font-light leading-9"></p>
      </div>
      <div>
        <CallToAction />
      </div>
      <div>
        <h2 className="font-bold text-2xl tracking-widest mb-6 ">
          SIMILAR RECIPES
        </h2>
        <RecipesList limit={8} diet={"vegetarian" }name={"similar"} />
      </div>
    </article>
  );
}
