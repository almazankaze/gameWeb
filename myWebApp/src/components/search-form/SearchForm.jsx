import { useState } from "react";
import SearchIcon from "@mui/icons-material/Search";

import "./searchform.scss";

const SearchForm = () => {
  const [textField, setTextField] = useState("");

  const handleTextChange = (evt) => {
    setTextField(evt.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setTextField("");
  };

  return (
    <div className="search-container">
      <form
        className="search-form"
        autoComplete="off"
        noValidate
        onSubmit={handleSubmit}
      >
        <input
          type="text"
          className="search-input"
          placeholder="Search..."
          name="searchTerm"
          onChange={handleTextChange}
        ></input>
        <SearchIcon className="search-icon" />
      </form>
    </div>
  );
};

export default SearchForm;
