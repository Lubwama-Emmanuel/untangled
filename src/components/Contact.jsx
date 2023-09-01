import Heading from "../ui/Heading";

export default function Contact() {
  return (
    <section id="contact" className="m-auto max-w-[90%]">
      <div className="mx-auto space-y-8 sm:mb-10 sm:max-w-[90%]">
        <Heading number={4} title={"How you can help?"} />
        <div className="grid gap-[2%] sm:grid-cols-2">
          <div>
            <h3 className="mb-5 text-xl font-bold sm:text-2xl">
              What's the best way for you to make an impact?
            </h3>
            <form className=" space-y-2 px-5 font-medium">
              <div className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  className="h-4 w-4 transition-all duration-200 focus:outline-none focus:ring focus:ring-blue-600 focus:ring-offset-2"
                />
                <label>
                  take a 10-minute survey and debrief your answers by zoom
                </label>
              </div>
              <div className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  className="transition-all duration-200 focus:outline-none focus:ring focus:ring-blue-600 focus:ring-offset-2 sm:h-4 sm:w-4"
                />
                <label>
                  get on a zoom call with 8-10 peers and design something cool
                </label>
              </div>
              <div className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  className="transition-all duration-200 focus:outline-none focus:ring focus:ring-blue-600 focus:ring-offset-2 sm:h-4 sm:w-4"
                />
                <label>
                  join in with 20+ other young adults for an in-person workshop
                </label>
              </div>
              <div className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  className="transition-all duration-200 focus:outline-none focus:ring focus:ring-blue-600 focus:ring-offset-2 sm:h-4 sm:w-4"
                />
                <label>reach out and tell me more</label>
              </div>
            </form>
          </div>
          <div className="">
            <h3 className="mb-5 text-xl font-bold sm:text-2xl">
              How would you like us to be in touch with you?
            </h3>
            <form className="flex flex-col space-y-4">
              <input
                type="text"
                placeholder="Name"
                className="rounded-full border border-blue-800 px-5 py-3 transition-all duration-200 focus:outline-none focus:ring focus:ring-blue-600 focus:ring-offset-2"
              />
              <input
                type="email"
                placeholder="Email"
                className="rounded-full border border-blue-800 px-5 py-3 transition-all duration-200 focus:outline-none focus:ring focus:ring-blue-600 focus:ring-offset-2"
              />
              <input
                type="phone"
                placeholder="Phone"
                className="rounded-full border border-blue-800 px-5 py-3 transition-all duration-200 focus:outline-none focus:ring focus:ring-blue-600 focus:ring-offset-2"
              />
            </form>
          </div>
        </div>
        <div className="flex justify-center">
          <button className="w-26 rounded-full bg-blue-800 px-7 py-2 text-center font-semibold text-stone-100 transition-all duration-200 focus:outline-none focus:ring focus:ring-blue-600 focus:ring-offset-2">
            Connect
          </button>
        </div>
      </div>
    </section>
  );
}
