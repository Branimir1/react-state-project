import React, { useState , useEffect } from 'react';
import { Table , Navbar, Container, Nav } from 'react-bootstrap';
import { db } from './firebase';
import { collection, query, getDocs } from "firebase/firestore";
import { Link } from 'react-router-dom';  // Import Link from react-router-dom


export function Overview() {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    // Fetch data from Firestore
    const fetchData = async () => {
      try {
        const ordersCollection = collection(db, 'orders');
        const q = query(ordersCollection);

        const querySnapshot = await getDocs(q);
        const ordersData = querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
        setOrders(ordersData);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
    <Navbar className="bg-secondary m-auto" >
      <Container>
          <Nav>
            <Nav.Link as={Link} to="/" className="text-light"
            >Return to Home</Nav.Link>
          </Nav>    
      </Container>
      <Nav.Link as={Link} to="/login" className="text-light px-3">Logout</Nav.Link>
    </Navbar>
    <Table striped bordered hover responsive variant="dark" size="sm">
      <thead>
        <tr>
          <th>#</th>
          <th>Username</th>
          <th>Address</th>
          <th>Order content</th>
          <th>Sum</th>
        </tr>
      </thead>
      <tbody>
        {orders.map((order, index) => (
          <tr key={order.id}>
            <td>{index + 1}</td>
            <td>{order.userName}</td>
            <td>{`${order.address}, ${order.city}`}</td>
            <td>
              {order.items.map((item, itemIndex) => (
                <div key={itemIndex}>
                  {`${item.quantity} x ${item.name}`}
                </div>
              ))}
            </td>
            {/* <td>{order.items}</td> */}
            <td>{order.totalAmount}</td>
          </tr>
        ))}
      </tbody>
    </Table>
    </>
  );
}
