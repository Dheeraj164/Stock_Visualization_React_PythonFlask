import React, { useContext, useState } from "react";
import { AppContext } from "@/context/AppContext";

import Button from "./Button";
import { SearchIcon } from "lucide-react";

export default function SearchBar() {
  const [searchResult, setSearchResult] = useState("");
  const { search, setSearch } = useContext(AppContext);
  function onClickSearch() {
    setSearch(searchResult);
  }
  return (
    <div className="justify-center pt-5 m-5 flex flex-row ">
      <div className="border border-black flex p-2 bg-white rounded-full  py-2">
        <input
          className="px-2 mx-2"
          value={searchResult}
          onChange={(e) => setSearchResult(e.target.value)}
        />
        <div className="flex-1 justify-end">
          <Button className="bg-purple-400" onClick={onClickSearch}>
            <SearchIcon />
          </Button>
        </div>
      </div>
    </div>
  );
}
