import { useState } from "react";
import Day from "./components/day";
import "./App.css";

function App() {
  const [activeDay, setActiveDay] = useState(0);

  return (
    <div className="App">
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
}

export default App;
