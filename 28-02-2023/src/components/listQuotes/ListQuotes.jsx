import "./index.css";
import CardQuote from "../cardQuote";
import { quotesList } from "../../mocks/quotesList.js";

const ListQuotes = () => {
  return (
    <div className="ListQuotes">
      {quotesList.map((quote) => (
        <CardQuote quoteData={quote} key={quote.id} />
      ))}
    </div>
  );
};

export default ListQuotes;
