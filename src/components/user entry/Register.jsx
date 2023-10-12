import React from "react";
import { Avatar, Grid, Paper, TextField, Typography } from "@mui/material";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import "../../align.css";
import { Link } from "react-router-dom";

const Register = () => {
  const paperStyle = { padding: "30px 20px", width: 300, margin: "20px auto" };
  const headerStyle = { margin: 0 };
  const avatarStyle = { backgroundColor: "#1bbd7e" };
  const VisuallyHiddenInput = styled("input")({
    clip: "rect(0 0 0 0)",
    clipPath: "inset(50%)",
    height: 1,
    overflow: "hidden",
    position: "absolute",
    bottom: 0,
    left: 0,
    whiteSpace: "nowrap",
    width: 1,
  });
  return (
    <Grid>
      <Paper elevation={20} style={paperStyle}>
        <Grid align="center">
          <Avatar style={avatarStyle}>
            <AddCircleOutlineIcon />
          </Avatar>
          <h2 style={headerStyle}>Sign Up</h2>
          <Typography variant="caption" gutterBottom>
            Please fill this form to create an account !
          </Typography>
        </Grid>
        <form>
          <TextField
            fullWidth
            label="First Name"
            placeholder="Enter your first name"
            required
            variant="standard"
          />
          <TextField
            fullWidth
            label="Last Name"
            placeholder="Enter your last name"
            variant="standard"
          />
          <TextField
            fullWidth
            label="Email"
            placeholder="Enter your email"
            variant="standard"
            required
          />
          <TextField
            fullWidth
            label="Password"
            placeholder="Enter your password"
            variant="standard"
            required
          />
          <TextField
            fullWidth
            label="Confirm Password"
            placeholder="Confirm your password"
            variant="standard"
            required
          />
          <FormControlLabel
            control={<Checkbox name="checkedA" />}
            label="I accept the terms and conditions."
          />
          <div className="align-center">
            <Button
              component="label"
              variant="contained"
              startIcon={<CloudUploadIcon />}
            >
              Profile Picture (optional)
              <VisuallyHiddenInput type="file" />
            </Button>
          </div>
          <br />
          <div className="button-parent">
            <div className="align-left">
              <Button type="submit" variant="contained" color="primary">
                Sign up
              </Button>
            </div>
            <div className="align-right">
              <Button type="submit" variant="contained" color="primary">
                Back
              </Button>
            </div>
          </div>
        </form>
        <br />
        <Typography>
          Already have an account?
          <Link to="/login">Login in</Link>
        </Typography>
      </Paper>
    </Grid>
  );
};

export default Register;
