import { TbError404 } from "react-icons/tb"
import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="h-screen flex justify-center items-center">
      <div className="flex flex-col justify-center items-center">
        <h1 className="font-bold text-2xl md:text-4xl mb-4 tracking-widest">
          THIS PAGE DOESN'T EXIST!
        </h1>
        <TbError404 size={96} />
        <Link to="/" className="underline text-xl cursor-default">Back to Homepage</Link>
      </div>
    </div>
  );
}
