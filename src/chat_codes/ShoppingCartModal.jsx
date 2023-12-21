import React, { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';
import { useShoppingCart } from './ShoppingCartContext';

const ShoppingCartModal = () => {
  const [showModal, setShowModal] = useState(false);  
  const { state, dispatch, getTotalQuantity } = useShoppingCart();

  const totalQuantity = getTotalQuantity();

  // show and hide modal
  const handleShow = () => setShowModal(true);
  const handleClose = () => setShowModal(false);
  console.log(totalQuantity);
  //modal isto ok ne moram mjenjati zasad
  // sad bi trebao raditi kao zadnji jer mu ne 
  //saljem funkciju sa parametrima nego samo state
  const incrementQuantity = (id) => {
    dispatch({
      type: 'UPDATE_QUANTITY',
      payload: { id, quantity: 1 },
    });
  };

  const decrementQuantity = (id) => {
    dispatch({
      type: 'UPDATE_QUANTITY',
      payload: { id, quantity: -1 },
    });
  };

  // Function to calculate the total amount
  const calculateTotalAmount = () => {
    return state.cartItems.reduce((total, item) => {
      return total + item.quantity * item.price;
    }, 0);
  };

  return (
  <div>
    <Button variant="dark" className="rounded bg-danger" onClick={handleShow}>
        Check Cart <i class="bi bi-cart4"> x {totalQuantity > 0 && `(${totalQuantity})`}</i>
    </Button>

    <Modal show={showModal} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Shopping Cart</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {state.cartItems.map((item) => (
          <div className='fluid' key={item.id}>
            <p>{item.name}</p>
            <p>Price: {item.price * item.quantity}€</p>
             {/* Buttons for incrementing and decrementing quantity */}
             <Button variant="outline-primary" onClick={() => incrementQuantity(item.id)}>
              +
            </Button>
            <p> Amount: {item.quantity}</p>
            <Button variant="outline-danger" onClick={() => decrementQuantity(item.id)}>
              -
            </Button>
          </div>
        ))}
      </Modal.Body>
      <Modal.Footer>
        <p className='position-absolute start-0'>Total Amount: {calculateTotalAmount()} €</p>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  </div>
  );
}

export default ShoppingCartModal;
