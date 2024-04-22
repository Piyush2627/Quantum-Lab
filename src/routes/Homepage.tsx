import { Link } from "react-router-dom";
import BubbleText from "../components/common/BubbleText/BubbleText";
function Homepage() {
  return (
    <>
      <div className="lg:h-screen lg:w-screen">
        <div className=" lg:flex justify-between">
          <div className=" h-screen  w-full ">
            <div className=" container p-14">
              <div className="lg:mt-32">
                <h1 className="w-96 text-5xl font-bold capitalize text-violet-950 ">
                  building the best tech on lab
                </h1>
              </div>
              <div className=" mt-5">
                <div className="text-4xl text-violet-400 font-thin">
                  <BubbleText
                    text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla,
                magnam?Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Eos, temporibus."
                  />
                </div>
              </div>
              <div className="mt-6">
                <Link
                  to="/dash/dashboard"
                  className="px-5 py-2.5 relative rounded group text-white font-medium inline-block"
                >
                  <span className="absolute top-0 left-0 w-full h-full rounded-md- opacity-50 filter blur-sm bg-gradient-to-br from-violet-900 to-blue-500"></span>
                  <span className="h-full w-full inset-0 absolute mt-0.5 ml-0.5 bg-gradient-to-br filter group-active:opacity-0 rounded opacity-50 from-violet-900 to-blue-500"></span>
                  <span className="absolute inset-0 w-full h-full transition-all duration-200 ease-out rounded shadow-xl bg-gradient-to-br filter group-active:opacity-0 group-hover:blur-sm from-violet-900 to-blue-500"></span>
                  <span className="absolute inset-0 w-full h-full transition duration-200 ease-out rounded bg-gradient-to-br to-violet-900 from-blue-500"></span>
                  <span className="relative">Login</span>
                </Link>
              </div>
            </div>
          </div>

          {/* img container */}
          <div className="  h-screen w-full">
            <div className=" p-6 w-full h-full">
              <div className="bg-violet-400 h-full rounded-2xl">
                container img
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Homepage;
