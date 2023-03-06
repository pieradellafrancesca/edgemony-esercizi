import "./index.css";

const Paginate = ({
  totalProducts,
  productsPerPage,
  paginate,
  currentPage,
  previousPage,
  nextPage,
}) => {
  const pageNumbers = [];
  for (let i = 1; i <= totalProducts / productsPerPage; i++) {
    pageNumbers.push(i);
  }

  return (
    <div className="Paginate">
      <button onClick={previousPage} className="page-number">
        {"<<"}
      </button>
      {pageNumbers.map((number) => (
        <button
          key={number}
          onClick={() => paginate(number)}
          className={`page-number ${number === currentPage ? "active" : ""}`}
        >
          {number}
        </button>
      ))}
      <button onClick={nextPage} className="page-number">
        {">>"}
      </button>
    </div>
  );
};

export default Paginate;
