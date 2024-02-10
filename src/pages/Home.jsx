import CallToAction from "../components/CallToAction";
import Categories from "../components/Categories";
import SearchBar from "../components/SearchBar";
import RecipesList from "../components/recipe/RecipesList";

export default function Home() {
  return (
    <main className="min-h-screen max-w-[1070px] mx-auto pt-24">
      <section className="border-b border-gray-300 mb-6 px-4 text-center">
        <h1 className="font-bold text-2xl md:text-4xl mb-4 tracking-widest">
          MOUTHWATERING VEGAN & DAIRY-FREE RECIPES FOR EVERYONE
        </h1>
        <p className="text-xl md:text-[20px] font-light font-roboto leading-9 mb-12">
          From recipes to resources to what you can grab to eat at your favorite
          restaurant,{" "}
          <span className="italic">
            we are sharing all things vegan and plant based!
          </span>{" "}
          When possible,{" "}
          <strong className="font-bold">
            we always disclose allergens and talk about what allergies
          </strong>{" "}
          a new food, restaurant, or recipe may include.
        </p>
      </section>
      <SearchBar />
      <section className="border-b border-gray-300 mb-6 pb-6">
        <div className="px-4 mb-6">
          <h2 className="font-bold text-3xl tracking-widest mb-6 text-center">
            VEGAN 30 MINUTE RECIPES
          </h2>
          <p className="text-xl md:text-[20px] font-light font-roboto leading-9">
            If you are looking for amazing Veganuary meals to try out being
            vegan or plant based, look no further! These are the best{" "}
            <strong className="font-bold">vegan 30 Minute recipes</strong> to
            enjoy! Get to try the most delicious vegan recipes that don’t take
            up your time so you can see how easy it can be!
          </p>
        </div>
        <RecipesList limit={12} diet={"vegan"} name={"vegan"} />
      </section>
      <section className="border-b border-gray-300 mb-6 pb-6">
        <div className="px-4 mb-6">
          <h2 className="font-bold text-3xl tracking-widest mb-6 ">
            MOST POPULAR
          </h2>
          <p className="text-lg md:text-[20px] font-light font-roboto leading-9">
            See some the most popular recipes on our site that are 100% decided
            by you, our readers!
          </p>
        </div>
        <RecipesList limit={8} name={"popular"} />
      </section>
      <section className="border-b border-gray-300 mb-6 pb-6">
        <div className="px-4 mb-6">
          <h2 className="font-bold text-3xl tracking-widest mb-6 ">SNACK</h2>
          <p className="text-lg md:text-[20px] font-light font-roboto leading-9">
            Never miss a new recipe! Check out the newest vegan recipes from our
            kitchen that are guaranteed to impress with each delicious bite.
          </p>
        </div>
        <RecipesList limit={8} type={"snack"} name={"snack"} />
      </section>
      <CallToAction />
      <Categories />
      <section className="border-b border-gray-300 my-6 pb-6">
        <div className="px-4 mb-6">
          <h2 className="font-bold text-3xl tracking-widest mb-6 ">DESSERT</h2>
          <p className="text-lg md:text-[20px] font-light font-roboto leading-9">
            Never miss a new recipe! Check out the newest vegan recipes from our
            kitchen that are guaranteed to impress with each delicious bite.
          </p>
        </div>
        <RecipesList limit={8} type={"dessert"} name={"dessert"} />
      </section>
      <section className="border-b border-gray-300 mb-6 pb-6">
        <div className="px-4 mb-6">
          <h2 className="font-bold text-3xl tracking-widest mb-6 ">DRINK</h2>
          <p className="text-lg md:text-[20px] font-light font-roboto leading-9">
            Never miss a new recipe! Check out the newest vegan recipes from our
            kitchen that are guaranteed to impress with each delicious bite.
          </p>
        </div>
        <RecipesList limit={8} type={"drink"} name={"drink"} />
      </section>
    </main>
  );
}
