import { useState } from "react";
import Day from "../day";
import {
  getDaysCurrentMonth,
  getMonthLiteral,
  capitalizeFirstLetter,
} from "../../utils";
import "./index.css";

const Month = () => {
  const [activeDay, setActiveDay] = useState(new Date().getDate());
  return (
    <div className="Month">
      <h2>{capitalizeFirstLetter(getMonthLiteral)}</h2>
      <div className="Month__wrapper">
        {[...new Array(getDaysCurrentMonth())].map((day, index) => (
          <Day
            content={index + 1}
            activeDay={activeDay}
            setActiveDay={setActiveDay}
            key={index}
          />
        ))}
      </div>
    </div>
  );
};
export default Month;
