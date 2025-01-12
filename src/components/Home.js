import { useState } from "react";
import axios from "axios";
const Home = ({ product, setProduct }) => {
  const onChangeHandler = (e) => {
    setProduct((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const submitHandler = async () => {
    try {
      const res = await axios.post("http://localhost:8000/add-items", product);
      if (res?.data?.success === 1) {
        console.log(res?.data?.message);
      }
    } catch (err) {
      console.log(err);
    }
  };
  const editHandler = async () => {
    try {
      const res = await axios.put("http://localhost:8000/update-item", product);
      if (res?.data?.success === 1) {
        console.log("Edit product successfully");
      }
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <>
      <input
        type="text"
        placeholder="product Title"
        value={product.title}
        onChange={onChangeHandler}
        name={"title"}
      />
      <br />
      <input
        type="text"
        placeholder="product Price"
        value={product.price}
        onChange={onChangeHandler}
        name={"price"}
      />
      <br />
      <input
        type="text"
        placeholder="ImageURL"
        value={product.imageUrl}
        onChange={onChangeHandler}
        name={"imageUrl"}
      />
      <br />
      <input
        type="text"
        placeholder="description"
        value={product.description}
        onChange={onChangeHandler}
        name={"description"}
      />
      <button onClick={submitHandler}>Submit product</button>
      <button onClick={editHandler}>Edit product</button>
    </>
  );
};
export default Home;
