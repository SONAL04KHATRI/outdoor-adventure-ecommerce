import React from 'react';

function ProductCard({ product }) {
  return (
    <div style={{ border: '1px solid #ddd', borderRadius: '8px', overflow: 'hidden', boxShadow: '0 2px 5px rgba(0,0,0,0.1)' }}>
      <img src={product.image} alt={product.name} style={{ width: '100%', height: '200px', objectFit: 'cover' }} />
      <div style={{ padding: '10px' }}>
        <h2>{product.name}</h2>
        <p>{product.description}</p>
        <p style={{ fontWeight: 'bold' }}>${product.price}</p>
        <button style={{ background: '#3498db', color: '#fff', border: 'none', padding: '10px 15px', borderRadius: '4px', cursor: 'pointer' }}>
          Buy Now
        </button>
      </div>
    </div>
  );
}

export default ProductCard;
