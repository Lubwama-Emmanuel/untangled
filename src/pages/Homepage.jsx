import About from "../components/About";
import Contact from "../components/Contact";
import Hero from "../components/Hero";
import Offer from "../components/Offer";

export default function Homepage() {
  return (
    <div>
      <Hero />
      <Offer />
      <About />
      <Contact />
    </div>
  );
}
