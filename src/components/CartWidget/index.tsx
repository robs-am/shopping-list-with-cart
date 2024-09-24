import React from 'react';
import { useCart } from '../../context/CartContext';
import classes from './cart-widget.module.scss';

const CartWidget: React.FC = () => {
  const { cart } = useCart();


  const totalItems = cart.reduce((total, product) => total + product.quantity, 0);


  const totalPrice = cart.reduce((total, product) => total + product.price * product.quantity, 0);

  return (
    <div className={classes.cartCotainer}>
      <h2 className={classes.cartCounter}>Your Cart ({totalItems})</h2>

      <div className={classes.cartDetails}>
        {cart.map((product) => (
          <div key={product.id} className={classes.cartItem}>
            <span className={classes.cartItemName}>{product.name}</span>
            <span className={classes.cartItemQuantity}>{product.quantity}x</span>
            <span className={classes.cartItemPriceUnit}>
              ${product.price.toFixed(2)}
            </span>
            <span className={classes.cartItemTotal}>
              ${(product.price * product.quantity).toFixed(2)}
            </span>
          </div>
        ))}


        <div className={classes.cartTotal}>
          <strong>Total:</strong> ${totalPrice.toFixed(2)}
        </div>
      </div>
    </div>
  );
};

export default CartWidget;
