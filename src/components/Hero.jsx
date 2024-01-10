import React, {useRef} from 'react'
import Button from 'react-bootstrap/Button';
import pizzaHero from '../img/wallpaper_pizza.jpg';

function MyHero() {

    const menuSectionRef = useRef(null);

    const scrollToMenu = () => {
      if (menuSectionRef.current) {
        menuSectionRef.current.scrollIntoView({ behavior: 'smooth' });
      }
    };

    const heroStyle = {
        backgroundImage: `url(${pizzaHero})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        position: 'relative',
        color: 'white',
        padding: '200px 30px', // Adjust the padding as needed
        zIndex:1 ,
      };

      const overlayStyle = {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        backgroundColor: 'rgba(0, 0, 0, 0.3)',
        zIndex: 2,
      };

  return (
    <>
    <div style={heroStyle}>
      <div style={overlayStyle}>
      <h1 style= {{color:'white', fontWeight:'bold', zIndex: 3, paddingTop:"3rem"}}>
        The most delicious pizzas and burgers in your region</h1>
      <span className='my-1'>
        Made with local organic ingredients
      </span><br/>
      <Button variant="danger" onClick={scrollToMenu}
      style={{zIndex: 4}}>
          Order now</Button>
      </div>
    </div>
    
    <div id="menu-section" ref={menuSectionRef}>
      <span style={{ color: '#495057', fontSize: '1.5rem' }} className="fw-bolder">
        OUR MENU
      </span>
    </div>
    </>
  )
}

export default MyHero

