import React from 'react';
import { Button } from 'react-bootstrap';
import { useShoppingCart } from './ShoppingCartContext';
import styles from '../mystyle.module.css'; // Import the CSS module
import "bootstrap-icons/font/bootstrap-icons.css";

function PizzaItem({ item }) {
  const { dispatch, state } = useShoppingCart();

  const addToCart = () => {
    //check if existing
    const existingItem = state.cartItems.find((cartItem) => cartItem.id === item.id);
    console.log(existingItem);

    // Dispatch an action to add the pizza item to the cart
    if (existingItem) { 
      dispatch ({
      type: 'UPDATE_QUANTITY',
      payload: { id: item.id, quantity: 1 },
    });
    } else {
       dispatch({
        type: 'ADD_TO_CART',
        payload: { id: item.id, name: item.name, price: item.price, quantity: 1 },
      });
    }
  };
 
  return (
    <div >
      <ul className='list-group'>
      <li key={item.id} className='list-group-item text-bg-dark'>
            {item.name.toString().toUpperCase()}<br/>{item.description}
            <Button variant="danger" onClick={addToCart} >
            <i class="bi bi-cart2"></i> Buy ({item.price})</Button>
      </li>    
      </ul> 
    </div>
  );
}
 /* <ShoppingCartModal show={showModal} handleClose={closeModal} /> 
 <ul className='list-group'>
        {pizzaData.map(item => (
          <><li key={item.id} className='list-group-item text-bg-dark'>
            {item.name.toString().toUpperCase()}<br/>{item.description}
            <Button variant="danger" >
            <i class="bi bi-cart2"></i> Buy ({item.price})</Button>
            <button className='btn btn-danger p-2'><i class="bi bi-cart2"></i> Buy ({item.price})</button>
            </li>
          </>
        ))}
      </ul>*/
export default PizzaItem;
  //const [pizzaData, setPizzaData] = useState([]);
/* 
  useEffect(() => {
    const pizzaCategory = jsonData.categories.find(category => category.name === 'Pizza');
    // Set the state with the array of pizza items
    setPizzaData(pizzaCategory ? pizzaCategory.items : []);
  }, []);
  */