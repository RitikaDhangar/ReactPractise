import "./App.css";
import { useState } from "react";
import MobileStore from "./components/MobileStore";
import ShowMobiles from "./components/ShowMobiles";

function App() {
  const [mobileItem, setMobileItem] = useState({
    id: null,
    title: "",
    features: "",
    price: "",
  });

  return (
    <>
      <MobileStore mobileItem={mobileItem} setMobileItem={setMobileItem} />
      <ShowMobiles setMobileItem={setMobileItem} />
    </>
  );
}

export default App;
