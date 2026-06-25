import { IoPlayOutline } from "react-icons/io5";
import banner from "../../assets/banner.png";

const Hero = () => {
  return (
    <div className="w-300 mx-auto flex justify-between items-center my-15 gap-14">
      <div className="flex flex-1 flex-col space-y-4">
        <h1 className="font-bold text-7xl">
          Supercharge Your Digital Workflow
        </h1>
        <p>
          Access premium AI tools, design assets, templates, and productivity{" "}
          <br />
          software—all in one place. Start creating faster today. <br />
          Explore Products
        </p>
        <div className="flex gap-4">
          <button className="btn rounded-full bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white">
            Explore Products
          </button>
          <button className=" btn flex items-center gap-2 rounded-full border border-[#6B2DFF]  bg-white">
            <IoPlayOutline className="text-[#6B2DFF] text-xl" />
            <span className="bg-linear-to-r from-[#4F39F6] to-[#9514FA] bg-clip-text text-transparent">
              Watch Demo
            </span>
          </button>
        </div>
      </div>
      <div>
        <img src={banner} alt="Banner image"/>
      </div>
    </div>
  );
};

export default Hero;
