import "./index.css";

const CardQuote = ({ quoteData }) => {
  return (
    <div className="CardQuote">
      <div className="text-content">
        <p>{quoteData.quote}</p>
        <p>{quoteData.author}</p>
      </div>
    </div>
  );
};

export default CardQuote;
