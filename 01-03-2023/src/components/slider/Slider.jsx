import { useState } from "react";
import "./index.css";

const images = [
  "https://images.unsplash.com/photo-1676045715980-e21732a44571?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80",
  "https://images.unsplash.com/photo-1461695008884-244cb4543d74?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1631&q=80",
  "https://images.unsplash.com/photo-1676798665374-96270c5655f0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
];

const Slider = () => {
  const [indexImg, setIndexImg] = useState(0);
  return (
    <div className="Slider">
      <img src={images[indexImg]} alt="images" />
      <button
        className="slider-btn-1"
        onClick={() => (indexImg > 0 ? setIndexImg((prev) => prev - 1) : null)}
      >
        ◀
      </button>
      <button
        className="slider-btn-2"
        onClick={() =>
          indexImg < images.length - 1 ? setIndexImg((prev) => prev + 1) : null
        }
      >
        ▶
      </button>
    </div>
  );
};

export default Slider;
