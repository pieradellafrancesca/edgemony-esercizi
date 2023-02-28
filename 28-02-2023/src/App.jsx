import "./App.css";
import Header from "./components/header";
import ListQuotes from "./components/listQuotes";
import Footer from "./components/footer";

const App = () => {
  return (
    <div className="App">
      <Header />
      <ListQuotes />
      <Footer />
    </div>
  );
};

export default App;
