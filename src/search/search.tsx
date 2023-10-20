import React, { ChangeEvent, useState } from "react";
import style from "./search.module.css";
import { GameSearch } from "../API/APIRequest";

const Search = ({ onSearch }: { onSearch: any }) => {
  const [searchInput, setSearchInput] = useState("");

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchInput(e.target.value);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleSubmit(e);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (searchInput.trim() !== "") {
      const slug = searchInput.split(" ").join("-").toLowerCase();
      const data = await GameSearch(slug);
      if (data !== null) {
        onSearch(data.results);
      }
    }
  };

  return (
    <div>
      <div className={style.inputContainer}>
        <div className={style.inner}>
          <input name="search" className={style.input} placeholder="Search games" onChange={handleChange} value={searchInput} onKeyDown={handleKeyDown} />
          {searchInput.length > 0 && (
            <div title="cancel" className={style.circle} onClick={() => setSearchInput("")}>
              <div className={style.closeIcon}>X</div>
            </div>
          )}
        </div>
        <button type="submit" className={style.btn} onClick={handleSubmit}>
          Search
        </button>
      </div>
    </div>
  );
};

export default Search;
