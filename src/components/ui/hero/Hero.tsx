import banner from "../../../assets/banner-stack.png";

const Hero = () => {
  return (
    <>
      <div className="mt-10 sm:mt-0 flex flex-col sm:flex-row justify-between items-center gap-4 w-full">
        {/* Hero section writings   */}
        <div className="text-center sm:text-start">
          <p className="text-4xl font-bold">Build Your Ideal</p>
          <p className="text-4xl font-bold bg-linear-to-r from-[#FF5722] to-[#7C3AED] bg-clip-text text-transparent">
            Development Stack
          </p>
          <p className="text-sm text-gray-500 mt-2 mb-2">
            Explore frontend, backend, database, and tooling options,
            <br /> compare them side by side, and put together the stack that
            fits your
            <br /> next project.
          </p>
          <div className="flex flex-wrap gap-2 items-center justify-center sm:justify-start">
            <button className="bg-linear-to-r from-[#F97316] to-[#EC4899] text-white font-bold py-2 px-4 rounded">
              <a href="#" className="text-white hover:text-[#240b18]">
                Explore Technologies
              </a>
            </button>
            <button className="border border-white-500 text-white-200 font-bold py-2 px-4 rounded">
              <a href="#" className="text-black hover:text-[#8d4c6d]">
                Learn More
              </a>
            </button>
          </div>
        </div>
        {/* Hero section images */}
        <div>
          <img src={banner} alt="Banner"></img>
        </div>
      </div>
    </>
  );
};

export default Hero;
