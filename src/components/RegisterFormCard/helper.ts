import * as Yup from "yup";

export const registerFormInitialValues = {
  email: "",
  username: "",
  password: "",
};

export const registerSchema = Yup.object({
  email: Yup.string().email("Please enter valid email").required("Email is required"),
  username: Yup.string()
    .required("Username is required")
    .min(3, "Username must be at least 3 characters")
    .max(30, "Username must be at most 30 characters")
    .matches(
      /^[a-zA-Z0-9_.-]+$/,
      "Username can only contain letters, numbers, underscores (_), dots (.), and hyphens (-)",
    )
    .required("Username is required"),
  password: Yup.string()
    .required("Password is required")
    .min(8, "Password must be at least 8 characters")
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]+$/,
      "Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character",
    ),
});
