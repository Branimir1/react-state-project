import './App.css'
import React from 'react'
import PizzaNames from './Count.jsx'
import BasicNav from './Navbar.jsx'

export default function App() {

  // <MenuItem name={pizze.name} description={pizze.description}/>
  return (
      <div className='container-fluid'>
        <div className='row'>
          <div className='col-12'>
          <BasicNav/>
          <div className='mt-5'>
          <h1>Hero Section</h1>
          </div>
          <PizzaNames/>
          </div>
        </div>  
      </div>
  );
}

/* if you ever need the old value to determine the new state value
  you should pass a callback function instead of state directly 
  u main appu:
  navbar, hero, ul pizze i grill, site info u footer working hours i lokacija
  react hooks koje trebam state effect i context
  */
