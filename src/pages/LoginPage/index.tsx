import MainLogo from "@/assets/svg-components/MainLogo";
import Button from "@/components/ui/Button";
import Textfield from "@/components/ui/Textfield";
import { Link } from "react-router-dom";

const LoginPage = () => {
  const onLogin = () => {};

  return (
    <div className="flex h-screen min-h-[600px] flex-col items-center justify-center p-10">
      <MainLogo className="mb-12" />
      <div className="bg-gradient-2 w-full max-w-[464px] rounded-lg p-0.5">
        <div className="flex w-full flex-col rounded-lg bg-gradient-1 px-5 py-9">
          <div className="flex flex-col items-center">
            <span className="mb-2 text-sm font-medium -tracking-tight text-white-100">
              WELCOME BACK
            </span>
            <span className="mb-11 font-semibold text-white">Log into your account</span>
          </div>
          <Textfield label="Email or Username" placeholder="Enter your email or username" />
          <Textfield
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
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
