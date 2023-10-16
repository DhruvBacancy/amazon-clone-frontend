import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Typography, Paper, Button } from "@mui/material";
import axios from "axios";
import Rating from "@mui/material/Rating";
import "../../align.css";

const ProductDetail = () => {
  const params = useParams();
  const productId = params.id;
  const [data, setData] = useState({});
  const navigate = useNavigate();
  useEffect(() => {
    axios
      .get(`http://localhost:3000/products/${productId}`)
      .then((response) => {
        setData(response.data);
      });
  }, []);
  return (
    <div>
      <div style={{ padding: "20px" }}>
        <Typography variant="h4" gutterBottom>
          {data.name}
        </Typography>
        <img src={data.image} alt="Product" style={{ maxWidth: "100%" }} />
        <div>
          <Rating name="read-only" value={+data.ratings} readOnly />
        </div>
        <Paper elevation={3} style={{ padding: "20px", marginTop: "20px" }}>
          <Typography variant="h6" gutterBottom>
            {data.description}
          </Typography>
          <Typography variant="body1">{data.description}</Typography>
          <Typography variant="h6" gutterBottom style={{ marginTop: "20px" }}>
            ${data.price}
          </Typography>
          <Button variant="contained" color="primary">
            Add to Cart
          </Button>
          <div className="button-parent">
            <div className="align-right">
              <Button
                onClick={() => {
                  navigate(-1);
                }}
                size="medium"
                variant="contained"
              >
                Back
              </Button>
            </div>
          </div>
        </Paper>
      </div>
    </div>
  );
};

export default ProductDetail;
