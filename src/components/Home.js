import { useEffect, useState } from "react";
import axios from "axios";
const Home = () => {
  const [product, setProduct] = useState({ title: '', price: '', imageurl: '', description: "" });
  
  const onChangeHandler = (e) => {
    setProduct((prev)=> ({...prev, [e.target.name]:e.target.value}))
  }

  const submitHandler = async() => {
    try {
      const res = await axios.post('http://localhost:8000/add-items', product);
      if (res?.data?.success === 1) {
        console.log(res?.data?.message);
      }
    } catch (err) {
      console.log(err);
    }
  }
  return (
    <>
      <input type="text" placeholder="product Title" value={product.title} onChange={onChangeHandler} name={"title"} />
      <br/>
      <input type="text" placeholder="product Price" value={product.price} onChange={onChangeHandler} name={"price"}/>
      <br/>
      <input type="text" placeholder="ImageURL" value={product.imageurl} onChange={onChangeHandler} name={"imageurl"}/>
      <br/>
      <input type="text" placeholder="description"  value={product.description} onChange={onChangeHandler} name={"description"}/>
      <button onClick={submitHandler} >Submit product</button>
    </>
  );
};
export default Home;
