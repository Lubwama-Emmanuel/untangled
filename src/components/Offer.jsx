import AppSection from "../ui/AppSection";
import Heading from "../ui/Heading";
import Separator from "../ui/Separator";

export default function Offer() {
  return (
    <AppSection>
      <div className="grid grid-cols-[7fr_1fr]">
        <div className="mx-auto max-w-[80%]">
          <Heading number={2} title={"What we offer?"} />
          <div className="space-y-2 text-center text-xl">
            <p>
              What if people in their 20's designed "STUFF" they would actually
              use to sort this out?
            </p>
            <p>What if you could help your peers get this right?</p>
          </div>
          <div className="my-10 grid grid-cols-2 gap-10 ">
            <Offers
              title={"The opportunity is here"}
              desc={
                "to help create the products, tools and services that will help millionsof young adults make a successful transition to full adulthood"
              }
            />
            <Offers
              title={"AND ALONG THE WAY "}
              desc={"you might just learn something important about yourself."}
            />
            <Offers
              title={"IT’S ABSOLUTELY FREE"}
              desc={"to be a part of this project. There is no cost for this"}
            />
            <Offers
              title={"BALANCE OF EXCHANGE"}
              desc={
                "is the key word for what will happen. You give us your time and ideas – we give you ours."
              }
            />
          </div>
        </div>
        <div>
          <img src="images/offer.png" alt="offer" className="h-[590px]" />
        </div>
      </div>

      <Separator />
    </AppSection>
  );
}

function Offers({ title, desc }) {
  return (
    <div className="border-b-2 border-t-2 border-[#000] py-5">
      <h2 className="text-xl uppercase text-blue-800">{title}</h2>
      <p>{desc}</p>
    </div>
  );
}