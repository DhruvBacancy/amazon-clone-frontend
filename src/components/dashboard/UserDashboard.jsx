import React, { useEffect, useState } from "react";
import { Grid, Paper, Typography } from "@mui/material";
import axios from "axios";

const UserDashboard = () => {
  const [userData, setUserData] = useState({});
  const config = {
    method: "get",
    url: "http://localhost:3000/api/users/get-user",
    headers: {
      Authorization: `${localStorage.getItem("token")}`,
      "Content-Type": "application/json",
    },
  };
  useEffect(() => {
    axios(config)
      .then((response) => {
        setUserData(response.data.user[0]);
      })
      .catch((error) => {
        // Handle errors here
        console.error("Error:", error);
      });
  }, []);

  const orderHistory = [
    {
      orderId: "123456",
      date: "2023-01-15",
      totalAmount: 150.99,
    },
    {
      orderId: "789012",
      date: "2023-02-20",
      totalAmount: 99.5,
    },
    // Add more order history as needed
  ];

  return (
    <div style={{ padding: "20px" }}>
      <Typography variant="h4" gutterBottom>
        User Dashboard
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <Paper elevation={3} style={{ padding: "20px" }}>
            <Typography variant="h6" gutterBottom>
              User Information
            </Typography>
            <Grid container spacing={3}>
              <Grid
                item
                xs={12}
                md={4}
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <img
                  src={userData?.profile_picture}
                  alt={userData.name}
                  style={{
                    maxWidth: "100%",
                    // height: "auto",
                    width: "100px",
                    height: "100px",
                  }}
                />
              </Grid>
            </Grid>
            <Typography variant="body1">
              Name: {userData?.first_name + " " + userData?.last_name}
            </Typography>
            <Typography variant="body1">Email: {userData?.email}</Typography>
            {/* <Typography variant="body1">
              Address: {userData?.address}
            </Typography> */}
          </Paper>
        </Grid>
        <Grid item xs={12} md={6}>
          <Paper elevation={3} style={{ padding: "20px" }}>
            <Typography variant="h6" gutterBottom>
              Order History
            </Typography>
            {orderHistory.map((order) => (
              <div key={order.orderId}>
                <Typography variant="body1">
                  Order ID: {order.orderId}
                </Typography>
                <Typography variant="body1">Date: {order.date}</Typography>
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
