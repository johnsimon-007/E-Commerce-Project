import "./Cart.css";
import { Link } from "react-router-dom";

function Cart({ cart, setCart }) {

    const total = cart.reduce((sum, item) => {
        return sum + item.price;
    }, 0);

    const removeItem = (indexToRemove) => {
        setCart(
            cart.filter(
                (_, index) => index !== indexToRemove
            )
        );
    };

    return (
        <>
            <h1>CART</h1>

            {cart.map((item, index) => (
                <div className="cart-item" key={index}>
                    <img
                        src={`/images/${item.image}`}
                        alt={item.name}
                    />

                    <div>
                        <h2>{item.name}</h2>
                        <p>₹{item.price}</p>

                        <button
                            onClick={() => removeItem(index)}
                            className="removeBtn"
                        >
                            🗑 REMOVE
                        </button>
                    </div>
                </div>
            ))}

            <div className="cart-footer">
                <h2>Total: ₹{total}</h2>

                <Link to="/checkout">
                    <button className="checkoutBtn">
                        Proceed To Checkout
                    </button>
                </Link>
            </div>
        </>
    )
}

export default Cart;