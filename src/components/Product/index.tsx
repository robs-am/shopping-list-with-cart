import { useEffect, useState } from "react";
import classes from './Product.module.scss'; // Supondo que você tenha um arquivo de estilos

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

  // Fetch dos dados do JSON
  useEffect(() => {
    fetch('/data/products.json') // Caminho do arquivo JSON na pasta public
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
              media="(min-width: 1024px)" // Para telas de desktop
              srcSet={product.images.desktop}
            />
            <source
              media="(min-width: 768px)" // Para telas de tablet
              srcSet={product.images.tablet}
            />
            <img
              src={product.images.mobile} // Fallback para telas mobile
              alt={product.name}
              className={classes.productImage}
            />
          </picture>
          <p>{product.name}</p>
          <h2>{product.description}</h2>
          <span>${product.price.toFixed(2)}</span>
        </div>
      ))}
    </div>
    </div>
  );
};

export default Product;
