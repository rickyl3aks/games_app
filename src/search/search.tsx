import { ChangeEvent, useState } from "react";
import style from "./search.module.css";
import { GameSearch } from "../API/searchAPI";

const Search = ({ onSearch }: { onSearch: any }) => {
  const [searchInput, setSearchInput] = useState("");
  const { data, isLoading, isError } = GameSearch(searchInput);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchInput(e.target.value);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      search();
    }
  };

  const handleClick = () => {
    search();
  };

  const search = () => {
    if (!isLoading && !isError) {
      onSearch(data.results);
      setSearchInput("");
    }
  };

  return (
    <div className={style.inputContainer}>
      <input name="search" className={style.input} placeholder="Search games" onChange={handleChange} value={searchInput} onKeyDown={handleKeyDown}></input>
      <button className={style.btn} onClick={handleClick}>
        search
      </button>
    </div>
  );
};

export default Search;
