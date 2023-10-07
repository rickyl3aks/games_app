import { ChangeEvent, useState } from "react";
import "./search.css";
import { GameSearch } from "../API/searchAPI";

const Search = ({ onSearch }: { onSearch: any }) => {
  const [searchInput, setSearchInput] = useState<string>();
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
    }
  };

  return (
    <div className="inputContainer">
      <input onChange={handleChange} onKeyDown={handleKeyDown}></input>
      <button onClick={handleClick}>search</button>
    </div>
  );
};

export default Search;
