import { useReducer } from "react";
import { GlobalContext, initGlobalState } from "./store";
import Counter from "./components/counter/Counter";
import { globalReducer } from "./store/reducers";
import "./App.css";

function App() {
  const [state, dispatch] = useReducer(globalReducer, initGlobalState);
  return (
    <div className="App">
      {/* il componente provider deve inglobare tutti i valori che sto definendo */}
      <GlobalContext.Provider value={{ state, dispatch }}>
        <Counter />
        <button onClick={() => console.log("App ===>", state.value)}>
          Show Counter Component Value
        </button>
      </GlobalContext.Provider>
    </div>
  );
}

export default App;
