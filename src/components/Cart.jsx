import React from "react";
import { Grid, Typography, Button, IconButton } from "@mui/material";
import { Link } from "react-router-dom";
import "../align.css";
import { useDispatch, useSelector } from "react-redux";
import { emptyCart, removeFromCart } from "../util/redux/actions/actions";
import DeleteIcon from "@mui/icons-material/Delete";

const Cart = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cartReducer);

  const updateQuantity = (product_id, newQuantity) => {
    const updatedCart = cartItems.map((item) => {
      if (item.product_id === product_id) {
        return { ...item, quantity: newQuantity };
      }
      return item;
    });
  };

  const removeItem = (product_id) => {
    dispatch(removeFromCart(product_id));
  };

  const total = cartItems.reduce(
    (acc, item) => acc + item.price_per_unit * item.quantity,
    0
  );
  const formattedTotal = total.toFixed(2);

console.log(cartItems)
  return (
    <>
      <Button
        variant="contained"
        color="secondary"
        startIcon={<DeleteIcon />}
        onClick={() => {
          dispatch(emptyCart());
        }}
        sx={{ marginTop: "20px", marginLeft: "20px" }}
      >
        Clear Cart
      </Button>
      {cartItems.length === 0 ? (
        <>
          <div classproduct_name="align-center">
            <h1>Cart is empty</h1>
          </div>
        </>
      ) : (
        <>
          <div style={{ padding: "20px" }}>
            <Typography variant="h4" gutterBottom>
              Shopping Cart
            </Typography>
            {cartItems.map((item, index) => (
              <div key={index}>
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
                      src={item.image}
                      alt={item.product_name}
                      style={{
                        maxWidth: "100%",
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
                      flexDirection: "column",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <Typography variant="h6">{item.product_name}</Typography>
                    <Typography variant="body1">
                      Quantity: {item.quantity}
                    </Typography>
                    <Typography variant="h6">
                      $ {item.price_per_unit}
                    </Typography>
                    <div>
                      <IconButton
                        color="secondary"
                        onClick={() =>
                          updateQuantity(item.product_id, item.quantity - 1)
                        }
                        disabled={item.quantity <= 1}
                      >
                        -
                      </IconButton>
                      <IconButton
                        color="primary"
                        onClick={() =>
                          updateQuantity(item.product_id, item.quantity + 1)
                        }
                      >
                        +
                      </IconButton>
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
                      onClick={() => removeItem(item.product_id)}
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
                <Typography variant="h6">
                  Total Price: $ {formattedTotal}
                </Typography>
                <Button
                  component={Link}
                  to="/"
                  variant="outlined"
                  color="primary"
                >
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
        </>
      )}
    </>
  );
};

export default Cart;
