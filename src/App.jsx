import './App.css'
import React, { useEffect, useState } from 'react';
import BasicNav from './Navbar.jsx'
import PizzaItem from './chat_codes/PizzaItem.jsx';
import { ShoppingCartProvider } from './chat_codes/ShoppingCartContext';
import { fetchMenuItems } from './menuService';
import { Image } from 'react-bootstrap';
import pizzaImage from './img/pizza2.jpg'; // Import the image
import burgerImage from './img/burger2.jpg';
import MyFooter from './Footer.jsx';
import MyHero from './Hero.jsx';
import { BrowserRouter as Router } from 'react-router-dom';


export default function App() {
  const [menuItems, setMenuItems] = useState([]);
  
  useEffect(() => {
    const fetchMenuData = async () => {
      try {
        const data = await fetchMenuItems();

        setMenuItems(data.categories);
        console.log(data);
    // Set the state with the array of pizza items
      } catch (error) {
        // Handle the error if needed
      }
    };
    fetchMenuData();
  }, []);
 

  return (
    <ShoppingCartProvider>
      <Router>
        <div id="home">
          <BasicNav />
          <MyHero />
        </div>
        <div id="menu">
          <MenuSection menuItems={menuItems} />
        </div>
        <div id="contact">
          <MyFooter />
        </div>
      </Router>
    </ShoppingCartProvider>
  );
}

// separate component for the Menu section
function MenuSection({ menuItems }) {
  return (
    <div className='container' style={{ maxWidth: '800px' }}>
      {menuItems.map((category) => (
        <div id="menu-section" key={category.name}>
          {category.name === 'Pizza' && (
            <Image src={pizzaImage} alt="Pizza" fluid rounded style={{ maxWidth: '100%', maxHeight: '400px' }} />
          )}
          {category.name === 'Burger' && (
            <Image src={burgerImage} alt="Burger" fluid rounded style={{ maxWidth: '100%', maxHeight: '400px' }} />
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
