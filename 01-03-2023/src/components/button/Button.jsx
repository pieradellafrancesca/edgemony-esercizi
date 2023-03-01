import "./index.css";

const Button = ({ text, clickFunc, isDisabled }) => {
  return (
    <button
      className={`Button ${isDisabled ? "disabled" : null} `}
      onClick={clickFunc}
      disabled={isDisabled}
    >
      {text}
    </button>
  );
};

export default Button;
