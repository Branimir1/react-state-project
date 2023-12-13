import React, { useState, useEffect } from 'react';
import jsonData from './menu.json';

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
    <div>
      <h5>Pizzas:</h5>
      <ul>
        {pizzaData.map(item => (
          <><li key={item.id}>{item.name}</li>
          <li>{item.description}</li></>
        ))}
      </ul>
      <h5>Grill dishes:</h5>
      <ul>
        {grillData.map(item => (
          <><li key={item.id}>{item.name}</li>
          <li>{item.description}</li></>
        ))}
      </ul>
    </div>
  );
}

export default PizzaNames;
