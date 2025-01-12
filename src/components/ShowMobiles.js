import axios from "axios";
import { useEffect, useState } from "react";

const ShowMobiles = ({ setMobileItem }) => {
  const [allMobiles, setAllMobiles] = useState([]);
  const fetchAllMobileHandler = async () => {
    try {
      const res = await axios.get("http://localhost:8000/fetchallMobiles");
      if (res.data.success === 1) {
        setAllMobiles(res.data.data);
      }
    } catch (err) {
      console.log(err);
    }
  };
  const editMobileHandler = (id) => {
    const findItem = allMobiles.find((item) => item.id === id);
    setMobileItem(findItem);
  };
  const deleteMobileHandler = async (id) => {
    console.log(id);

    try {
      const res = await axios.delete(
        `http://localhost:8000/deleteMobile/${id}`
      );
      if (res.data.success === 1) {
        console.log("delete mobile successfully");
      }
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    fetchAllMobileHandler();
  }, []);
  return (
    <>
      <h3>All Mobiles</h3>
      {allMobiles.map((item) => (
        <div key={item.id} style={{ display: "flex" }}>
          <p style={{ marginRight: "12px" }}>{item.title}</p>
          <p style={{ marginRight: "12px" }}>{item.price}</p>
          <p style={{ marginRight: "12px" }}>{item.features}</p>
          <button
            style={{ height: "36px", width: "150px", marginTop: "10px" }}
            onClick={() => editMobileHandler(item.id)}
          >
            Edit
          </button>
          <button
            style={{ height: "36px", width: "150px", marginTop: "10px" }}
            onClick={() => deleteMobileHandler(item.id)}
          >
            Delete
          </button>
        </div>
      ))}
    </>
  );
};
export default ShowMobiles;
