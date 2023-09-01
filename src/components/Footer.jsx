import { Link } from "react-router-dom";
import Links from "../ui/Links";

export default function Footer() {
  return (
    <header className="m-auto flex max-w-[90%] items-center justify-between py-5 sm:grid sm:grid-cols-[1fr_4fr] sm:gap-[20%]">
      <Link to="/">
        <div className="flex items-center">
          <img src="images/vector.svg" alt="logo" />
          <h3 className="text-2xl font-semibold text-red-700">Untangle</h3>
        </div>
      </Link>
      <div>
        <Links
          styles={"hidden list-none text-red-600 justify-between sm:flex"}
        />
        <img
          src="SVG/chevron-up.svg"
          alt="logo"
          className="h-14 w-14 sm:hidden"
        />
      </div>
    </header>
  );
}
