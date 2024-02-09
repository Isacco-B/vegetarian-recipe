import { useState } from "react";
import { IoMdClose } from "react-icons/io";

export default function CallToAction() {
  const [showAlert, setShowAlert] = useState(false);
  const [form, setForm] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowAlert(true);
    setForm("");
  };

  return (
    <div className="bg-slate-100 w-full p-4">
      <div className="flex flex-col md:flex md:flex-row gap-2 justify-center items-center">
        <p className="inline font-bold text-xl tracking-widest flex-2">
          SIGNUP FOR NEWSLETTER
        </p>
        <div className="flex-1 text-end" onSubmit={handleSubmit}>
          <form>
            <input
              type="text"
              placeholder="E-Mail Address"
              className="border-none md:w-2/3 h-12 px-4"
              value={form}
              onChange={(e) => setForm(e.target.value)}
            />
            <button
              className="bg-black text-white font-bold h-12 w-16"
              disabled={!form}
            >
              GO
            </button>
          </form>
        </div>
      </div>
      {showAlert && (
        <div
          className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative mt-6 sm:w-1/2 mx-auto"
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
    </div>
  );
}
