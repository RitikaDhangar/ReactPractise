import { useState } from "react";
const Login = () => {
  const [val, setVal] = useState("");
  const loginUserHandler = () => {
    localStorage.setItem("token", val);
  };
  return (
    <>
      <input type="text" value={val} onChange={(e) => setVal(e.target.value)} />
      <button onClick={loginUserHandler}>Login user</button>
    </>
  );
};
export default Login;
