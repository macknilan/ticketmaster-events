// COMPONENT FOR THE SEARCH INPUT

import { useState } from "react";

const SearchEventItem = ({ onSearch }) => {
  const [search, setSearch] = useState("");

  const handleInputOnChange = (evt) => {
    // FUNCTION TO HANDLE THE INPUT CHANGE
    setSearch(evt.target.value);
  };
  console.log(`searching in handleInputOnChange -> ${search}`);

  const handleInputOnKeyDown = (evt) => {
    // FUNCTION TO HANDLE THE ENTER KEY PRESS
    console.log(evt);
    if (evt.key === "Enter") {
      console.log("ENTER KEY PRESSED");
      onSearch(search);
    }
  };

  return (
    <div className="m-2">
      <div className="max-w-screen-md px-4 py-8 mx-auto lg:py-16">
        <form action="#" className="space-y-8">
          <div>
            <label
              htmlFor="search-event"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              Demo label
            </label>
            <input
              type="text"
              id="search-event"
              className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
              placeholder="Busca tu evento favorito"
              required
              onChange={handleInputOnChange}
              onKeyDown={handleInputOnKeyDown}
              value={search}
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default SearchEventItem;
