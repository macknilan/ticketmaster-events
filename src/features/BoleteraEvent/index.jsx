//
import { useRef, useState } from "react";
import Events from "./components/Events";
import SearchEventItem from "./components/SearchEventItem";

const BoleteraEventFeature = () => {
  //
  const [searchTerm, setSearchTerm] = useState("");
  const containerInputRef = useRef();

  const handleSearchEventItem = (termFromOnSearch) => {
    // FUNCTION TO HANDLE WHEN ENTER KEY IS PRESSED
    console.log("clicked searchTerm ->", searchTerm);

    console.log("searching in containerInputRef ->", containerInputRef.current);

    setSearchTerm(termFromOnSearch);
  };

  return (
    <div className="m-2">
      <SearchEventItem
        onSearch={handleSearchEventItem}
        ref={containerInputRef}
      />
      <Events searchTerm={searchTerm} />
    </div>
  );
};

export default BoleteraEventFeature;
