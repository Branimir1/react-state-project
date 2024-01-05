
  //   //order submission
  //   handleSubmitAsync(event).then(() => {
  //     console.log('Order requesting!');
  //      // if successful submitting add a success message
  //   });
  // };
    //checking form validation 
  // const handleSubmit = (event) => {
  //   const form = event.currentTarget;
  //   if (form.checkValidity() === false) {
  //     event.preventDefault();
  //     event.stopPropagation();
  //   }
  //   setValidated(true);
  // };

    // attempt to save the data in db nemam return?
  // useEffect(() => {
  //   const submitOrder = async () => {
  //     try {
        
  //       //const db = firestore;
  //       console.log("dosao do db",db);

  //       const orderData = {
  //         items: state.cartItems.map(item => ({ name: item.name, quantity: item.quantity })),
  //         totalAmount: calculateTotalAmount(),
  //         userName: document.getElementById('formName').value,
  //         address: document.getElementById('formAddress').value,
  //         city: document.getElementById('formCity').value,
  //       };

  //       //const ordersCollection = collection(db, 'orders');
  //       //await addDoc(ordersCollection, orderData);

  //       console.log('Order submitted successfully!');
  //       //dispatch({ type: 'SET_SUCCESS_MESSAGE' });
  //       //handleShowSuccessMessage();

  //       handleClose();
  //     } catch (error) {
  //       console.error('Error submitting order:', error.message);
  //     }
  //   };

  //   if (validated) {
  //     //submitOrder();
  //     console.log("attempted");
  //     //ovo sam vidio
  //   }
  // }, [validated, state.cartItems, firestore, dispatch, handleShowSuccessMessage]);

 //dependency array
