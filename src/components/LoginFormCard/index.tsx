import { Link, useNavigate } from "react-router-dom";
import Button from "../ui/Button";
import Textfield from "../ui/Textfield";

const LoginFormCard = () => {
  const navigate = useNavigate();
  const onLogin = (
    e: React.FormEvent<HTMLFormElement> | React.MouseEvent<HTMLButtonElement, MouseEvent>,
  ) => {
    e.preventDefault();
    navigate("/feed");
  };

  return (
    <div className="w-full max-w-[464px] rounded-lg bg-gradient-2 p-0.5">
      <form onSubmit={onLogin} className="flex w-full flex-col rounded-lg bg-gradient-1 px-5 py-9">
        <div className="flex flex-col items-center">
          <span className="mb-2 text-sm font-medium -tracking-tight text-white-100">
            WELCOME BACK
          </span>
          <span className="mb-11 font-semibold text-white">Log into your account</span>
        </div>
        <Textfield
          type="text"
          label="Email or Username"
          placeholder="Enter your email or username"
        />
        <Textfield
          type="password"
          className="mt-4"
          label="Password"
          placeholder="Enter your password"
          rightLabel={<Link to={"/forgot-password"}>Forgot password?</Link>}
        />
        <Button className="mt-5" label="Login now" onClick={onLogin} />
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
