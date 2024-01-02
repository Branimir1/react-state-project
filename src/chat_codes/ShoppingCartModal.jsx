import React, { useState } from 'react';
import { Modal, Button, Badge, ListGroup, Form } from 'react-bootstrap';
import { useShoppingCart } from './ShoppingCartContext';
import { firestore } from '../firebase';
import { collection, addDoc } from "firebase/firestore"; // Import specific functions

const ShoppingCartModal = () => {
  const [showModal, setShowModal] = useState(false);
  const { state, dispatch, getTotalQuantity } = useShoppingCart();

  const totalQuantity = getTotalQuantity();

  // show and hide modal
  const handleShow = () => setShowModal(true);
  const handleClose = () => setShowModal(false);

  const incrementQuantity = (id) => {
    dispatch({
      type: 'UPDATE_QUANTITY',
      payload: { id, quantity: 1 },
    });
  };

  // function handleSubmit() {
  //   return
  // };
  //test 1
  const handleSubmit = () => {
    // ... existing code ...

    handleSubmitAsync().then(() => {
      // This block will execute after the asynchronous operation is complete
      console.log('Order attempted successfully!');
      handleClose(); // Close the modal after submitting
    });
  };

  const handleSubmitAsync = async () => {
    try {
      const db = firestore;

      // Collect order data
      const orderData = {
        items: state.cartItems.map(item => ({ name: item.name, quantity: item.quantity })),
        totalAmount: calculateTotalAmount(),
        userName: document.getElementById('formName').value,
        address: document.getElementById('formAddress').value,
        city: document.getElementById('formCity').value,
      };

    // Use the `collection` and `addDoc` functions
    const ordersCollection = collection(db, 'orders');
    await addDoc(ordersCollection, orderData);

    console.log('Order submitted successfully!');

      // Close the modal after submitting
      handleClose();
    } catch (error) {
      console.error('Error submitting order:', error.message);
    }
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
      <Button variant="outline-primary" onClick={handleShow} >
        Check Cart <i className="bi bi-cart4"></i>
        {totalQuantity > 0 && (
          <Badge
            pill
            bg="danger"
            text="light"
            className="d-flex justify-content-center align-items-center"
            style={{
              position: "absolute",
              width: "1.5rem",
              height: "1.5rem",
              bottom: 0,
              right: 0,
              transform: "translate(0%, 25%)",
            }}
          >
            {totalQuantity}
          </Badge>
        )}
      </Button>

      <Modal show={showModal} onHide={handleClose}>
        <Modal.Header className="bg-danger text-light" closeButton>
          <Modal.Title>Shopping Cart</Modal.Title>
        </Modal.Header>
        <Modal.Body >
          <ListGroup as="ul">
            <ListGroup.Item as="li" variant='light'>
              {state.cartItems.map((item) => (
                <div key={item.id} className="d-flex justify-content-between py-2" >
                  <div className='ml-auto'>
                    <span className="fw-bold">
                      {item.name}</span>
                    <span> {item.price * item.quantity}€</span>
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

          {/* Form for user's name and address */}
          <Form className='py-2'>
            <Form.Group controlId="formName">
              <Form.Label className='px-2 pt-1 fw-bold'>Delivery Information</Form.Label>
              <Form.Control
                type="text"
                label="name"
                placeholder="Enter your name"
              // Add any other required properties or validation as needed
              />
            </Form.Group>

            <Form.Group controlId="formAddress" className='py-2'>
              <Form.Control
                type="text"
                label="address"
                placeholder="Enter delivery address"
                required
              // Add any other required properties or validation as needed
              />
            </Form.Group>

            <Form.Group controlId="formCity">
              <Form.Control
                type="text"
                label="city"
                placeholder="Enter city"
                required
              // Add any other required properties or validation as needed
              />
            </Form.Group>

          </Form>

        </Modal.Body>
        {/* tu bi mogao staviti name adress i radio button */}
        <Modal.Footer>
          <div className='position-absolute start-0 px-3'>
            <span className="fw-bold">
              Total Amount: {calculateTotalAmount()} €</span>
          </div>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleSubmit}> {/* tu bi mogao staviti name adress i radio button */}
            Submit
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default ShoppingCartModal;
