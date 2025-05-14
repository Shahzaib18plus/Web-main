import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Search = () => {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  const [searching, setSearching] = useState(false);

  const handleSearch = async (e) => {
    e.preventDefault();
    if (!query.trim()) return;

    setSearching(true);
    try {
      const response = await axios.post("http://localhost:5000/api/search-products", { Query: query });
      setResults(response.data.products || []);
    } catch (error) {
      console.error("Search error:", error);
      setResults([]);
    }
    setSearching(false);
  };

  return (
    <div className="container mt-4">
      <form onSubmit={handleSearch} className="d-flex mb-4">
        <input
          type="text"
          className="form-control me-2"
          placeholder="Search products..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button type="submit" className="btn btn-primary">Search</button>
      </form>

      {searching && <p>Searching...</p>}

      {!searching && results.length > 0 && (
        <div className="row">
          {results.map((product) => (
            <div className="col-md-4 mb-4" key={product.id}>
              <div className="card h-100">
                <img src={product.imageurl} className="card-img-top" alt={product.productName} />
                <div className="card-body">
                  <h5 className="card-title">{product.productName}</h5>
                  <p className="card-text">Price: Rs. {product.saleprice}</p>
                  <Link to={`/product/${product.id}`} className="btn btn-outline-primary">View</Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {!searching && results.length === 0 && query && (
        <p>No results found for "{query}"</p>
      )}
    </div>
  );
};

export default Search;
