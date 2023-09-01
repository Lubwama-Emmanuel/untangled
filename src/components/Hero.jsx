import AppSection from "../ui/AppSection";
import Heading from "../ui/Heading";
import Separator from "../ui/Separator";

export default function Hero() {
  return (
    <AppSection>
      <div className="grid grid-cols-[1fr_4fr]">
        <div className="">
          <img src="images/vector-2.png" alt="vector" className="" />
        </div>
        <div className="grid grid-rows-2">
          <div className="flex items-center justify-center">
            <h2 className="w-[60%] text-7xl font-light leading-[1.2]">
              Untangling the transition from{" "}
              <span className="font-medium">student</span> to{" "}
              <span className="font-medium text-red-600 underline">adult</span>
            </h2>
          </div>
          <div className="">
            <Heading
              number={1}
              title={"Get these things right in your 20's and life goes well"}
            />

            <div
              style={{
                backgroundImage: `url(images/chart.png)`,
              }}
              className="h-[590px] bg-cover"
            >
              {/* <img
                src="images/chart.png"
                alt="vector"
                className="h-[546px] text-center"
              /> */}
            </div>
            <h2 className="mt-14 text-center text-2xl">
              Are any of these relevant for you?
            </h2>
          </div>
        </div>
      </div>
      <Separator />
    </AppSection>
  );
}
