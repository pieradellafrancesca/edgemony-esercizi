import "./index.css";
import CardProduct from "../cardProduct";

const ListProducts = ({ title, listData }) => {
  return (
    <div className="ListProducts">
      <h3>{title}</h3>
      <div className="list-container">
        {listData.map((product) => (
          <CardProduct productData={product} key={product.id} />
        ))}
      </div>
    </div>
  );
};

export default ListProducts;
