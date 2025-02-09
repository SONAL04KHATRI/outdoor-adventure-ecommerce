import React from 'react';
import Header from './components/Header';
import ProductCard from './components/ProductCard';
import { products } from './data/products';

function App() {
  return (
    <div>
      <Header />
      <main
        style={{
          padding: '20px',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
          gap: '20px'
        }}
      >
        {products.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </main>
    </div>
  );
}

export default App;
