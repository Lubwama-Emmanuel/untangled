import { Link } from "react-router-dom";
import Heading from "../ui/Heading";
import AppSection from "../ui/AppSection";

const scrollToTop = () => {
  window.scrollTo(0, 0);
};

export default function About() {
  return (
    <AppSection>
      <div id="about" className="mx-auto max-w-[100%] sm:max-w-[90%]">
        <div className="my-8 sm:hidden">
          <img src="images/vector-top.png" alt="separator" className="" />
        </div>
        <Heading number={3} title={"About Dr.Mitch"} />
        <div className="mb-10 grid grid-cols-2 items-center">
          <div className="flex flex-col items-center space-y-10 px-2 sm:block sm:space-y-16">
            <Aspect aspect={"investor"} />
            <Aspect aspect={"Psychologist"} />
            <Aspect aspect={"social scientist"} />
            <Aspect aspect={"serial entrepreneur"} />
            {/* <Aspect aspect={"management consultant"} /> */}
          </div>
          <div className="flex justify-center">
            <img
              src="images/Mitch.jpg"
              alt="Dr.Mitch"
              className="rounded-lg sm:h-[400px]"
            />
          </div>
        </div>
        <div className="mb-16 flex justify-center">
          <h2 className="w-[90%] rounded-lg border border-blue-800 py-3 text-center text-2xl font-bold text-blue-800 underline sm:w-[30%] sm:py-2">
            <Link onClick={scrollToTop} to="/about_mitch">
              Learn more about Dr. Mitch
            </Link>
          </h2>
        </div>
      </div>
      <div className="my-8 sm:hidden">
        <img src="images/vector-top.png" alt="separator" className="" />
      </div>
    </AppSection>
  );
}

function Aspect({ aspect }) {
  return (
    <div className="flex items-center justify-between gap-2">
      <div className="hidden h-[2px] w-auto flex-grow bg-[#000] sm:block"></div>
      <h3 className="capitalize">{aspect}</h3>
    </div>
  );
}
