import { useState } from "react";
import { IoMdClose } from "react-icons/io";

export default function Subscribe() {
  const [showAlert, setShowAlert] = useState(false);
  const [error, setError] = useState("");
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.firstName || !form.lastName || !form.email) {
      setError("Please fill in all fields.");
    } else {
      setError("");
      setShowAlert(true);
      setForm({
        firstName: "",
        lastName: "",
        email: "",
      });
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };
  return (
    <div className="min-h-screen max-w-3xl mx-auto pt-24 px-4">
      <h1 className="font-bold text-2xl md:text-4xl mb-4 tracking-widest">
        SUBSCRIBE
      </h1>
      <p className="text-xl md:text-[20px] font-light font-roboto leading-9 mb-12">
        Subscribe to our Planty of Food newsletter today and become part of our
        vibrant vegetarian and vegan culinary community! By signing up, you'll
        receive weekly updates on the latest in plant-based cuisine, tips for
        healthy and sustainable cooking, and for a limited time only, claim your
        special gift: 15 exclusive and delicious recipes absolutely free!
      </p>
      <div className="text-center mt-12 mb-4">
        <p className="text-5xl italic font-thin mb-2">Get 15 Top Recipes.</p>
        <p className="text-lg text-gray-700">
          Sign up with your email address to get weekly newsletter!
        </p>
      </div>
      <form onSubmit={handleSubmit}>
        <div className="flex flex-col md:flex-row gap-2 mb-2">
          <input
            type="text"
            placeholder="First name"
            name="firstName"
            value={form.firstName}
            onChange={handleChange}
            className="w-full h-12 px-4 border border-gray-300 focus:border-gray-700 focus:ring-0"
          />
          <input
            type="text"
            placeholder="Last name"
            name="lastName"
            value={form.lastName}
            onChange={handleChange}
            className="w-full h-12 px-4 border border-gray-300 focus:border-gray-700 focus:ring-0"
          />
          <input
            type="text"
            placeholder="Email address"
            name="email"
            value={form.email}
            onChange={handleChange}
            className="w-full h-12 px-4 border border-gray-300 focus:border-gray-700 focus:ring-0"
          />
        </div>
        {error && (
          <p className="text-xl md:text-[20px] font-roboto leading-9 text-red-500">
            {error}
          </p>
        )}
        {showAlert && (
          <div
            className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative mb-2 sm:w-1/2"
            role="alert"
          >
            <strong className="font-bold">Thank you </strong>
            <span className="block sm:inline">
              for subscribing to our newsletter!
            </span>
            <span
              className="absolute top-0 bottom-0 right-0 px-4 py-3"
              onClick={() => setShowAlert(false)}
            >
              <IoMdClose size={18} className="hover:cursor-pointer" />
            </span>
          </div>
        )}
        <button
          className="bg-black text-white font-bold h-12 w-16 cursor-pointer hover:scale-90"
          disabled=""
          type="submit"
        >
          GO
        </button>
      </form>
    </div>
  );
}
