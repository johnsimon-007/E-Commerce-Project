import axios from "axios";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import "./Home.css";

function Home() {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [selectedCategory, setSelectedCategory] = useState("All");
    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await axios.get("https://e-commerce-project-3txv.onrender.com/api/products");
                setProducts(response.data);
                setLoading(false);
            }
            catch (err) {
                console.error("Error fetching products:", err);
                setLoading(false);
            }
        };

        fetchProducts();
    }, []);

    if (loading) {
        return <h1>Loading...</h1>;
    }

    return (
        <>
            <div className="categories">

                <button
                    className={selectedCategory === "All" ? "active" : ""}
                    onClick={() => setSelectedCategory("All")}
                >
                    All
                </button>

                <button
                    className={selectedCategory === "Shoes" ? "active" : ""}
                    onClick={() => setSelectedCategory("Shoes")}
                >
                    Shoes
                </button>

                <button
                    className={selectedCategory === "T-Shirts" ? "active" : ""}
                    onClick={() => setSelectedCategory("T-Shirts")}
                >
                    T-Shirts
                </button>

                <button
                    className={selectedCategory === "Watches" ? "active" : ""}
                    onClick={() => setSelectedCategory("Watches")}
                >
                    Watches
                </button>

                <button
                    className={selectedCategory === "Perfumes" ? "active" : ""}
                    onClick={() => setSelectedCategory("Perfumes")}
                >
                    Perfumes
                </button>

            </div>

            <div className="products-container">
                {
                    products
                        .filter(
                            (product) =>
                                selectedCategory === "All" ||
                                product.category === selectedCategory
                        )
                        .map((product) => (
                            <Link
                                key={product._id}
                                to={`/product/${product._id}`}
                                className="product-card"
                            >
                                <img
                                    src={`/images/${product.image}`}
                                    alt={product.name}
                                />

                                <h2>{product.name}</h2>
                            </Link>
                        ))
                }
            </div>
        </>
    );
}



export default Home;