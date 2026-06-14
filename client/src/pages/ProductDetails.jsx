import { useState, useEffect } from "react";
import axios from "axios"
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import "./ProductDetails.css";

function ProductDetails({ cart, setCart }) {
    const navigate = useNavigate();
    const { id } = useParams();
    const [product, setProduct] = useState(null)
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await axios.get(`https://your-app.onrender.com/api/products/${id}`);
                setProduct(response.data);
                    setLoading(false);
            }
            catch (err) {
                console.log("err fetching products", err)
                setLoading(false);
            }
        };
        fetchProducts();
    }, [id])
    if (loading) {
        return <h1>Loading...</h1>;
    }
    
     const addToCart=()=>{
        setCart([...cart,product]);
         navigate("/cart");
     };

    return (
        <div className="product-details">
            <img src={`/images/${product.image}`} alt={product.name} />
            <h1>{product.name}</h1>
            <p>₹{product.price}</p>
            <p>{product.description}</p>
            <p>{product.category}</p>
            <button onClick={addToCart} className="addbtn"> 🛒 ADD TO CART</button>
        </div>
    )
}

export default ProductDetails;