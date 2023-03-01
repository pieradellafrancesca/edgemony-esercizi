import Button from "../button";
import "./index.css";

const Control = ({ listDataLength }) => {
  const getProductNum = () =>
    alert(`Il numero di prodotti corrisponde a ${listDataLength}`);
  return (
    <div className="Control">
      <Button
        text="Quanti prodotti?"
        clickFunc={getProductNum}
        isDisabled={false}
      />
    </div>
  );
};

export default Control;
