import * as Yup from "yup";

export const loginFormInitialValues = {
  emailOrUsername: "",
  password: "",
};

export const loginSchema = Yup.object({
  emailOrUsername: Yup.string().required("Email or username is required"),
  password: Yup.string().required("Password is required"),
});
