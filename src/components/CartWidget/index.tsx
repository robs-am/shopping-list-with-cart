import React from 'react';
import { useCart } from '../../context/CartContext';
import classes from './cart-widget.module.scss';

const CartWidget: React.FC = () => {
  const { cart, removeFromCart } = useCart(); // Supondo que o removeFromCart já exista no contexto

  const totalItems = cart.reduce((total, product) => total + product.quantity, 0);

  const totalPrice = cart.reduce((total, product) => total + product.price * product.quantity, 0);

  return (
    <div className={classes.cartCotainer}>
      <h2 className={classes.cartCounter}>Your Cart ({totalItems})</h2>

      <div className={classes.cartDetails}>
        {cart.map((product) => (
          <div key={product.id} className={classes.cartItem}>
            <span className={classes.cartItemName}>{product.name}</span>
            <div className={classes.cartValuesContainer}>
              <div className={classes.cartValues}>
                <span className={classes.cartItemQuantity}>{product.quantity}x</span>
                <span className={classes.cartItemPriceUnit}>${product.price.toFixed(2)}</span>
                <span className={classes.cartItemTotal}>${(product.price * product.quantity).toFixed(2)}</span>
              </div>

              <button
                className={classes.removeButton}
                onClick={() => removeFromCart(product.id)}
              >
               <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" fill="none" viewBox="0 0 10 10"><path fill="#CAAFA7" d="M8.375 9.375 5 6 1.625 9.375l-1-1L4 5 .625 1.625l1-1L5 4 8.375.625l1 1L6 5l3.375 3.375-1 1Z"/></svg>
              </button>
            </div>

          </div>
        ))}

        <div className={classes.cartTotal}>
          <span className={classes.orderTotal}>Order Total:</span> 
          <span>${totalPrice.toFixed(2)}</span>
        </div>
      </div>
    </div>
  );
};

export default CartWidget;
