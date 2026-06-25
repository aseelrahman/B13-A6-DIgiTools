import { Suspense } from "react";
import "./App.css";
import Hero from "./Components/Hero/Hero";
import Navbar from "./Components/Navbar/Navbar";
import Products from "./Components/Products/Products";
import Rating from "./Components/Rating/Rating";

const fetchProducts = async () => {
  const res = await fetch("/products.json");
  return res.json();
};

function App() {
  const productsPromise = fetchProducts();

  return (
    <>
      <Navbar />
      <Hero />
      <Rating />
      <Suspense
        fallback={<span className="loading loading-bars loading-lg"></span>}
      >
        <Products productsPromise={productsPromise} />
      </Suspense>
    </>
  );
}

export default App;
