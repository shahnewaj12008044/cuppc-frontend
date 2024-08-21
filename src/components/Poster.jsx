import Lottie from "lottie-react";
import reader from "./../assets/reader.json";

const Poster = () => {
  return (
    <div className="my-container ">
      <div className=" items-center justify-between flex flex-col md:flex-row">
        <div>
          <h1 className="text-2xl w-full lg:leading-tight sm:text-4xl lg:text-4xl text-center lg:max-w-3xl title-text">
            Chittagong University Physics Programming Club
          </h1>
          <p className="text-center mt-2 font-bold text-gray-700 font-mono">
            Code the Universe: Where Physics Meets Algorithms
          </p>
        </div>
        <div className="relative  z-0 lg:w-1/2 ">
          <div className="w-full lg:w-4/5 lg:ml-auto h-56  sm:h-96">
            <Lottie animationData={reader} loop={true} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Poster;
