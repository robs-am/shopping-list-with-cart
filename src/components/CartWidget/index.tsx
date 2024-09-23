import React from 'react';
import { useCart } from '../../context/CartContext'; 
import classes from './cart-widget.module.scss';

const CartWidget: React.FC = () => {
  const { cart } = useCart(); 


  const totalItems = cart.reduce((total, product) => total + product.quantity, 0);

  return (
    <div>
      <h2 className={classes.cartCounter}>Your Cart ({totalItems})</h2>

    </div>
  );
};

export default CartWidget;
