import env from "@/env";
import useAuth from "@/hooks/useAuth";
import { useFormik } from "formik";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "sonner";
import Button from "../ui/Button";
import Textfield from "../ui/Textfield";
import { loginFormInitialValues, loginSchema } from "./helper";

const LoginFormCard = () => {
  const navigate = useNavigate();
  const { login } = useAuth();

  const formik = useFormik({
    validationSchema: loginSchema,
    initialValues: loginFormInitialValues,
    onSubmit: (values) => {
      const { emailOrUsername, password } = values;
      if (emailOrUsername === env.REACT_LOGIN_USERNAME && password === env.REACT_LOGIN_PASSWORD) {
        login({ usernameOrEmail: emailOrUsername });
        navigate("/feed");
      } else {
        toast.error("There was a problem logging in. Check your credentials or create an account.");
      }
    },
  });

  return (
    <div className="w-full max-w-[464px] rounded-lg bg-gradient-2 p-0.5">
      <form
        onSubmit={formik.handleSubmit}
        className="flex w-full flex-col rounded-lg bg-gradient-1 px-5 py-9"
      >
        <div className="flex flex-col items-center">
          <span className="mb-2 text-sm font-medium -tracking-tight text-white-100">
            WELCOME BACK
          </span>
          <span className="mb-11 font-semibold text-white">Log into your account</span>
        </div>
        <Textfield
          onChange={formik.handleChange}
          type="text"
          value={formik.values.emailOrUsername}
          name="emailOrUsername"
          label="Email or Username"
          placeholder="Enter your email or username"
          error={formik.touched.emailOrUsername ? formik.errors.emailOrUsername : ""}
        />
        <Textfield
          onChange={formik.handleChange}
          type="password"
          value={formik.values.password}
          name="password"
          className="mt-4"
          label="Password"
          placeholder="Enter your password"
          rightLabel={<Link to={"/forgot-password"}>Forgot password?</Link>}
          error={formik.touched.password ? formik.errors.password : ""}
        />
        <Button type="submit" className="mt-5" label="Login now" />
        <div className="mt-3">
          <span className="text-sm font-medium leading-none text-white-150">
            Not registered yet?{" "}
            <Link to={"/register"} className="text-white-200">
              Register →
            </Link>
          </span>
        </div>
      </form>
    </div>
  );
};

export default LoginFormCard;
