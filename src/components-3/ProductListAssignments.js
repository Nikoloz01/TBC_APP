import React from 'react';

const list = [
    {
        id: '10001',
        name: 'Eco-Friendly Water Bottle',
        description: 'Stay hydrated with our durable, eco-friendly water bottle.',
        price: 14.99,
        currency: 'USD',
        imageURL: 'https://example.com/images/product-10001.jpg',
    },
    {
        id: '10002',
        name: 'Reusable Coffee Cup',
        description: 'Enjoy your coffee guilt-free with our reusable cup.',
        price: 12.99,
        currency: 'USD',
        imageURL: 'https://example.com/images/product-10002.jpg',
    },
    {
        id: '10003',
        name: 'Bamboo Toothbrush',
        description: 'A sustainable alternative to plastic toothbrushes.',
        price: 3.99,
        currency: 'USD',
        imageURL: 'https://example.com/images/product-10003.jpg',
    },
    {
        id: '10004',
        name: 'Organic Cotton T-Shirt',
        description: 'Soft, breathable, and made from 100% organic cotton.',
        price: 19.99,
        currency: 'USD',
        imageURL: 'https://example.com/images/product-10004.jpg',
    },
];

const ProductTableAsssignments3 = () => {
    return (
        <div>
            <h2>Product List</h2>
            <table border="1" cellPadding="10" cellSpacing="0">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Description</th>
                        <th>Price</th>
                        <th>Currency</th>
                        <th>ImageUrl</th>
                    </tr>
                </thead>
                <tbody>
                    {list.map((product) => (
                        <tr key={product.id}>
                            <td>{product.id}</td>
                            <td>{product.name}</td>
                            <td>{product.description}</td>
                            <td>{product.price}</td>
                            <td>{product.currency}</td>
                            <td>{product.imageURL}</td>

                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default ProductTableAsssignments3;
