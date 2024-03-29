import React from 'react';
import { BsSearch } from 'react-icons/bs';

import './SearchBar.css';

function SearchBar({ placeholder, setSearchWord }) {
  return (
    <>
      <p className="search-title">Audition Search:</p>
      <div className="search">
        <div className="searchInputs">
          <input
            type="text"
            placeholder={placeholder}
            className="search-input"
            onChange={(e) => {
              setSearchWord(e.target.value);
            }}
          />
          <BsSearch />
        </div>
      </div>
    </>
  );
}

export default SearchBar;
