/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

export default function RecipeCard({ recipe }) {
  return (
    <article className="max-w-[160px] h-[280px] lg:max-w-[240px] lg:h-[420px] mb-2 md:mb-6 group relative overflow-hidden transition-all">
      <img
        src={recipe.image}
        alt="recipe cover"
        className="h-[200px] lg:h-[330px] w-full object-cover group-hover:h-[170px] lg:group-hover:h-[300px] group-hover:opacity-80 transition-all duration-300 z-20"
      />
      <p className="text-mb md:text-xl leading-8 text-center mt-4 line-clamp-2">
        {recipe.title}
      </p>
      <Link
        to={`/recipe/${recipe.id}`}
        className="z-10 underline group-hover:bottom-0 bottom-[-200px] left-0 right-0 absolute transition-all duration-300 text-center text-gray-700 hover:text-black cursor-pointer pb-2"
      >
        More info...
      </Link>
    </article>
  );
}
