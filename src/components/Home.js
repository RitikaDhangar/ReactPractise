import { useEffect, useState } from "react";
import axios from "axios";
const Home = () => {
  const [val, setVal] = useState("");
  const [msg, setMsg] = useState("");
  const submitHandler = async () => {
    try {
      const userName = localStorage.getItem("token");
      console.log({ msg });
      await axios.post("http://localhost:8000/Store-message", {
        msg: `${userName} : ${val}`,
      });
    } catch (err) {
      console.log(err);
    }
  };
  const showMessagesHandler = async () => {
    try {
      const data = await axios.get("http://localhost:8000/show-message");
      console.log({ data });
      if (data?.status === 200) {
        setMsg(data?.data?.data);
      }
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    showMessagesHandler();
  }, []);
  return (
    <>
      <p>{msg}</p>
      <input type="text" value={val} onChange={(e) => setVal(e.target.value)} />
      <button onClick={submitHandler}>Add Message</button>
    </>
  );
};
export default Home;
