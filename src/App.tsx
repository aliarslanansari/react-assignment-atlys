import Router from "@/Router/Router";
import { Toaster } from "sonner";

function App() {
  return (
    <>
      <Router />
      <Toaster position="top-center" duration={7000} />
    </>
  );
}

export default App;
