import "./App.css";
import Home from "./components/Home";
import Datapage from "./components/Datapage";
import { useState } from "react";

function App() {
  const [product, setProduct] = useState({
    title: "",
    price: "",
    imageUrl: "",
    description: "",
    id: "",
  });
  return (
    <>
      <Home product={product} setProduct={setProduct} />
      <Datapage setProductObj={setProduct} />
    </>
  );
}

export default App;
