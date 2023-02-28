import "./index.css";

const CardQuote = ({ quoteData }) => {
  return (
    <div className="CardQuote">
      <p>{quoteData.quote}</p>
      <hr />
      <p>{quoteData.author}</p>
    </div>
  );
};

export default CardQuote;
