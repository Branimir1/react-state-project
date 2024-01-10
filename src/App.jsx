//app.jsx
import './App.css'
import React, { useEffect, useState } from 'react';
import BasicNav from './components/Navbar.jsx'
import { ShoppingCartProvider } from './components/ShoppingCartContext.jsx';
import { fetchMenuItems } from './menuService';
import { Alert } from 'react-bootstrap';
import MenuSection from './components/MenuSection.jsx'; // Import the MenuSection component
import MyFooter from './components/Footer.jsx';
import MyHero from './components/Hero.jsx';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Login } from './components/Login.jsx';
import { Overview } from './components/Overview.jsx';


export default function App() {
  const [menuItems, setMenuItems] = useState([]);
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);

  const handleShowSuccessMessage = () => {
    setShowSuccessMessage(true);
    setTimeout(() => {
      setShowSuccessMessage(false);
    }, 5000); // Adjust the duration as needed
  };

  useEffect(() => {
    const fetchMenuData = async () => {
      try {
        const data = await fetchMenuItems();
        setMenuItems(data.categories);
        // Set the state with the array of pizza items
      } catch (error) {
        console.log("Error catching data:", error);
        // Handle the error if needed
      }
    };
    fetchMenuData();
  }, []);

  return (
    <ShoppingCartProvider>
      <Router>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/orders" element={<Overview />} />
          <Route path="/" element={(
            <>
                <div label="alert">
                  {/* Render the Alert only when showSuccessMessage is true */}
                  {showSuccessMessage && (
                    <Alert
                      variant="success"
                      onClose={() => setShowSuccessMessage(false)}
                      dismissible
                      style={{ position: 'fixed', top: '15%', right: '0', width: '100%', zIndex: 60 }}
                    >
                      Order placed successfully!
                    </Alert>
                  )}
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
            </>
          )} />
        </Routes>
      </Router>
    </ShoppingCartProvider>
  );
}

