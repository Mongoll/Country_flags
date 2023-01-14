import React from "react";
import { useDispatch } from "react-redux";
import SearchIcon from "@mui/icons-material/Search";

import { setSearchKeyword } from "../../redux/actions";
import "../../styles/search.css";

const Search = () => {
  const dispatch = useDispatch();
  //handle input change
  const handleInputChange = (e: any) => {
    dispatch(setSearchKeyword(e.target.value));
  };

  return (
    <div className="flexbox">
      <div className="search-box">
        <button className="btn-search">
          <SearchIcon />
        </button>
        <input
          onChange={handleInputChange}
          type="text"
          className="input-search"
          placeholder=""
        />
      </div>
    </div>
  );
};

export default Search;
