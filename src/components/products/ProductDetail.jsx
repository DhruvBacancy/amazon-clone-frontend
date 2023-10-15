import React from "react";
import { useParams } from "react-router-dom";
import { Typography, Paper, Button } from "@mui/material";

const ProductDetail = () => {
  const params = useParams();
  const productId = params.id;
  return (
    <div>
      <div style={{ padding: "20px" }}>
        <Typography variant="h4" gutterBottom>
          Product Name
        </Typography>
        <img
          src="https://i.dummyjson.com/data/products/1/thumbnail.jpg"
          alt="Product"
          style={{ maxWidth: "100%" }}
        />
        <Paper elevation={3} style={{ padding: "20px", marginTop: "20px" }}>
          <Typography variant="h6" gutterBottom>
            Description
          </Typography>
          <Typography variant="body1">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
            pellentesque dignissim vehicula. Sed in feugiat libero.
          </Typography>
          <Typography variant="h6" gutterBottom style={{ marginTop: "20px" }}>
            Price: $99.99
          </Typography>
          <Button variant="contained" color="primary">
            Add to Cart
          </Button>
        </Paper>
      </div>
    </div>
  );
};

export default ProductDetail;
