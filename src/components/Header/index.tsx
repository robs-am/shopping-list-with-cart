import React from 'react';
import { Link } from 'react-router-dom'; 
import classes from './header.module.scss';

import CartWidget from '../CartWidget'; 

const Header: React.FC = () => {
  const productsCount = 0; 

  return (
    <header className={classes.header}>
      <div>
        <Link to="/">
         {/*  <img src={logo} className={classes.logo} alt="Shopping Cart Application" /> */}
          <h1>Shopping Cart</h1>
        </Link>
      </div>
      <div>
        <CartWidget productsCount={productsCount} />
      </div>
    </header>
  );
};

export default Header;
