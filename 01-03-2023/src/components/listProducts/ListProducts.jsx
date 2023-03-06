import { useState, useEffect } from "react";
import "./index.css";
import CardProduct from "../cardProduct";

import Paginate from "../paginate";

const ListProducts = ({ title, setModalOpen }) => {
  const [getProducts, setGetProducts] = useState([]);
  // const [indexOfFirstProduct, setIndexOfFirstProduct] = useState(0);
  // const [indexOfLastProduct, setIndexOfLastProduct] = useState(10);

  // const onHandlePage = (min, max) => {
  //   setIndexOfFirstProduct(min);
  //   setIndexOfLastProduct(max);
  // };

  const [currentPage, setCurrentPage] = useState(1);
  const [productsPerPage] = useState(10);

  const indexOfLastPost = currentPage * productsPerPage;
  const indexOfFirstPost = indexOfLastPost - productsPerPage;
  const currentProducts = getProducts.slice(indexOfFirstPost, indexOfLastPost);

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const previousPage = () => {
    if (currentPage !== 1) {
      setCurrentPage((prev) => prev - 1);
    }
  };

  const nextPage = () => {
    if (currentPage !== getProducts.length / productsPerPage) {
      setCurrentPage((prev) => prev + 1);
    }
  };

  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then((data) => setGetProducts(data.products));
  }, []);

  return (
    <div className="ListProducts">
      <h3>{title}</h3>
      <div className="list-container">
        {currentProducts
          // .filter(
          //   (product) =>
          //     product.id > indexOfFirstProduct &&
          //     product.id <= indexOfLastProduct
          // )
          .map((product) => (
            <CardProduct
              productData={product}
              setModalOpen={setModalOpen}
              key={product.id}
            />
          ))}
      </div>
      <Paginate
        totalProducts={getProducts.length}
        productsPerPage={productsPerPage}
        paginate={paginate}
        currentPage={currentPage}
        previousPage={previousPage}
        nextPage={nextPage}
      />
      {/* <div className="products-pagination">
        {[...Array(getProducts.length / 10)].map((item, i) => (
          <button onClick={() => onHandlePage(i * 10, i * 10 + 10)}>
            {i + 1}
          </button>
        ))}
      </div> */}
    </div>
  );
};

export default ListProducts;
