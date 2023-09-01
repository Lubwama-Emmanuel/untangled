import About from "../components/About";
import Contact from "../components/Contact";
import Help from "../components/Help";
import Hero from "../components/Hero";
import Offer from "../components/Offer";

export default function Homepage() {
  return (
    <div className="mx-auto max-w-screen-2xl">
      <Hero />
      <Offer />
      <About />
      <Help />
      <Contact />
    </div>
  );
}
