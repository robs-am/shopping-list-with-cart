import { useEffect, useState } from 'react';
import { useCart } from '../../context/CartContext';
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
  singleImage: string; 
}

const Product: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [addedToCartProductId, setAddedToCartProductId] = useState<number | null>(null); 
  const { cart, addToCart,  updateCartItemQuantity } = useCart();

  useEffect(() => {
    fetch('/data/products.json')
      .then((response) => response.json())
      .then((data) => setProducts(data))
      .catch((error) => console.error('Erro ao buscar dados:', error));
  }, []);

  const getProductQuantity = (productId: number) => {
    const productInCart = cart.find((item) => item.id === productId);
    return productInCart ? productInCart.quantity : 0;
  };

  const handleAddToCart = (product: Product) => {
    addToCart({
      id: product.id,
      name: product.description,
      price: product.price,
      quantity: 1,
    });
    setAddedToCartProductId(product.id); 
  };

  return (
    <div className={classes.productList}>
      <h1 className={classes.productTitle}>Deserts</h1>
      <div className={classes.products}>
        {products.map((product) => {
          const quantity = getProductQuantity(product.id);

          return (
            <div
              key={product.id}
              className={`${classes.productCard} ${addedToCartProductId === product.id ? classes.addedToCart : ''
                }`}
            >
              <picture>
                <source media="(min-width: 1024px)" srcSet={product.images.desktop} />
                <source media="(min-width: 768px)" srcSet={product.images.tablet} />
                <img
                  src={product.images.mobile}
                  alt={product.name}
                  className={classes.productImage}
                />
              </picture>
              <div className={classes.productCardInfo}>
                <p>{product.name}</p>
                <h2>{product.description}</h2>
                <span>${product.price.toFixed(2)}</span>
              </div>
              <div className={classes.quantityControls}>
                {quantity > 0 ? (
                  <>
                    <button
                      onClick={() => updateCartItemQuantity(product.id, quantity - 1)}
                      className={classes.decrementButton}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="10"
                        height="2"
                        fill="none"
                        viewBox="0 0 10 2"
                      >
                        <path fill="#fff" d="M0 .375h10v1.25H0V.375Z" />
                      </svg>
                    </button>
                    <span className={classes.productQuantity}>{quantity}</span>
                    <button
                      onClick={() => updateCartItemQuantity(product.id, quantity + 1)}
                      className={classes.incrementButton}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="10"
                        height="10"
                        fill="none"
                        viewBox="0 0 10 10"
                      >
                        <path fill="#fff" d="M10 4.375H5.625V0h-1.25v4.375H0v1.25h4.375V10h1.25V5.625H10v-1.25Z" />
                      </svg>
                    </button>
                  </>
                ) : (
                  <button
                    onClick={() => handleAddToCart(product)}
                    className={`${classes.addToCartButton} customAddToCartButton`}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="21"
                      height="20"
                      fill="none"
                      viewBox="0 0 21 20"
                    >
                      <g fill="#C73B0F" clipPath="url(#a)">
                        <path d="M6.583 18.75a1.25 1.25 0 1 0 0-2.5 1.25 1.25 0 0 0 0 2.5ZM15.334 18.75a1.25 1.25 0 1 0 0-2.5 1.25 1.25 0 0 0 0 2.5ZM3.446 1.752a.625.625 0 0 0-.613-.502h-2.5V2.5h1.988l2.4 11.998a.625.625 0 0 0 .612.502h11.25v-1.25H5.847l-.5-2.5h11.238a.625.625 0 0 0 .61-.49l1.417-6.385h-1.28L16.083 10H5.096l-1.65-8.248Z" />
                        <path d="M11.584 3.75v-2.5h-1.25v2.5h-2.5V5h2.5v2.5h1.25V5h2.5V3.75h-2.5Z" />
                      </g>
                      <defs>
                        <clipPath id="a">
                          <path fill="#fff" d="M.333 0h20v20h-20z" />
                        </clipPath>
                      </defs>
                    </svg>{' '}
                    Add to Cart
                  </button>
                  
                )}
              </div>
            </div>
          );
        })}
        
      </div>
    </div>
  );
};

export default Product;
