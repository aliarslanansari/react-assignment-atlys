import MainLogo from "@/assets/svg-components/MainLogo";
import RegisterFormCard from "@/components/RegisterFormCard";

const LoginPage = () => {
  return (
    <div className="flex h-screen min-h-[600px] flex-col items-center justify-center p-10">
      <MainLogo className="mb-12" />
      <RegisterFormCard />
    </div>
  );
};

export default LoginPage;
