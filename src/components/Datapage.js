import axios from "axios";
import { useEffect } from "react";

const Datapage = () => {
    const allProductsHandler = async () => {
        try {
            const res = await axios.get('http://localhost:8000/all-items');
            console.log({res});
        } catch (err) {
            console.log(err); 
        }
    }
    useEffect(() => {
        allProductsHandler();
    },[])
    return (
        <>
            <p>All Products</p>
        </>
    )
}
export default Datapage;