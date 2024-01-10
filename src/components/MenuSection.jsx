// MenuSection.jsx
import React from 'react';
import { Image } from 'react-bootstrap';
import PizzaItem from './PizzaItem.jsx';
import pizzaImage from '../img/pizza2.jpg'; // Import the image
import burgerImage from '../img/burger2.jpg';

function MenuSection({ menuItems }) {
  return (
    <div className='container' style={{ maxWidth: '800px', padding: '0px' }}>
      {menuItems.map((category) => (
        <div id="menu-section" key={category.name}>
          {category.name === 'Pizza' && (
            <Image src={pizzaImage} alt="Pizza" fluid rounded style={{ maxWidth: '100%', maxHeight: '500px' }} />
          )}
          {category.name === 'Burger' && (
            <Image src={burgerImage} alt="Burger" fluid rounded style={{ maxWidth: '100%', maxHeight: '500px' }} />
          )}
          <div className="category-items">
            {category.items.map((menuItem) => (
              <PizzaItem key={menuItem.id} item={menuItem} />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default MenuSection;
