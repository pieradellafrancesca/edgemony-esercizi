import "./index.css";

const images = [
  "https://picsum.photos/400/300?1",
  "https://picsum.photos/400/300?2",
  "https://picsum.photos/400/300?3",
  "https://picsum.photos/400/300?4",
  "https://picsum.photos/400/300?5",
];

const Gallery = ({ title }) => {
  return (
    <div className="Gallery">
      <h3>{title}</h3>
      <div className="img-container">
        {images.map((image, index) => (
          <img src={image} alt={`Img ${index}`} key={image} />
        ))}
      </div>
    </div>
  );
};

export default Gallery;
