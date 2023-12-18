import React, { useState } from 'react';
import { Button, Modal } from 'react-bootstrap';

const ShoppingCart = () => {
  const [showModal, setShowModal] = useState(false);

  const handleShow = () => setShowModal(true);
  const handleClose = () => setShowModal(false);

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
          {/* Add your shopping cart content here */}
          <p>Item 1: Product Name</p>
          <p>Item 2: Another Product</p>
          {/* Add more items as needed */}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default ShoppingCart;
