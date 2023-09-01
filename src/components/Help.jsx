import AppSection from "../ui/AppSection";
import Heading from "../ui/Heading";

export default function Help() {
  return (
    <AppSection>
      <div className="mx-auto mb-16 max-w-[80%]">
        <Heading number={4} title={"How you can help?"} />
        <div className="grid grid-cols-2">
          <h3>What's the best way for you to make an impact?</h3>
          <ul className="list-disc space-y-2 font-medium">
            <li>take a 10-minute survey and debrief your answers by zoom</li>
            <li>
              get on a zoom call with 8-10 peers and design something cool
            </li>
            <li>
              join in with 20+ other young adults for an in-person workshop
            </li>
            <li>reach out and tell me more</li>
          </ul>
        </div>
      </div>
    </AppSection>
  );
}
