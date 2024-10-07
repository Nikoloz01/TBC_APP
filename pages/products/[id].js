
export default function ProductsDetails({ products }) {
    const { width, height, depth } = products.dimensions;
    const { createdAt, updatedAt, barcode, qrCode} =products.meta;


    return (
        <div className="container">
            <h1 className="title">{products.title}</h1>
            <p>{products.description}</p>
            <p>{products.description}</p>
            <p>category:{products.category}</p>
            <p>
                <span> Price:{products.price} $</span>
            </p>
            <p>
                <span>New Price: {products.discountPercentage} $</span>
            </p>
            <p>Rating:{products.rating} </p>
            <p>Stock:{products.stock} </p>

            <ul className="tags">
                {products.tags.map((tag, index) => (
                    <li key={index}>#{tag}</li>
                ))}
            </ul>
            <p>Brand:{products.brand} </p>
            <p>sku:{products.sku} </p>
            <p>Weight:{products.weight} </p>

            <p> Width:{width} cm </p>
            <p> Height:{height} cm </p>
            <p> Depth:{depth} cm </p>

            <div>
                <h3>Reviews:</h3>
                <ul>
                    {products.reviews.map((review, index) => (
                        <li>
                            key ={index}
                            <p>
                                <strong>Rating:</strong> {review.rating}/5
                            </p>
                            <p>
                                <strong>Comment:</strong> {review.comment}
                            </p>
                            <p>
                                <strong>Date:</strong>{" "}
                                {new Date(review.date).toLocaleDateString('en-GB')}
                            </p>
                            <p>
                                <strong>Reviewer Name:</strong> {review.reviewerName}
                            </p>
                            <p>
                                <strong>Reviewer Email:</strong> {review.reviewerEmail}
                            </p>
                        </li>
                    ))}{" "}
                </ul>
            </div>
            <p>warrantyInformation:{products.warrantyInformation}</p>
            <p>shippingInformation:{products.shippingInformation}</p>
            <p>availabilityStatus:{products.availabilityStatus}</p>

            <p>returnPolicy:{products.returnPolicy}</p>
            <p>minimumOrderQuantity:{products.minimumOrderQuantity}</p>
            <p>availabilityStatus:{products.availabilityStatus}</p>


            <p>{createdAt}</p>
            <p>{updatedAt}</p>
            <p>{barcode}</p>
            <img src={qrCode} alt="Product QR Code" />

            <img src={products.images[0]} alt={products.title} />
            <img src={products.thumbnail} alt={`${products.title} Thumbnail`} />



            
        </div>
    );
}

// Fetch post data based on the dynamic route (post ID)
export async function getStaticProps({ params }) {
    const res = await fetch(`https://dummyjson.com/products/${params.id}`);
    const products = await res.json();

    return {
        props: {
            products,
        },
    };
}

// Generate the paths for all post IDs
export async function getStaticPaths() {
    const res = await fetch("https://dummyjson.com/products");
    const products = await res.json();
    console.log(products);
    // Map through the posts to generate paths for each post ID
    const paths = products.products.map((product) => ({
        params: { id: product.id.toString() },
    }));

    return { paths, fallback: true }; // Enable fallback for dynamic routes
}
