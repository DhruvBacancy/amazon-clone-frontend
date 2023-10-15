import React, { useState } from "react";
import { Grid, Paper, Typography, Button, IconButton } from "@mui/material";
import { Link } from "react-router-dom";
import ProductDetail from "./products/ProductDetail";


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
      {cartItems.map((item) => (
        <Grid container spacing={3} key={item.id}>
          <Grid item xs={12} md={6}>
            {/* <ProductDetail name={item.name} imageUrl={item.thumbnail} /> */}
            <Typography variant="h4" gutterBottom>
            {item.name}
        </Typography>
        <img
          src="https://i.dummyjson.com/data/products/1/thumbnail.jpg"
          alt="Product"
          style={{ maxWidth: "100%" }}
        />
          </Grid>
          <Grid item xs={12} md={3}>
            <Paper elevation={3} style={{ padding: "20px" }}>
              <Typography variant="body1">Quantity: {item.quantity}</Typography>
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
            </Paper>
          </Grid>
          <Grid item xs={12} md={3}>
            <Button
              variant="contained"
              color="secondary"
              onClick={() => removeItem(item.id)}
            >
              Remove
            </Button>
          </Grid>
        </Grid>
      ))}
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
  );
};

export default Cart;
