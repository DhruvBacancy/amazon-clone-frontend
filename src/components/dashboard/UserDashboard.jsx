import React from 'react';
import { Grid, Paper, Typography } from '@mui/material';

const UserDashboard = () => {
    // Mock user data
    const userData = {
      name: 'John Doe',
      email: 'johndoe@example.com',
      address: '123 Main St, City, Country',
    };
  
    // Mock order history
    const orderHistory = [
      {
        orderId: '123456',
        date: '2023-01-15',
        totalAmount: 150.99,
      },
      {
        orderId: '789012',
        date: '2023-02-20',
        totalAmount: 99.50,
      },
      // Add more order history as needed
    ];
  
    return (
      <div style={{ padding: '20px' }}>
        <Typography variant="h4" gutterBottom>
          User Dashboard
        </Typography>
        <Grid container spacing={3}>
          <Grid item xs={12} md={6}>
            <Paper elevation={3} style={{ padding: '20px' }}>
              <Typography variant="h6" gutterBottom>
                User Information
              </Typography>
              <Typography variant="body1">Name: {userData.name}</Typography>
              <Typography variant="body1">Email: {userData.email}</Typography>
              <Typography variant="body1">Address: {userData.address}</Typography>
            </Paper>
          </Grid>
          <Grid item xs={12} md={6}>
            <Paper elevation={3} style={{ padding: '20px' }}>
              <Typography variant="h6" gutterBottom>
                Order History
              </Typography>
              {orderHistory.map((order) => (
                <div key={order.orderId}>
                  <Typography variant="body1">
                    Order ID: {order.orderId}
                  </Typography>
                  <Typography variant="body1">
                    Date: {order.date}
                  </Typography>
                  <Typography variant="body1">
                    Total Amount: ${order.totalAmount.toFixed(2)}
                  </Typography>
                </div>
              ))}
            </Paper>
          </Grid>
        </Grid>
      </div>
    );
  };
  
  export default UserDashboard;
  