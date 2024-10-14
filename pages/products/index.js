import { useState, useEffect } from "react";

const Products = ({ products }) => {
  const [sortOrder, setSortOrder] = useState("asc");
  const [searchQuery, setSearchQuery] = useState("");
  const [debouncedSearchQuery, setDebouncedSearchQuery] = useState(searchQuery);
  const [filteredProducts, setFilteredProducts] = useState(products);
  const [animate, setAnimate] = useState(false);

  const handleSortToggle = () => {
    setSortOrder((prevOrder) => (prevOrder === "asc" ? "desc" : "asc"));
  };

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedSearchQuery(searchQuery);
    }, 500);

    return () => {
      clearTimeout(handler);
    };
  }, [searchQuery]);

  useEffect(() => {
    let sortedProducts = [...products];

    // Sort by price
    sortedProducts.sort((a, b) =>
      sortOrder === "asc" ? a.price - b.price : b.price - a.price
    );

    // Filter by search query
    if (debouncedSearchQuery) {
      sortedProducts = sortedProducts.filter((product) =>
        product.title.toLowerCase().includes(debouncedSearchQuery.toLowerCase())
      );
    }

    // Trigger animation
    setAnimate(true);
    setTimeout(() => setAnimate(false), 500);

    setFilteredProducts(sortedProducts);
  }, [sortOrder, debouncedSearchQuery, products]);

  if (!filteredProducts || filteredProducts.length === 0) {
    return <p>No products available.</p>;
  }

  return (
    <div className="product-list">
      <h1>Products</h1>

      {/* Search Input */}
      <div className="search-container">
        <input
          type="text"
          placeholder="Search products..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>

      {/* Sort Button */}
      <button onClick={handleSortToggle} className="sort-button">
        Sort by Price: {sortOrder === "asc" ? "Ascending" : "Descending"}
      </button>

      {/* Product Grid */}
      <div className={`grid ${animate ? "fade-in" : ""}`}>
        {filteredProducts.map((product) => (
          <div key={product.id} className="product-card">
            <h2 className="product-title">{product.title}</h2>
            <p className="product-price">Price: ${product.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export async function getServerSideProps() {
  try {
    const res = await fetch(`https://dummyjson.com/products`);
    const data = await res.json();

    if (!data.products) {
      throw new Error('No products found');
    }

    return {
      props: {
        products: data.products || [],
      },
    };
  } catch (error) {
    console.error('Error fetching products:', error);
    return {
      props: {
        products: [],
      },
    };
  }
}

export default Products;
