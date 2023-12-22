import React from 'react';
import { Button, ListGroup, Badge } from 'react-bootstrap';
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
    <div>
      <ListGroup as="ul">
      <ListGroup.Item
        as="li" variant='light'
        className="d-flex justify-content-between align-items-start">
        <div className="ms-2 me-auto">
          <div className="fw-bold">{item.name.toString().toUpperCase()}</div>
          {item.description}
        </div>
         {/*kad budem imao item u kosari    
            <Button variant="danger"  
          style={{ width: '80px', height: '40px', whiteSpace: 'nowrap' }}
          onClick={addToCart}>
            <i className="bi bi-cart2"></i> {item.price}€
          </Button>*/}
        <Button variant="danger"  
          style={{ minWidth: '80px', maxWidth:'80px', whiteSpace: 'nowrap' }}
          onClick={addToCart}>
            <i className="bi bi-cart2"></i> {item.price}€
          </Button>
      </ListGroup.Item>
    </ListGroup>
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

/* 
<div >
        <ul className='list-group'>
        <li key={item.id} className='list-group-item text-bg-dark'>
              <p>{item.name.toString().toUpperCase()}</p>
              <p>{item.description}</p>
              <Button variant="danger" className='my-2' onClick={addToCart} >
              <i class="bi bi-cart2"></i> {item.price} €</Button>
        </li>    
        </ul> 
        </div>
*/