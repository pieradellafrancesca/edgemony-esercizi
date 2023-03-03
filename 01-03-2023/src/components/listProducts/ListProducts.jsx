import { useState, useEffect } from "react";
import "./index.css";
import CardProduct from "../cardProduct";

const ListProducts = ({ title, setModalOpen }) => {
  const [getProducts, setGetProducts] = useState([]);
  const [indexOfFirstProduct, setIndexOfFirstProduct] = useState(0);
  const [indexOfLastProduct, setIndexOfLastProduct] = useState(10);

  const onHandlePage = (min, max) => {
    setIndexOfFirstProduct(min);
    setIndexOfLastProduct(max);
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
        {getProducts
          .filter(
            (product) =>
              product.id > indexOfFirstProduct &&
              product.id <= indexOfLastProduct
          )
          .map((product) => (
            <CardProduct
              productData={product}
              setModalOpen={setModalOpen}
              key={product.id}
            />
          ))}
      </div>
      <div className="products-pagination">
        {[...Array(getProducts.length / 10)].map((item, i) => (
          <button onClick={() => onHandlePage(i * 10, i * 10 + 10)}>
            {i + 1}
          </button>
        ))}
      </div>
    </div>
  );
};

export default ListProducts;
