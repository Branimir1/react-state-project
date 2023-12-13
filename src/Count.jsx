import React, { useState, useEffect } from 'react';
import jsonData from './menu.json';

function PizzaNames() {
  const [pizzaData, setPizzaData] = useState([]);
  console.log(pizzaData)
  useEffect(() => {
    // Filter the data to get only the "Pizza" category
    const pizzaCategory = jsonData.categories.find(category => category.name === 'Pizza');

    // Set the state with the array of pizza items
    setPizzaData(pizzaCategory ? pizzaCategory.items : []);
  }, []);

  return (
    <div>
      <h1>Pizza Names:</h1>
      <ul>
        {pizzaData.map(item => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default PizzaNames;
