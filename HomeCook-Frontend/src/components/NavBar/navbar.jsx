import React from 'react';
import './navbar.css';
import { useNavigate } from 'react-router-dom';
import { BsCart2 } from 'react-icons/bs';

const Navbar = () => {
  const navigate = useNavigate();

  const handleNavigation = (path) => {
    navigate(path);
  };

  return (
    <nav>
      <div className='contact-form-container2'>
        <input type="text" placeholder='Search your dish' />
        <button className='secondary-button'>Search</button>
      </div>

      <div className='navbar-links-container'>
        <a onClick={() => handleNavigation("/")}>Home</a>
        <a onClick={() => handleNavigation("/about")}>About</a>
        <a onClick={() => handleNavigation("/contact")}>Contact</a>
        <a onClick={() => handleNavigation("/menu")}>Menu</a>
        <a onClick={() => handleNavigation("/cart")}>
          <BsCart2 className='navbar-cart-icon' />
        </a>
        <button className='primary-button'>Order Now</button>
      </div>
    </nav>
  );
};

export default Navbar;
