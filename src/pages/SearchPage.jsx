import React from "react";
import Search from "../components/Search";

const SearchPage = () => {
  return (
    <div className="search-page" style={{ paddingTop: "100px", minHeight: "100vh" }}>
      <div className="container">
        <h2 className="mb-4 text-center">Search Products</h2>
        <Search />
      </div>
    </div>
  );
};

export default SearchPage;
