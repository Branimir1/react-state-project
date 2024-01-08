import React, { useState , useEffect } from 'react';
import { Table } from 'react-bootstrap';
import { db } from './firebase';
import { collection, query, getDocs } from "firebase/firestore";

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
  );
}
