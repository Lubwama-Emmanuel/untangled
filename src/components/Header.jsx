import { Link } from "react-router-dom";
import Links from "../ui/Links";

export default function Header({ clicked, setClicked }) {
  return (
    <header className="m-auto flex max-w-[98%] items-center justify-between py-5 sm:grid sm:max-w-[95%] sm:grid-cols-[1fr_4fr] md:gap-1 lg:gap-[30%]">
      <Link to="/">
        <div className="flex items-center">
          <img src="images/vector.svg" alt="logo" />
          <h3 className="text-2xl font-semibold text-red-700">Untangle</h3>
        </div>
      </Link>
      <div>
        <Links
          styles={
            "hidden text-lg list-none text-red-600 justify-between md:flex sm:flex"
          }
        />
      </div>

      {clicked ? (
        <div onClick={() => setClicked((value) => !value)}>
          <h2 className="text-5xl uppercase text-stone-700">x</h2>
        </div>
      ) : (
        <div
          className="sm:hidden md:hidden"
          onClick={() => setClicked((value) => !value)}
        >
          <div className="mb-1 h-1 w-8 bg-stone-700"></div>
          <div className="mb-1 h-1 w-8 bg-stone-700"></div>
          <div className="mb-1 h-1 w-8 bg-stone-700"></div>
          <div className="h-1 w-8 bg-stone-700"></div>
        </div>
      )}
    </header>
  );
}
