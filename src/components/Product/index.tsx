import { useEffect, useState } from "react";
import { useCart } from "../../context/CartContext"; 
import classes from './Product.module.scss'; 

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
  const { addToCart } = useCart(); 

  useEffect(() => {
    fetch('/data/products.json') 
      .then((response) => response.json())
      .then((data) => setProducts(data))
      .catch((error) => console.error('Erro ao buscar dados:', error));
  }, []);

  return (
    <div className={classes.productList}>
      <h1 className={classes.productTitle}>Deserts</h1>
      <div className={classes.products}>
        {products.map((product) => (
          <div key={product.id} className={classes.productCard}>
            <picture>
              <source
                media="(min-width: 1024px)"
                srcSet={product.images.desktop}
              />
              <source
                media="(min-width: 768px)"
                srcSet={product.images.tablet}
              />
              <img
                src={product.images.mobile}
                alt={product.name}
                className={classes.productImage}
              />
            </picture>
            <p>{product.name}</p>
            <h2>{product.description}</h2>
            <span>${product.price.toFixed(2)}</span>
            <button onClick={() => addToCart({
              id: product.id,
              name: product.name,
              price: product.price,
              quantity: 1
            })}>
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Product;
