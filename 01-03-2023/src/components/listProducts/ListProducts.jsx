import "./index.css";
import CardProduct from "../cardProduct";

const ListProducts = ({ title, listData, setModalOpen }) => {
  return (
    <div className="ListProducts">
      <h3>{title}</h3>
      <div className="list-container">
        {listData.map((product) => (
          <CardProduct
            productData={product}
            setModalOpen={setModalOpen}
            key={product.id}
          />
        ))}
      </div>
    </div>
  );
};

export default ListProducts;
