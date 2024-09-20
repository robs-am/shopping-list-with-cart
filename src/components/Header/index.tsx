import React from 'react';
import { Link } from 'react-router-dom'; 
import classes from './header.module.scss';



const Header: React.FC = () => {


  return (
    <header className={classes.header}>
      <div>
        <Link to="/">
         {/*  <img src={logo} className={classes.logo} alt="Shopping Cart Application" /> */}
          <h1>Shopping Cart</h1>
        </Link>
      </div>
      <div>
 
      </div>
    </header>
  );
};

export default Header;
