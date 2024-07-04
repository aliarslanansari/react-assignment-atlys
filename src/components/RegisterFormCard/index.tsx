import { useAppDispatch, useAppSelector } from "@/hooks/redux";
import useAuth from "@/hooks/useAuth";
import { addUser, usersSelector } from "@/redux/slices/usersSlice";
import { store } from "@/redux/store";
import { capitalize, findUser, findUserWithPassword } from "@/utils";
import { useFormik } from "formik";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
import Button from "../ui/Button";
import Textfield from "../ui/Textfield";
import { registerFormInitialValues, registerSchema } from "./helper";

interface RegisterFormCardProps {
  isOpenAsModal?: boolean;
  onSuccess?(): void;
  onLoginClick?(): void;
}

const RegisterFormCard = ({
  isOpenAsModal = false,
  onSuccess,
  onLoginClick,
}: RegisterFormCardProps) => {
  const navigate = useNavigate();
  const { login } = useAuth();
  const dispatch = useAppDispatch();
  const { users } = useAppSelector(usersSelector);

  const formik = useFormik({
    validationSchema: registerSchema,
    initialValues: registerFormInitialValues,
    onSubmit: (values) => {
      const { email, username, password } = values;
      const existingUser = findUser(users, email);
      if (existingUser?.id) {
        toast.error("User with same email or username already exist.", { duration: 4000 });
      } else {
        dispatch(
          addUser({
            email,
            username,
            password,
            id: 0,
            name: capitalize(username),
            profile_picture: "/user-images/user-fallback.png",
            createdAt: new Date().toISOString(),
          }),
        );
        const users = store.getState().users.users;
        const user = findUserWithPassword(users, email, password);
        if (user) {
          login(user);
          if (onSuccess) onSuccess();
        }
        if (!isOpenAsModal) navigate("/feed");
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
          <span className="mb-2 text-sm font-medium -tracking-tight text-white-100">SIGN UP </span>
          <span className="mb-11 font-semibold text-white">Create an account to continue</span>
        </div>
        <Textfield
          onChange={formik.handleChange}
          type="text"
          value={formik.values.email}
          name="email"
          label="Email"
          placeholder="Enter your email"
          error={formik.touched.email ? formik.errors.email : ""}
        />
        <Textfield
          onChange={formik.handleChange}
          type="text"
          className="mt-4"
          value={formik.values.username}
          name="username"
          label="Username"
          placeholder="Choose a preferred username"
          error={formik.touched.username ? formik.errors.username : ""}
        />
        <Textfield
          onChange={formik.handleChange}
          type="password"
          value={formik.values.password}
          name="password"
          className="mt-4"
          label="Password"
          placeholder="Choose a strong password"
          error={formik.touched.password ? formik.errors.password : ""}
        />
        <Button type="submit" className="mt-5" label="Continue" />
        <div className="mt-3">
          <span className="text-sm font-medium leading-none text-white-150">
            Already have an account?{" "}
            <button
              type="button"
              onClick={isOpenAsModal ? onLoginClick : () => navigate("/login")}
              className="text-sm font-medium leading-none text-white-200"
            >
              Login →
            </button>
          </span>
        </div>
      </form>
    </div>
  );
};

export default RegisterFormCard;
