import { productsList } from "./mocks/productsList.js";
import Control from "./components/control";
import Header from "./components/header";
import Hero from "./components/hero";
import Gallery from "./components/gallery";
import Footer from "./components/footer";
import ListProducts from "./components/listProducts";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Header />
      <Hero title="Terrific Store" />
      <Gallery title="Gallery" />
      <Control listDataLength={productsList.length} />
      <ListProducts title="List products" listData={productsList} />
      <Footer />
    </div>
  );
}

export default App;
