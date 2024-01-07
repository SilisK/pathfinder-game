import { useEffect } from "react";

function Login() {
  useEffect(() => {
    window.scroll(0, 0);
  }, []);
  
  return (
    <div className="text-white max-w-7xl m-auto flex flex-col items-center justify-center h-screen">
      <h1>Login</h1>
    </div>
  );
}

export default Login;
