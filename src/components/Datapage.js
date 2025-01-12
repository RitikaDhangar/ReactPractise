import axios from "axios";
import { useEffect, useState } from "react";

const Datapage = ({ setProductObj }) => {
  const [product, setProduct] = useState([]);
  const allProductsHandler = async () => {
    try {
      const res = await axios.get("http://localhost:8000/all-items");
      if (res?.data?.success === 1) {
        setProduct(res?.data?.data);
      }
    } catch (err) {
      console.log(err);
    }
  };
  const editHandler = (id) => {
    const findItem = product.find((item) => item.id === id);
    setProductObj({
      title: findItem.title,
      price: findItem.price,
      imageUrl: findItem.imageUrl,
      description: findItem.description,
      id: findItem.id,
    });
  };
  const deleteHandler = async (id) => {
    try {
      const res = await axios.delete(`http://localhost:8000/delete-item/${id}`);
      if (res?.data?.success === 1) {
        console.log("Item deleted successfully");
      }
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    console.log(1);
    allProductsHandler();
  }, []);
  return (
    <>
      <p>All Products</p>
      {product.map((item) => (
        <div key={item?.id} style={{ display: "flex" }}>
          <p style={{ marginRight: "12px" }}>{item?.title}</p>
          <p style={{ marginRight: "12px" }}>{item?.price}</p>
          <p style={{ marginRight: "12px" }}>{item?.imageUrl}</p>
          <p style={{ marginRight: "12px" }}>{item?.description}</p>
          <button
            style={{ height: "36px", width: "150px", marginTop: "10px" }}
            onClick={() => editHandler(item.id)}
          >
            Edit
          </button>
          <button
            style={{ height: "36px", width: "150px", marginTop: "10px" }}
            onClick={() => deleteHandler(item.id)}
          >
            Delete
          </button>
        </div>
      ))}
    </>
  );
};
export default Datapage;
