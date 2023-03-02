import "./index.css";

const ModalProduct = ({ product, setModalOpen }) => {
  return (
    <div className="ModalProduct">
      <div className="product-overlay" onClick={() => setModalOpen(null)}></div>
      {product.images.map((image) => (
        <img src={image} alt="img" key={image} />
      ))}
    </div>
  );
};

export default ModalProduct;
