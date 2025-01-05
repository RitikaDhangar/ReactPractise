import { useSelector } from "react-redux";

const Contact = () => {
  const incCount = useSelector((state) => state.digit.num);
  return (
    <>
      <h3>Inc Value is : {incCount}</h3>
    </>
  );
};
export default Contact;
