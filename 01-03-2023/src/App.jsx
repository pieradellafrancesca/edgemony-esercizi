import { useState } from "react";
import { productsList } from "./mocks/productsList.js";
import Control from "./components/control";
import Header from "./components/header";
import Hero from "./components/hero";
import Slider from "./components/slider";
// import Gallery from "./components/gallery";
import ModalProduct from "./components/modalProduct";
import Footer from "./components/footer";
import ListProducts from "./components/listProducts";
import "./App.css";

function App() {
  const [isDarkMode, setDarkMode] = useState(true);
  const [isModalOpen, setModalOpen] = useState(null);
  return (
    <div className={`App ${isDarkMode && "dark-mode"}`}>
      <Header />
      <Hero title="Terrific Store" />
      <button
        className="toggle-mode"
        onClick={() => setDarkMode((prev) => !prev)}
      >
        {isDarkMode ? "🌙" : "💡"}
      </button>
      <Slider />
      {/* <Gallery title="Gallery" /> */}
      <Control listDataLength={productsList.length} />
      <ListProducts
        title="List products"
        listData={productsList}
        setModalOpen={setModalOpen}
      />
      {isModalOpen ? (
        <ModalProduct product={isModalOpen} setModalOpen={setModalOpen} />
      ) : null}
      <Footer />
    </div>
  );
}

export default App;
