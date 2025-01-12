import axios from "axios";

const MobileStore = ({ setMobileItem, mobileItem }) => {
  const MobileDetailHandler = (e) => {
    setMobileItem((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  };
  const createMobileHandler = async () => {
    try {
      const res = await axios.post(
        "http://localhost:8000/createnewMobile",
        mobileItem
      );
      if (res.data.success === 1) {
        console.log("New Mobile created");
      }
    } catch (err) {
      console.log(err);
    }
  };
  const editMobileHandler = async () => {
    try {
      const res = await axios.put(
        "http://localhost:8000/updateMobile",
        mobileItem
      );
      if (res.data.success === 1) {
        console.log("Mobile updated successfully");
      }
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div style={{ padding: "12px" }}>
      <input
        type="text"
        value={mobileItem.title}
        placeholder="title"
        name="title"
        onChange={MobileDetailHandler}
      />
      <br />
      <input
        type="text"
        value={mobileItem.price}
        placeholder="price"
        name="price"
        onChange={MobileDetailHandler}
      />
      <br />
      <input
        type="text"
        value={mobileItem.features}
        placeholder="features"
        name="features"
        onChange={MobileDetailHandler}
      />
      <br />
      <button style={{}} onClick={createMobileHandler}>
        Add button
      </button>
      <button style={{ marginLeft: "12px" }} onClick={editMobileHandler}>
        Edit button
      </button>
    </div>
  );
};
export default MobileStore;
