import React, { useEffect, useState } from "react";
import { Grid, Paper, Typography, Avatar, Container } from "@mui/material";
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
        console.error("Error:", error);
      });
  }, []);

  return (
    <Grid
      container
      justifyContent="center"
      alignItems="center"
      style={{ height: "100vh" }}
    >
      <Grid item xs={12} md={6}>
        <Paper
          elevation={3}
          style={{
            padding: "20px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            height: "100%",
          }}
        >
          <Avatar
            alt={userData.name}
            src={userData?.profile_picture}
            style={{ width: "150px", height: "150px" }}
          />
          <Typography variant="h6" gutterBottom>
            User Information
          </Typography>
          <Typography variant="body1">ID: {userData?.id}</Typography>
          <Typography variant="body1">
            Name: {userData?.first_name + " " + userData?.last_name}
          </Typography>
          <Typography variant="body1">Email: {userData?.email}</Typography>
          <Typography variant="body1">
            Is Verified: {userData?.isVerified ? "Yes" : "No"}
          </Typography>
        </Paper>
      </Grid>
    </Grid>
  );
};

export default UserDashboard;
