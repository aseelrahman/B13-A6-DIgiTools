import { IoPlayOutline } from "react-icons/io5";
import banner from "../../assets/banner.png";

const Hero = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-5 justify-between items-center my-10 gap-10">
      <div className="flex flex-col space-y-4 md:col-span-3 text-center md:text-left">
        <h1 className="font-bold text-4xl md:text-6xl lg:text-7xl">
          Supercharge Your Digital Workflow
        </h1>
        <p className="text-sm md:text-base">
          Access premium AI tools, design assets, templates, and productivity
          software—all in one place. Start creating faster today. Explore Products
        </p>
        <div className="flex gap-4 justify-center md:justify-start flex-wrap">
          <button className="btn rounded-full bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white">
            Explore Products
          </button>
          <button className="btn flex items-center gap-2 rounded-full border border-[#6B2DFF] bg-white">
            <IoPlayOutline className="text-[#6B2DFF] text-xl" />
            <span className="bg-linear-to-r from-[#4F39F6] to-[#9514FA] bg-clip-text text-transparent">
              Watch Demo
            </span>
          </button>
        </div>
      </div>
      <div className="md:col-span-2 flex justify-center">
        <img src={banner} alt="Banner image" className="w-full max-w-sm md:max-w-full"/>
      </div>
    </div>
  );
};

export default Hero;