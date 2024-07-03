import * as Yup from "yup";

export const loginFormInitialValues = {
  emailOrUsername: "",
  password: "",
};

export const loginSchema = Yup.object({
  emailOrUsername: Yup.string().required("Required"),
  password: Yup.string().required("Required"),
});
