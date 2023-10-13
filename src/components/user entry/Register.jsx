import React from "react";
import {
  Avatar,
  Grid,
  Paper,
  TextField,
  InputLabel,
  Typography,
} from "@mui/material";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import "../../align.css";
import { Link, useNavigate } from "react-router-dom";
import { userSchema } from "../../validations/UserSchema";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

const Register = () => {
  const intialValues = {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  };
  const navigate = useNavigate();
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

  const formOptions = { resolver: yupResolver(userSchema) };
  const { register, handleSubmit, formState } = useForm(formOptions);
  const { errors } = formState;

  const onSubmit = (data) => {
    console.log(data);
  };
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
        <form onSubmit={handleSubmit(onSubmit)}>
          <TextField
            name="firstName"
            fullWidth
            label="First Name*"
            placeholder="Enter your first name"
            variant="standard"
            {...register("firstName")}
          />
          {errors.firstName && (
            <InputLabel sx={{ color: "error.main" }}>
              {errors.firstName?.message}
            </InputLabel>
          )}
          <TextField
            name="lastName"
            fullWidth
            label="Last Name"
            placeholder="Enter your last name"
            variant="standard"
          />
          {errors.lastName && (
            <InputLabel sx={{ color: "error.main" }}>
              {errors.lastName?.message}
            </InputLabel>
          )}
          <TextField
            name="email"
            fullWidth
            label="Email*"
            placeholder="Enter your email"
            variant="standard"
            {...register("email")}
          />
            {errors.email && (
              <InputLabel sx={{ color: "error.main" }}>
                {errors.email?.message}
              </InputLabel>
            )}
          <TextField
            name="password"
            fullWidth
            label="Password*"
            placeholder="Enter your password"
            variant="standard"
            margin="dense"
            {...register("password")}
          />
          {errors.password && (
            <InputLabel sx={{ color: "error.main" }}>
              {errors.password?.message}
            </InputLabel>
          )}

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
              <Button
                type="submit"
                variant="contained"
                color="primary"
                onClick={() => {
                  navigate("/");
                }}
              >
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
