import { useState, useEffect } from "react";

const Products = () => {
  const [list, setList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [sortOrder, setSortOrder] = useState("asc");
  const [searchQuery, setSearchQuery] = useState("");
  const [isSearching, setIsSearching] = useState(false);

  const productsUrl = isSearching
    ? `https://dummyjson.com/products/search?q=${searchQuery}`
    : `https://dummyjson.com/products?sortBy=price&order=${sortOrder}`;

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);
        const response = await fetch(productsUrl);
        const data = await response.json();
        setList(data.products);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    const delayDebounceFn = setTimeout(() => {
      fetchProducts();
    }, 500);

    return () => clearTimeout(delayDebounceFn);
  }, [sortOrder, productsUrl]);

  const handleSortToggle = () => {
    setSortOrder((prevOrder) => (prevOrder === "asc" ? "desc" : "asc"));
    setIsSearching(false);
  };

  const handleSearchInput = (e) => {
    setSearchQuery(e.target.value);
    setIsSearching(true);
  };

  return (
    <div className="product-list">
      <h1>Products</h1>
      <div className="search-container">
        <input
          type="text"
          placeholder="Search products..."
          value={searchQuery}
          onChange={handleSearchInput}
        />
      </div>
      <button onClick={handleSortToggle}>
        Sort by Price: {sortOrder === "asc" ? "Ascending" : "Descending"}
      </button>

      {loading ? (
        <p>Loading...</p>
      ) : (
        <div className="grid">
          {list.length > 0 ? (
            list.map((product) => (
              <div key={product.id} className="product-card">
                <h2>{product.title}</h2>
                <p>Price: ${product.price}</p>
              </div>
            ))
          ) : (
            <p>No products found.</p>
          )}
        </div>
      )}
    </div>
  );
};

export default Products;
