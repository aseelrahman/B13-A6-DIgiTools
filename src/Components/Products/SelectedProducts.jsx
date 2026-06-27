import { toast } from "react-toastify";
import SelectedCard from "../Ui/Card/SelectedCard";

const SelectedProducts = ({ items, setItems, setPrice, price }) => {
  const emptyCart = () => {
    setItems([]);
    setPrice(0);
    if (items.length !== 0) {
      toast.success("Checkout Successful!");
    }
  };

  const deleteItem = (index) => {
    const filteredItems = items.filter((selectedItem, i) => i !== index);
    setItems(filteredItems);
    setPrice(price - items[index].price);
    toast.warn(`${items[index].name} removed from cart`);
  };
  return (
    <div className="p-6 border-2 border-[#F2F2F2] rounded-2xl">
      <h2>Your Cart</h2>

      {items.length !== 0
        ? items.map((item, index) => {
            return (
              <SelectedCard
                item={item}
                key={index}
                deleteItem={() => deleteItem(index)}
              />
            );
          })
        : ""}

      <div className="flex justify-between my-6">
        <span className="text-[#627382]">Total</span>
        <span className="text-2xl font-semibold">${price}</span>
      </div>
      <button
        onClick={emptyCart}
        className="btn rounded-full bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white w-full"
      >
        Proceed To Checkout
      </button>
    </div>
  );
};

export default SelectedProducts;
