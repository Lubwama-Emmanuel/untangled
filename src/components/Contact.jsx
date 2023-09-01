import AppSection from "../ui/AppSection";
import Separator from "../ui/Separator";

export default function Contact() {
  return (
    <AppSection>
      <div className="mx-auto mb-10 space-y-8 text-center sm:max-w-[80%]">
        <h2 className="text-center text-3xl leading-[1.2] sm:text-6xl">
          How would you like us to be in touch with you?
        </h2>
        <div className="flex items-center justify-center">
          <form className="flex flex-col space-y-4 sm:w-[50%]">
            <input
              type="text"
              placeholder="Name"
              className="rounded-lg border border-blue-800 px-5 py-3 focus:outline-none"
            />
            <input
              type="email"
              placeholder="Email"
              className="rounded-lg border border-blue-800 px-5 py-3 focus:outline-none"
            />
            <input
              type="phone"
              placeholder="Phone"
              className="rounded-lg border border-blue-800 px-5 py-3 focus:outline-none"
            />
          </form>
        </div>
        <button className="w-26 inline-block rounded-lg bg-blue-800 px-7 py-2 text-stone-100 underline">
          Connect
        </button>
      </div>
      <Separator isMarginBottom={false} />
    </AppSection>
  );
}
