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

export default function App() {
  const [menuItems, setMenuItems] = useState([]);
  
  useEffect(() => {
    const fetchMenuData = async () => {
      try {
        const data = await fetchMenuItems();
        //const pizzaCategory = data.categories.find(category => category.name === 'Pizza');
        //setMenuItems(pizzaCategory ? pizzaCategory.items : []);
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
          <BasicNav/>
         <div className='container' style={{ maxWidth: '800px'}}>
         <h1>Hero Section</h1>
         {/* 
            <Image src={pizzaImage} className="my-2" alt="Pizza" fluid rounded style={{ maxWidth: '100%', maxHeight: '400px' }} /> 
            slika pizze  <Image src=".img/pizza2" fluid />
            <PizzaItem key={menuItems.id} item={menuItem}/>*/}
          {menuItems.map((category) => (
            <div key={category.name}>
              {/*<h2>{category.name}</h2>*/}
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
          <MyFooter/>
          </div>
        </ShoppingCartProvider>   
  );
}

