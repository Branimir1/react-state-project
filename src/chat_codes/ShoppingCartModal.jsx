import React, { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';
import { useShoppingCart } from './ShoppingCartContext';

const ShoppingCartModal = () => {
  const [showModal, setShowModal] = useState(false);
  const handleShow = () => setShowModal(true);
  const handleClose = () => setShowModal(false);
  const { state } = useShoppingCart();
  console.log(useShoppingCart);

  //modal isto ok ne moram mjenjati zasad
  // sad bi trebao raditi kao zadnji jer mu ne 
  //saljem funkciju sa parametrima nego samo state

  return (
  <div>
    <Button variant="dark" className="rounded bg-danger" onClick={handleShow}>
        Check Cart <i class="bi bi-cart4"></i>
    </Button>

    <Modal show={showModal} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Shopping Cart</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {state.cartItems.map((item) => (
          <div key={item.id}>
            <p>{item.name}</p>
            <p>Quantity: {item.quantity}</p>
            <p>Price: ${item.price}</p>
          </div>
        ))}
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  </div>
  );
}

export default ShoppingCartModal;
