import React, { useState } from 'react';
import { Form, Button, Container } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export function Login() {
  const NavigateTo = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleHomeButtonClick = () => {
    NavigateTo('/');
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    //unable to prevent default
    // sifra je kidrock2

    try {
      // Use Firebase authentication to sign in the user
      await auth.signInWithEmailAndPassword(email, password);
      const auth = getAuth();
      signInWithEmailAndPassword(auth, email, password).then((userCredential) => {
        const user = userCredential.user;
        console.log(user);
        // Redirect to "/orders" after successful login
        NavigateTo('/orders');
      })
      
    } catch (error) {
      // Display error message using toast
      toast.error('Invalid email or password', {
        position: 'top-center',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
    }
  };

  return (
    <div className="py-2 bg-secondary" style={{ height: '100%' }}>
      {/* Main content */}
      <Container className='w-100 m-auto d-flex flex-column align-items-start'>
        <Button variant="primary" className='text-light align-self-start' onClick={handleHomeButtonClick}>
          Home
        </Button>
        <main className='w-100 m-auto' style={{ maxWidth: 330 }}>
          <Form className='m-3 pt-3 text-light' onSubmit={handleLogin}>
            <h1 className="h3 my-3 fw-normal text-start"> 🍽️ Please sign in</h1>
            <Form.Floating className="mb-3">
              <Form.Control
                id="floatingInputCustom"
                type="email"
                placeholder="name@example.com"
                className='bg-secondary'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <label htmlFor="floatingInputCustom">Email address</label>
            </Form.Floating>
            <Form.Floating className="mb-3">
              <Form.Control
                id="floatingPasswordCustom"
                type="password"
                placeholder="Password"
                className='bg-secondary'
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <label htmlFor="floatingPasswordCustom">Password</label>
            </Form.Floating>
            <Form.Check className="text-start pb-4">
              <Form.Check.Input type="checkbox" id="flexCheckDefault" />
              <Form.Check.Label htmlFor="flexCheckDefault">Remember me</Form.Check.Label>
            </Form.Check>
            <Button variant="primary" type="submit" className="w-100">
              Sign in
            </Button>
            <p className="pt-4 mb-1 text-body-secondary">© 2024</p>
          </Form>
        </main>
      </Container>
      {/* Toast container for displaying messages */}
      <ToastContainer />
    </div>
  );
}
