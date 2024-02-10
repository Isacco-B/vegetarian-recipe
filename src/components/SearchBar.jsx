import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function SearchBar() {
  const [searchData, setSearchData] = useState("");
  const [recipes, setRecipes] = useState([]);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const BASE_URL = "https://api.spoonacular.com";

  useEffect(() => {
    const fetchRecipes = async () => {
      try {
        if (searchData !== "") {
          const res = await axios.get(
            `${BASE_URL}/recipes/autocomplete?apiKey=${
              import.meta.env.VITE_APIKEY
            }&number=10&query=${searchData}`
          );
          const data = res.data;
          setRecipes(data);
          setError("")
        } else {
          return;
        }
      } catch (error) {
        setError(error.message);
      }
    };
    fetchRecipes();
  }, [searchData]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (recipes.length < 1) {
      return setError("No recipes found!");
    }
    navigate(`/recipe/${recipes[0].id}`);
    setError("");
    setRecipes([]);
  };

  return (
    <div className="mb-6 p-4">
      <form onSubmit={handleSubmit}>
        <div className="flex justify-center items-center">
          <input
            type="text"
            placeholder="Search for a recipe"
            className="w-full h-12 px-4 border border-gray-300 focus:border-gray-700 focus:ring-0"
            value={searchData}
            onChange={(e) => (setSearchData(e.target.value))}
          />
          <button
            className="bg-black text-white font-bold h-12 w-16 cursor-pointer hover:scale-90"
            disabled={!searchData}
            type="submit"
          >
            GO
          </button>
        </div>
      </form>
      {recipes.length > 1 && (
        <div className="flex flex-col border border-t-0 p-4">
          {recipes &&
            recipes.map((recipe) => (
              <Link
                key={recipe.id}
                className="hover:bg-gray-200 hover:font-semibold p-1"
                to={`/recipe/${recipe.id}`}
              >
                {recipe.title}
              </Link>
            ))}
        </div>
      )}
      {error && <p className="p-4 font-semibold">{error}</p>}
    </div>
  );
}
