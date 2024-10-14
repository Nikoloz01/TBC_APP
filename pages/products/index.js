import { useState, useEffect } from "react";

const Products = () => {
  const [list, setList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [sortOrder, setSortOrder] = useState("asc");

  const productsUrl = `https://dummyjson.com/products?sortBy=price&order=${sortOrder}`;

  useEffect(() => {
    async function fetchProducts() {
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
    }
    fetchProducts();
  }, [sortOrder]);

  const handleSortToggle = () => {
    setSortOrder((prevOrder) => (prevOrder === "asc" ? "desc" : "asc"));
  };

  return (
    <div className="product-list">
      <h1>Products</h1>
      <button onClick={handleSortToggle}>
        Sort by Price: {sortOrder === "asc" ? "Ascending" : "Descending"}
      </button>

      {loading ? (
        <p>Loading...</p>
      ) : (
        <div className="grid">
          {list.map((product) => (
            <div key={product.id} className="product-card">
              <h2>{product.title}</h2>
              <p>Price: ${product.price}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Products;
