import "./CheckOutPage.css";
import { useNavigate } from "react-router-dom";

function Checkout({ cart ,setCart}) {
    const navigate = useNavigate();
    const total = cart.reduce(
        (sum, item) => sum + item.price,
        0
    );

    const handleSubmit = (e) => {
    e.preventDefault();

    alert("Order Placed Successfully!");

    setTimeout(() => {
        navigate("/");
    }, 1000);

     setCart([]);
};

    return (
        <div className="checkout">

            <h1>Checkout</h1>

            <form className="checkout-form" onSubmit={handleSubmit}>

                <input type="text" placeholder="Full Name" required />

                <input type="text" placeholder="Address" required />

                <input type="tel" placeholder="Phone Number" required />

                <div className="order-summary">

                    <h2>Order Summary</h2>

                    <p>Total Items: {cart.length}</p>

                    <h3>Total: ₹{total}</h3>

                    <button  type="submit"  className="place-order-btn">
                        Place Order
                    </button>

                </div>

            </form>

        </div>
    );
}

export default Checkout;