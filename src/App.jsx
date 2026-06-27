import { Suspense } from "react";
import "./App.css";
import Hero from "./Components/Hero/Hero";
import Navbar from "./Components/Navbar/Navbar";
import Products from "./Components/Products/Products";
import Rating from "./Components/Rating/Rating";
import Steps from "./Components/Steps/Steps";
import { ToastContainer } from "react-toastify";

const fetchProducts = async () => {
  const res = await fetch("/products.json");
  return res.json();
};

const fetchSteps = async () => {
  const res = await fetch("/steps.json");
  return res.json();
};

function App() {
  const productsPromise = fetchProducts();
  const stepsPromise = fetchSteps();

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
      <Suspense
        fallback={<span className="loading loading-bars loading-lg"></span>}
      >
        <Steps stepsPromise={stepsPromise} />
      </Suspense>
      <ToastContainer />
    </>
  );
}

export default App;
