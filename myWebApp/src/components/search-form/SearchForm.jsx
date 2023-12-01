import { useRef } from "react";
import SearchIcon from "@mui/icons-material/Search";
import { useNavigate } from "react-router-dom";

import "./searchform.scss";

const SearchForm = () => {
  const formRef = useRef(null);

  let navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    const searchTerm = formRef.current["searchTerm"].value;

    if (searchTerm) {
      navigate(`/shop?term=${searchTerm}&page=${1}`);
    }

    formRef.current.reset();
  };

  return (
    <div className="search-container">
      <form
        className="search-form"
        name="search-form"
        autoComplete="off"
        noValidate
        ref={formRef}
        onSubmit={handleSubmit}
      >
        <input
          type="text"
          className="search-input"
          placeholder="Search..."
          name="searchTerm"
        ></input>
        <SearchIcon className="search-icon" onClick={handleSubmit} />
      </form>
    </div>
  );
};

export default SearchForm;
