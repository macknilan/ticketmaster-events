//
import { useState } from "react";
import Events from "./components/Events";
import SearchEventItem from "./components/SearchEventItem";

const BoleteraEventFeature = () => {
  //
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearchEventItem = (termFromOnSearch) => {
    // FUNCTION TO HANDLE THE ENTER KEY PRESS
    console.log(`clicked searchTerm -> ${searchTerm}`);
    setSearchTerm(termFromOnSearch);
  };

  return (
    <div className="m-2">
      <SearchEventItem onSearch={handleSearchEventItem} />
      <Events searchTerm={searchTerm} />
    </div>
  );
};

export default BoleteraEventFeature;
