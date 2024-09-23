import React from 'react';
import { useNavigate } from 'react-router-dom';

/* import shoppingCart from '../../assets/shopping-cart.svg'; */
import classes from './cart-widget.module.scss';

interface CartWidgetProps {
  productsCount: number;
}

const CartWidget: React.FC<CartWidgetProps> = ({ productsCount }) => {
  const navigate = useNavigate();

  const navigateToCart = () => {
    navigate('/cart');
  };

  return (
    <button className={classes.container} onClick={navigateToCart}>
      <span className={classes.productsCount}>Your Cart ({productsCount})</span>
      {/* <img src={shoppingCart} className={classes.shoppingCart} alt="Go to Cart" /> */}
    </button>
  );
};

export default CartWidget;
