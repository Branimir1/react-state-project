import React from 'react'
import { Button } from 'react-bootstrap';
import pizzaHero from './img/wallpaper_pizza.jpg';

function MyHero() {

    const heroStyle = {
        backgroundImage: `url(${pizzaHero})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        position: 'relative',
        color: 'white',
        padding: '100px 20px', // Adjust the padding as needed
      };

      const overlayStyle = {
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        backgroundColor: 'rgba(0, 0, 0, 0.4)', // Adjust the alpha value for darkness
      };

  return (
    <div style={heroStyle}>
      <div style={overlayStyle}></div>
      <h1>Welcome to La Pizzeria</h1>
      <span className=''>
        This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.
      </span>
      <div className='py-3'>
        <Button variant="danger">Learn more</Button>
      </div>
    </div>
  )
}

export default MyHero