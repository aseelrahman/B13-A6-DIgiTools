import { use } from "react";
import AvailableProducts from "./AvailableProducts";


const Products = ({productsPromise}) => {
    const products = use(productsPromise)
    
  return (
    <div className="container mx-auto my-30 space-y-10">
      <div className="space-y-4 flex flex-col text-center items-center justify-center">
        <h1 className="font-bold text-5xl">Premium Digital Tools</h1>
        <p>
          Choose from our curated collection of premium digital products
          designed <br /> to boost your productivity and creativity.
        </p>
        <div className="flex gap-4">
          <button className="btn rounded-full bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white">
            Products
          </button>
          <button className=" btn flex items-center gap-2 rounded-full border border-[#6B2DFF]  bg-white">
            <span className="bg-linear-to-r from-[#4F39F6] to-[#9514FA] bg-clip-text text-transparent">
              Cart (0)
            </span>
          </button>
        </div>
      </div>

    <AvailableProducts products={products} />
    </div>
  );
};

export default Products;
