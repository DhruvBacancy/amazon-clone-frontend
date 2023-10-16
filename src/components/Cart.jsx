import React, { useState } from "react";
import { Grid, Paper, Typography, Button, IconButton } from "@mui/material";
import { Link } from "react-router-dom";

const Cart = () => {
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: "Product 1",
      quantity: 2,
      imageUrl: "https://i.dummyjson.com/data/products/1/thumbnail.jpg",
    },
    { id: 2, name: "Product 2", quantity: 1, imageUrl: "product2.jpg" },
    // Add more items as needed
  ]);

  const updateQuantity = (itemId, newQuantity) => {
    const updatedCart = cartItems.map((item) => {
      if (item.id === itemId) {
        return { ...item, quantity: newQuantity };
      }
      return item;
    });
    setCartItems(updatedCart);
  };

  const removeItem = (itemId) => {
    const updatedCart = cartItems.filter((item) => item.id !== itemId);
    setCartItems(updatedCart);
  };

  return (
    <div style={{ padding: "20px" }}>
      <Typography variant="h4" gutterBottom>
        Shopping Cart
      </Typography>
      {cartItems.map((item, index) => (
        <div key={item.id}>
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
                src={item.imageUrl}
                alt={item.name}
                style={{
                  maxWidth: "100%",
                  height: "auto",
                  width: "100px",
                  height: "100px",
                }}
              />
            </Grid>
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
              <div>
                <Typography variant="h6">{item.name}</Typography>
                <Typography variant="body1">
                  Quantity: {item.quantity}
                </Typography>
                <div>
                  <IconButton
                    color="secondary"
                    onClick={() => updateQuantity(item.id, item.quantity - 1)}
                    disabled={item.quantity <= 1}
                  >
                    -
                  </IconButton>
                  <IconButton
                    color="primary"
                    onClick={() => updateQuantity(item.id, item.quantity + 1)}
                  >
                    +
                  </IconButton>
                </div>
              </div>
            </Grid>
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
              <Button
                variant="contained"
                color="secondary"
                onClick={() => removeItem(item.id)}
              >
                Remove
              </Button>
            </Grid>
          </Grid>
          {index < cartItems.length - 1 && (
            <div
              style={{
                width: "100%",
                borderBottom: "1px solid #ccc",
                margin: "10px 0",
              }}
            />
          )}
        </div>
      ))}
      <div className="align-center">
        <div style={{ marginTop: "20px" }}>
          <Button component={Link} to="/" variant="outlined" color="primary">
            Back to Shop
          </Button>
          <Button
            variant="contained"
            color="primary"
            style={{ marginLeft: "10px" }}
          >
            Checkout
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
