import * as Yup from "yup";

export const userSchema = Yup.object().shape({
  firstName: Yup.string().required("First name is mandatory"),
  lastName: Yup.string(),
  email: Yup.string()
    .required("Email is mandatory")
    .email("Invalid Email Address"),
  password: Yup.string().required("No password provided."),
});
