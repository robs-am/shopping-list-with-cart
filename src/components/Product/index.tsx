import React  from 'react';
import { useState, useEffect } from 'react';

import classes from './product.module.scss';

interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  images: {
    mobile: string;
    tablet: string;
    desktop: string;
  };
}

const Product: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    fetch('/data/products.json')
      .then((response) => response.json())
      .then((data) => setProducts(data))
      .catch((error) => console.error('Error fetching data:', error));
  }, []);

  return (
    <div className={classes.products}>
      {products.map((product) => (
        <div key={product.id} className={classes.productCard}>
          <img
            src={product.images.mobile} // ou product.images.tablet ou product.images.desktop, dependendo do tamanho que você quer
            alt={product.name}
            className={classes.productImage}
          />
          <h2>{product.name}</h2>
          <p>{product.description}</p>
          <p>${product.price.toFixed(2)}</p>
        </div>
      ))}
    </div>
  );
};

export default Product;

