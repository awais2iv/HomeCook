import React from 'react';
import './menu.css';
import food from '../../assets/food.jpg';

function Section() {
  return (
    <div className='menu-section' style={{ backgroundImage: `url(${food})` }}>
      <div className='menu-container'>
        <h2>Homemade Goodness, Delivered to Your Door</h2>
        <p>Experience the comfort of home-cooked meals without the hassle. Our rotating daily menu features fresh, chef-crafted dishes, ready to enjoy.</p>
      </div>
    </div>
  );
}

export default Section;
