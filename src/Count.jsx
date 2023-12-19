import React, { useState, useEffect } from 'react';
import jsonData from './menu.json';
import styles from './mystyle.module.css'; // Import the CSS module
import "bootstrap-icons/font/bootstrap-icons.css";


function PizzaNames() {
  const [pizzaData, setPizzaData] = useState([]);
  const [grillData,setGrillData] = useState([]);

  console.log(pizzaData)
  useEffect(() => {
    // Filter the data to get only the "Pizza" category
    const pizzaCategory = jsonData.categories.find(category => category.name === 'Pizza');
    const grillCategory = jsonData.categories.find(category => category.name === 'Grill');

    // Set the state with the array of pizza items
    setPizzaData(pizzaCategory ? pizzaCategory.items : []);
    setGrillData(grillCategory ? grillCategory.items : []);
  }, []);


  return (
    <div className={styles.darkTheme}>
      <h5>PIZZAS:</h5>
      <ul className='list-group'>
        {pizzaData.map(item => (
          <><li key={item.id} className='list-group-item text-bg-dark'>
            {item.name.toString().toUpperCase()}<br/>{item.description}
            <button className='btn btn-danger p-2'><i class="bi bi-cart2"></i> Buy ({item.price})</button>
            </li>
            </>
        ))}
      </ul>
      <h5>GRILL DISHES:</h5>
      <ul className='list-group'>
        {grillData.map(item => (
          <><li key={item.id} className='list-group-item text-bg-dark'>
            {item.name.toString().toUpperCase()}<br/>{item.description}
            <button className='btn btn-danger p-2'><i class="bi bi-cart2"></i> Buy ({item.price})</button>
            </li></>
        ))}
      </ul>
    </div>
  );
}

export default PizzaNames;
