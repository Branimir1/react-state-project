import './App.css'
import React, { useEffect, useState } from 'react';
//import PizzaNames from './Count.jsx'
import BasicNav from './Navbar.jsx'
import PizzaItem from './chat_codes/PizzaItem.jsx';
import { ShoppingCartProvider } from './chat_codes/ShoppingCartContext';
import { fetchMenuItems } from './menuService';
import { Image } from 'react-bootstrap';
import pizzaImage from './img/pizza2.jpg'; // Import the image
import MyFooter from './Footer.jsx';

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
         <h1>Hero Section</h1>
            <Image src={pizzaImage} className="my-2" alt="Pizza" fluid rounded style={{ maxWidth: '100%', maxHeight: '400px' }} /> 
            {/* slika pizze  <Image src=".img/pizza2" fluid />*/}
          {menuItems.map((menuItem) => (
            <PizzaItem key={menuItems.id} item={menuItem}/>
          ))
          }
          {/* slika burgera i burger items sad ima 2 nacina jedan je da loopam kroz 5 elemenata a 
          drugi da napravim 2 pizzaitem file-a sto mi bas nema puno funkcionalnog smisla*/}
          {console.log(menuItems)}
          </div>
          <MyFooter/>
        </ShoppingCartProvider>   
  );
}

/* if you ever need the old value to determine the new state value
  you should pass a callback function instead of state directly 
  u main appu:
  navbar, hero, ul pizze i grill, site info u footer working hours i lokacija
  react hooks koje trebam state effect i context
  */
