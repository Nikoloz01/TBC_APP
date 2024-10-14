export default function ProductDetail({ product }) {
    const { width, height, depth } = product.dimensions;
    const { createdAt, updatedAt, barcode, qrCode } = product.meta;
  
    return (
      <div className="productContainer">
        <img src={product.images[0]} alt={product.title} className="productImage" />
        <h1>{product.title}</h1>
        <p>{product.description}</p>
        <p>Price: ${product.price}</p>
        <p>Rating: {product.rating}</p>
        <p>Stock: {product.stock}</p>
        <ul>
          {product.tags.map((tag, index) => (
            <li key={index}>#{tag}</li>
          ))}
        </ul>
        <p><strong>CreatedAt:</strong> {new Date(createdAt).toLocaleDateString()}</p>
        <p><strong>UpdatedAt:</strong> {new Date(updatedAt).toLocaleDateString()}</p>
      </div>
    );
  }
  
  export async function getServerSideProps({ params }) {
    try {
      const res = await fetch(`https://dummyjson.com/products/${params.id}`);
      const product = await res.json();
  
      if (!product) {
        throw new Error('No product found');
      }
  
      return {
        props: {
          product,
        },
      };
    } catch (error) {
      console.error('Error fetching product:', error);
      return {
        notFound: true,
      };
    }
  }
  