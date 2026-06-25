import { MdDone } from "react-icons/md";


const Card = ({product}) => {
    return (
              <div className="p-6 border-2 border-[#F2F2F2] rounded-md w-[380px] space-y-4">
        <div className="inline-flex border border-[#F2F2F2] rounded-full p-3">
          <img src="/public/products/writing_2327400 1.png" alt="" />
        </div>
        <h2 className="font-semibold text-2xl">{product.name}</h2>
        <p className="text-[#627382] text-[16px]">
          Generate high-quality content, blogs, and marketing copy in seconds
          with advanced AI.
        </p>
        <p><span className="text-2xl font-semibold">$29</span><span className="text-[#627382]">/Mo</span></p>
        <ul className="text-[#627382]">
          <li className="flex items-center gap-2"><MdDone className="text-[#30B868] text-xl" />Unlimited AI generations</li>
          <li className="flex items-center gap-2"><MdDone className="text-[#30B868] text-xl" />50+ writing templates</li>
          <li className="flex items-center gap-2"><MdDone className="text-[#30B868] text-xl" />Grammar checker</li>
        </ul>
        <button className="btn rounded-full bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white w-full">
          Buy Now
        </button>
      </div>
    );
};

export default Card;