import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import { useState } from "react";
import MobileMenu from "../components/MobileMenu";

export default function AppLayout() {
  const [clicked, setClicked] = useState(false);

  return (
    <div>
      <Header clicked={clicked} setClicked={setClicked} />
      {clicked && <MobileMenu />}

      <main>
        <Outlet />
      </main>

      <Header />
    </div>
  );
}
