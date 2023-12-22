import React, { useState } from 'react';
import { Modal, Button, Badge, ListGroup } from 'react-bootstrap';
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
    <Button variant="outline-danger" className="" onClick={handleShow}>
        Check Cart <i class="bi bi-cart4"></i>
        <Badge pill bg="dark" text='light' className='py-2 mx-1'>
          {totalQuantity > 0 && `${totalQuantity}`} 
          {/* ovo za total quality isto za item quality za svaku pizzu mogu lagano ubaciti */}
        </Badge>
    </Button>

    <Modal show={showModal} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Shopping Cart</Modal.Title>
      </Modal.Header>
      <Modal.Body>
      <ListGroup as="ul">
      <ListGroup.Item as="li" variant='light'>
        {state.cartItems.map((item) => (
          <div key={item.id} className="d-flex justify-content-between py-2" >
            <div className='ml-auto'>
              <span className="fw-bold">{item.name} {item.price * item.quantity}€</span>
              </div>
             {/* Buttons for incrementing and decrementing quantity */}
            <div className="d-flex align-items-center">
            <Button variant="outline-danger" onClick={() => decrementQuantity(item.id)}>
               - </Button>
            
            <div className='mx-3'>{item.quantity}</div>
            <div className='ml-auto mx-0'>
            <Button variant="outline-primary" onClick={() => incrementQuantity(item.id)}>
              + </Button> 
            </div>
          </div>
          </div>
        ))}
        </ListGroup.Item>
      </ListGroup>
      </Modal.Body>
          {/* tu bi mogao staviti name adress i radio button */}      
      <Modal.Footer>
        <div className='position-absolute start-0 px-2'>
        <span className="fw-bold">
          Total Amount: {calculateTotalAmount()} €</span>
          </div>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  </div>
  );
}

export default ShoppingCartModal;
