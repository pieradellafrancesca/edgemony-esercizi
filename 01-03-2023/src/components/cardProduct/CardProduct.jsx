import "./index.css";
import Button from "../button";

const CardProduct = ({ productData, setModalOpen }) => {
  const onGetStock = () =>
    alert(`Ci sono ${productData.stock} prodotti disponibili`);

  const onImgClick = () => {
    setModalOpen(() => productData);
  };
  return (
    <div className="CardProduct">
      <img
        onClick={onImgClick}
        src={productData.thumbnail}
        alt={productData.title}
      />
      <div className="CardProduct__text-content">
        <h4>{productData.title}</h4>
        <p>{productData.description}</p>
        <p> $ {productData.price}</p>
        <hr />
        <p>{productData.brand}</p>
        <div
          className="discount"
          style={{
            backgroundColor: `rgba(${
              20 * productData.discountPercentage
            } 190, 255, 0.7)`,
          }}
        >
          <p>Sconto del {productData.discountPercentage}%</p>
        </div>

        <Button
          text="Disponibilità"
          clickFunc={onGetStock}
          isDisabled={false}
        />
      </div>
    </div>
  );
};

export default CardProduct;
