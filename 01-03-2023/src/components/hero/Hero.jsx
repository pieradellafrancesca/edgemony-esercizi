import "./index.css";

const Hero = ({ title }) => {
  return (
    <div className="Hero">
      <img
        src="https://images.unsplash.com/photo-1612547036242-77002603e5aa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
        alt="hero img"
      />
      <h2>{title}</h2>
    </div>
  );
};

export default Hero;
