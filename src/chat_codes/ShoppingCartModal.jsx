import React, { useState } from 'react';
import { Modal, Button, Badge, ListGroup, Form, Alert } from 'react-bootstrap';
import { useShoppingCart } from './ShoppingCartContext';
import { firestore } from '../firebase';
import { collection, addDoc } from "firebase/firestore"; // Import specific functions

const ShoppingCartModal = () => {
  const [showModal, setShowModal] = useState(false);
  const { state, dispatch, getTotalQuantity } = useShoppingCart();
  const [validated, setValidated] = useState(false);
  const [showSuccessMessage, setShowSuccessMessage] = useState(false); // New state for success message


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

  //test 1
  const handleSubmit = (event) => {
    //  validation logic 
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }
    // If the form is valid, proceed with submission
    setValidated(true);

    //order submission
    handleSubmitAsync(event).then(() => {
      console.log('Order requesting!');
       // if successful submitting add a success message
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
      // dispatch({ type: 'RESET_CART' });
      // Display success message, close the modal, and reset the count of items
           
      // Close the modal after submitting 
      handleClose();

      setShowSuccessMessage(true); 
      setTimeout(() => {
        setShowSuccessMessage(false);
      }, 9000);

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

      {/* button for navbar */}
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
          <Form noValidate validated={validated} onSubmit={handleSubmit} className='py-1'>
            {/* <Form.Group controlId="validationCustomUsername"> */}
            <Form.Group>
              <Form.Label className='px-2 py-1 fw-bold'>Delivery Information</Form.Label>
              <Form.Control
                type="text"
                label="name"
                id="formName"
                placeholder="Enter your name"
                required
              // Add any other required properties or validation as needed
              />
              <Form.Control.Feedback type="invalid">
                Please provide a name.
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group className='my-2'>
            {/* <Form.Group controlId="validationCustomAddress" className='py-2'> */}
              <Form.Control
                type="text"
                label="address"
                id="formAddress"
                placeholder="Enter delivery address"
                required
              // Add any other required properties or validation as needed
              />
              <Form.Control.Feedback type="invalid">
                Please provide an address.
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group>
            {/* <Form.Group controlId="validationCustomCity" className='mb-2'> */}
              <Form.Control
                type="text"
                label="city"
                id="formCity"
                placeholder="Enter city"
                required
              // Add any other required properties or validation as needed
              />
              <Form.Control.Feedback type="invalid">
                Please provide a city.
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group className='mt-3'>
            <div className='row'>
              <div className='col-6'>
                <span className="fw-bold mx-2">
                  Total Amount: {calculateTotalAmount()} €</span>
              </div>
              <div className='col-6 d-flex justify-content-end'>
              <Button variant="secondary" onClick={handleClose} className='mx-2'>
                  Close
                </Button>
              <Button variant="primary" type="submit" > {/* onClick={handleSubmit} */}
                  Submit
                </Button>
              </div>
            </div>
            </Form.Group>

            </Form>
        </Modal.Body>
        </Modal>
        {/* tu bi mogao staviti name adress i radio button */}
        {/* <Modal.Footer>
          <div className='position-absolute start-0 px-3'>
            <span className="fw-bold">
              Total Amount: {calculateTotalAmount()} €</span>
          </div>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleSubmit}> 
            Submit
          </Button>
        </Modal.Footer> */}

        {/* Success message pokazuje se u navbaru */}
      <Alert
        show={showSuccessMessage}
        variant="success"
        onClose={() => setShowSuccessMessage(false)}
        dismissible 
        style={{ width: '100%' }}>
        Order placed successfully!
      </Alert> 
    </div>
  );
}

export default ShoppingCartModal;
