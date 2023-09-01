import { NavLink } from "react-router-dom";
import AppSection from "../ui/AppSection";
import Heading from "../ui/Heading";
import Separator from "../ui/Separator";

export default function About() {
  return (
    <AppSection>
      <div className="mx-auto max-w-[80%]">
        <Heading number={3} title={"About Dr.Mitch"} />
        <div className="mb-10 grid grid-cols-2">
          <div className="space-y-16 px-2">
            <Aspect aspect={"investor"} />
            <Aspect aspect={"Psychologist"} />
            <Aspect aspect={"social scientist"} />
            <Aspect aspect={"serial entrepreneur"} />
            <Aspect aspect={"management consultant"} />
          </div>
          <div className="flex justify-center">
            <img
              src="images/Mitch.jpg"
              alt="Dr.Mitch"
              className="h-[400px] rounded-lg"
            />
          </div>
        </div>
        <div className="mb-16 flex justify-center">
          <h3 className="w-[30%] rounded-lg border border-blue-800 py-2 text-center text-blue-800 underline">
            <NavLink to="/about_mitch">Learn more about Dr. Mitch</NavLink>
          </h3>
        </div>
      </div>
      <Separator />
    </AppSection>
  );
}

function Aspect({ aspect }) {
  return (
    <div className="flex items-center justify-between gap-2">
      <div className="h-[2px] w-auto flex-grow bg-[#000]"></div>
      <h3 className="capitalize">{aspect}</h3>
    </div>
  );
}
