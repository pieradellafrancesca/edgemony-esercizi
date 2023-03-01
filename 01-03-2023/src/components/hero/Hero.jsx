import "./index.css";

const Hero = ({ title }) => {
  return (
    <div className="Hero">
      <img src="https://picsum.photos/1200/400" alt="hero img" />
      <h2>{title}</h2>
    </div>
  );
};

export default Hero;
