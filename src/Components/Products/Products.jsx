import { use, useState } from "react";
import AvailableProducts from "./AvailableProducts";
import SelectedProducts from "./SelectedProducts";

const Products = ({ productsPromise }) => {
  const products = use(productsPromise);
  const [items, setItems] = useState([]);
  const [price, setPrice] = useState(0);
  const [productTab, setProductTab] = useState("product");

  return (
    <div className="container mx-auto my-30 space-y-10">
      <div className="space-y-4 flex flex-col text-center items-center justify-center">
        <h1 className="font-bold text-5xl">Premium Digital Tools</h1>
        <p>
          Choose from our curated collection of premium digital products
          designed <br /> to boost your productivity and creativity.
        </p>
        <div className="flex gap-4">
          <button
            onClick={() => setProductTab("product")}
            className={`btn rounded-full bg-linear-to-r ${productTab === "product" ? "from-[#4F39F6] to-[#9514FA] text-white" : "border border-[#6B2DFF] bg-white"}`}
          >
            <span
              className={`${productTab === "product" ? "" : "bg-linear-to-r from-[#4F39F6] to-[#9514FA] bg-clip-text text-transparent"}`}
            >
              Products
            </span>
          </button>

          <button
            onClick={() => setProductTab("cart")}
            className={`btn flex items-center gap-2 rounded-full bg-linear-to-r ${productTab === "cart" ? "from-[#4F39F6] to-[#9514FA] text-white" : "border border-[#6B2DFF] bg-white"}`}
          >
            <span
              className={`${productTab === "cart" ? "" : "bg-linear-to-r from-[#4F39F6] to-[#9514FA] bg-clip-text text-transparent"}`}
            >
              Cart ({items.length})
            </span>
          </button>
        </div>
      </div>

      {productTab === "product" ? (
        <AvailableProducts
          products={products}
          items={items}
          setItems={setItems}
          price={price}
          setPrice={setPrice}
        />
      ) : (
        <SelectedProducts
          items={items}
          setItems={setItems}
          price={price}
          setPrice={setPrice}
        />
      )}
    </div>
  );
};

export default Products;
