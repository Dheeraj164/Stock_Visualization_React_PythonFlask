import React, { useContext, useState } from "react";
import { AppContext } from "@/context/AppContext";

import Button from "./Button";
import { SearchIcon } from "lucide-react";
import { getData } from "@/controller/controllers";

export default function SearchBar() {
  const [searchResult, setSearchResult] = useState("BABA");
  const { search, setSearch, setLoading } = useContext(AppContext);
  function onClickSearch() {
    setSearch(searchResult);
    setLoading(true);
  }
  function onChangeTicker(e: any) {
    setSearchResult(e.target.value);
    setSearch(e.target.value);
    // setLoading(true);
  }
  return (
    <div className="justify-center pt-5 m-5 flex flex-row ">
      <div className="border border-black flex p-2 bg-white rounded-full">
        {/* <input
          className="px-2 mx-2 font-bold text-xl focus:outline-none"
          value={searchResult}
          onChange={(e) => setSearchResult(e.target.value)}
        /> */}
        <div className="px-2 pt-2.5 mx-2.5 font-bold text-xl focus:outline-none">
          <select
            className="focus:outline-none"
            id="stock"
            name="stock"
            onChange={(e) => {
              setSearchResult(e.target.value);
              setSearch(e.target.value);
              setLoading(true);
            }}
            value={searchResult}>
            <option value="BABA">BABA(Ali Baba)</option>
            <option value="BYND">BYND (Beyond Meat)</option>
            <option value="META">META</option>
            <option value="MSFT">MSFT (MicroSoft)</option>
            <option value="ORCL">ORCL (Oracle)</option>
            <option value="TGT">TGT (Target)</option>
            <option value="WMT">WMT (Walmart)</option>
          </select>
        </div>
        <div className="flex-1 justify-end">
          <Button className="bg-purple-400" onClick={onClickSearch}>
            <SearchIcon />
          </Button>
        </div>
      </div>
    </div>
  );
}
