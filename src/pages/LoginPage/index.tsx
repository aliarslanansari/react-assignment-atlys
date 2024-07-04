import MainLogo from "@/assets/svg-components/MainLogo";
import LoginFormCard from "@/components/LoginFormCard";

const LoginPage = () => {
  return (
    <div className="mobile:p-5 flex h-screen min-h-[600px] flex-col items-center justify-center p-10">
      <MainLogo className="mb-12" />
      <LoginFormCard />
    </div>
  );
};

export default LoginPage;
