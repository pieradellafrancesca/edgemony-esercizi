import { useState } from "react";
import Day from "../day";
import "./index.css";

const Month = () => {
  const [activeDay, setActiveDay] = useState(0);
  return (
    <div className="Month">
      {[...new Array(30)].map((day, index) => (
        <Day
          content={index + 1}
          activeDay={activeDay}
          setActiveDay={setActiveDay}
          key={index}
        />
      ))}
    </div>
  );
};
export default Month;
