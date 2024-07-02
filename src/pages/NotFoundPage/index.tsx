import { Link } from "react-router-dom";

const NotFoundPage = () => {
  return (
    <div className="flex h-screen flex-col items-center justify-center p-10">
      <span className="text-sm font-medium leading-none text-white-150">
        Page not found!{" "}
        <Link to="/" className="text-white-200">
          Go to Home Page →
        </Link>
      </span>
    </div>
  );
};

export default NotFoundPage;
