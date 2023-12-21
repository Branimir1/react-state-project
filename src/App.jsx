import './App.css'
import React, { useEffect, useState } from 'react';
//import PizzaNames from './Count.jsx'
import BasicNav from './Navbar.jsx'
import PizzaItem from './chat_codes/PizzaItem.jsx';
import { ShoppingCartProvider } from './chat_codes/ShoppingCartContext';
import { fetchMenuItems } from './menuService';

export default function App() {
  const [menuItems, setMenuItems] = useState([]);
  
  useEffect(() => {
    const fetchMenuData = async () => {
      try {
        const data = await fetchMenuItems();
        const pizzaCategory = data.categories.find(category => category.name === 'Pizza');
        setMenuItems(pizzaCategory ? pizzaCategory.items : []);
        console.log(data);
    // Set the state with the array of pizza items
      } catch (error) {
        // Handle the error if needed
      }
    };
    fetchMenuData();
  }, []);
 
  // <MenuItem name={pizze.name} description={pizze.description}/>
  return (
        <ShoppingCartProvider>
          <BasicNav/>
         <div className='container'>
            <div className='mt-5'>
            <h1>Hero Section</h1>
            </div>
          {menuItems.map((menuItem) => (
            <PizzaItem key={menuItems.id} item={menuItem}/>
          ))
          }
          {console.log(menuItems)}
          </div>
        </ShoppingCartProvider>   
  );
}

/* if you ever need the old value to determine the new state value
  you should pass a callback function instead of state directly 
  u main appu:
  navbar, hero, ul pizze i grill, site info u footer working hours i lokacija
  react hooks koje trebam state effect i context
  */
