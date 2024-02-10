/* eslint-disable react/no-unescaped-entities */
export default function About() {
  return (
    <div className="min-h-screen max-w-[1070px] mx-auto pt-32">
      <div className="border-b border-gray-300 mb-6 px-4 text-center">
        <h1 className="font-bold text-2xl md:text-4xl mb-4 tracking-widest">
          Welcome to Planty of Food!
        </h1>
        <p className="text-xl md:text-[20px] font-light font-roboto leading-9 mb-12">
          We're thrilled to welcome you to our virtual corner dedicated to
          vegetarian and vegan cuisine. Planty of Food is more than just a
          recipe website; it's an inspiration for anyone looking to explore the
          wonderful world of plant-based dishes. Here, we're committed to
          providing creative, nutritious, and delicious recipes that not only
          satisfy your taste buds but also align with your eco-friendly spirit.
        </p>
      </div>
      <div className="border-b border-gray-300 mb-6 pb-6">
        <div className="px-4 mb-6 text-center">
          <h2 className="font-bold text-3xl tracking-widest mb-6">
            Our Mission
          </h2>
          <p className="text-xl md:text-[20px] font-light font-roboto leading-9">
            At Planty of Food, we firmly believe in the positive impact that a
            plant-based diet can have on our individual health, animal welfare,
            and the environment. Our mission is to democratize vegetarian and
            vegan cooking, making it accessible to everyone, regardless of
            culinary skills or dietary restrictions.
          </p>
        </div>
      </div>
      <div className="border-b border-gray-300 mb-6 pb-6">
        <div className="px-4 mb-6 text-center">
          <h2 className="font-bold text-3xl tracking-widest mb-6">
            What You'll Find Here
          </h2>
          <p className="text-xl md:text-[20px] font-light font-roboto leading-9">
            In our extensive repertoire of recipes, you'll discover a wide
            variety of dishes, from nutrient-packed breakfasts to gourmet
            dinners. We experiment with fresh, seasonal, and colorful
            ingredients, striving to bring innovation and flavor to your table.
            Whether you're a seasoned chef or a beginner, there's something
            inspiring for every occasion.
          </p>
        </div>
      </div>
    </div>
  );
}
