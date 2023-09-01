import { Link } from "react-router-dom";
import Links from "../ui/Links";

export default function Header() {
  return (
    <header className="m-auto grid max-w-[90%] grid-cols-[1fr_4fr] items-center gap-[20%] py-5">
      <Link to="/">
        <div className="flex items-center">
          <img src="images/vector.svg" alt="logo" />
          <h3 className="text-2xl font-semibold text-red-700">Untangle</h3>
        </div>
      </Link>
      <Links styles={"list-none flex text-red-600 justify-between"} />
    </header>
  );
}
