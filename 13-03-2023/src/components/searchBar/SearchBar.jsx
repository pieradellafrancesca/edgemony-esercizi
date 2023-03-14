import { useState } from "react";
import "./index.css";

const SearchBar = ({ setSearchValue, setOption }) => {
  const [searchInputValue, setSearchInputValue] = useState("");
  const [selectedOption, setSelectedOption] = useState("All");

  const onHandleChange = (event) => {
    setSearchInputValue(event.target.value);
  };

  const onHandleSubmit = (event) => {
    event.preventDefault();
    setSearchValue(searchInputValue);
  };

  const onSelectChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const onSelectSubmit = (event) => {
    event.preventDefault();
    setOption(selectedOption);
  };

  return (
    <div className="SearchBar">
      <form onSubmit={onHandleSubmit}>
        <input
          type="text"
          value={searchInputValue}
          placeholder="Search..."
          onChange={onHandleChange}
        />
      </form>
      <form onSubmit={onSelectSubmit}>
        <select value={selectedOption} onChange={onSelectChange}>
          <option value="All">Select</option>
          <option value="True">Completed</option>
          <option value="False">Not Completed</option>
        </select>
      </form>
    </div>
  );
};

export default SearchBar;
