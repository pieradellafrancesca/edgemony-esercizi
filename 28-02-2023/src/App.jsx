import "./App.css";
import Header from "./components/header";
import Footer from "./components/footer";

import CardQuote from "./components/cardQuote";

const App = () => {
  const quotes = {
    id: 1,
    quote: "Life isn’t about getting and having, it’s about giving and being.",
    author: "Kevin Kruse",
  };
  return (
    <div className="App">
      <Header />
      <CardQuote quoteData={quotes} />;
      <Footer />
    </div>
  );
};

export default App;
