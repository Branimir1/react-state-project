//app.jsx

import './App.css'
import React, { useEffect, useState } from 'react';
import BasicNav from './Navbar.jsx'
import { ShoppingCartProvider } from './components/ShoppingCartContext.jsx';
import { fetchMenuItems } from './menuService';
import { Alert } from 'react-bootstrap';
import MenuSection from './MenuSection.jsx'; // Import the MenuSection component
import MyFooter from './Footer.jsx';
import MyHero from './Hero.jsx';
import { BrowserRouter as Router } from 'react-router-dom';


export default function App() {
  const [menuItems, setMenuItems] = useState([]);
  const [showSuccessMessage, setShowSuccessMessage] = useState(true);

  const handleShowSuccessMessage = () => {
    setShowSuccessMessage(true);
    setTimeout(() => {
      setShowSuccessMessage(false);
    }, 9000); // Adjust the duration as needed
  };

  useEffect(() => {
    const fetchMenuData = async () => {
      try {
        const data = await fetchMenuItems();
        setMenuItems(data.categories);
        //console.log(data);
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
      <div label="alert">
          {/* Success style={{ position: 'fixed', top: 0, right: 0, width: '100%' , zIndex:60}} */}
          <Alert
              variant="success"
              onClose={() => setShowSuccessMessage(false) }
              dismissible 
              style={{ position: 'fixed', top: '15%', right: '0', width: '100%', zIndex: 60 }}

            >
              Order placed successfully!
            </Alert>
        </div>
        <div id="home">
        <BasicNav handleShowSuccessMessage={handleShowSuccessMessage} />
        </div>
        <MyHero />
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

