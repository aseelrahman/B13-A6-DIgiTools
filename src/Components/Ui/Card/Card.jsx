import { MdDone } from "react-icons/md";
import { toast } from "react-toastify";

const Card = ({ product, setItems, items, price, setPrice }) => {
  const tagColors = {
    bestSeller: "bg-[#FEF3C6] text-[#BB4D00]",
    popular: "bg-[#E1E7FF] text-[#4F39F6]",
    new: "bg-[#DBFCE7] text-[#0A883E]",
  };

  const handleClick = () => {
    setItems([...items, product]);
    setPrice(price + product.price)
    toast.success('Product Added')
  };
  return (
    <div className="p-6 border-2 border-[#F2F2F2] rounded-2xl space-y-4 relative">
      <div className="inline-flex border border-[#F2F2F2] rounded-full p-3">
        <img src={product.icon} alt="" />
      </div>
      <span
        className={`absolute top-3 right-3 py-1.5 px-3 rounded-full ${tagColors[product.tagType]}`}
      >
        {product.tag}
      </span>
      <h2 className="font-semibold text-2xl">{product.name}</h2>
      <p className="text-[#627382] text-[16px]">{product.description}</p>
      <p>
        <span className="text-2xl font-semibold">${product.price}</span>
        <span className="text-[#627382]">/Mo</span>
      </p>
      <ul className="text-[#627382]">
        {product.features.map((feature, index) => {
          return (
            <li className="flex items-center gap-2" key={index}>
              <MdDone className="text-[#30B868] text-xl" />
              {feature}
            </li>
          );
        })}
      </ul>
      <button
        className="btn rounded-full bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white w-full"
        onClick={handleClick}
      >
        Buy Now
      </button>
    </div>
  );
};

export default Card;
