const Rating = () => {
  return (
    <div className="bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white">
      <div className="container mx-auto px-4 py-10 flex flex-col md:flex-row justify-around items-center gap-8 md:gap-0">
        
        <div className="flex flex-col items-center">
          <span className="font-semibold text-4xl md:text-6xl">50K+</span>
          <span className="text-lg md:text-2xl">Active Users</span>
        </div>

        <div className="hidden md:flex divider divider-horizontal before:w-px after:w-px before:bg-white after:bg-white"></div>

        <div className="flex flex-col items-center">
          <span className="font-semibold text-4xl md:text-6xl">200+</span>
          <span className="text-lg md:text-2xl">Premium Tools</span>
        </div>

        <div className="hidden md:flex divider divider-horizontal before:w-px after:w-px before:bg-white after:bg-white"></div>

        <div className="flex flex-col items-center">
          <span className="font-semibold text-4xl md:text-6xl">4.9</span>
          <span className="text-lg md:text-2xl">Rating</span>
        </div>

      </div>
    </div>
  );
};

export default Rating;