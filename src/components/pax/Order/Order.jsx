import { fetchAllCars } from "../../FetchData";
import { useState, useEffect } from "react";
import OrderCard from "./OrderCard/OrderCard";
import { useNavigate } from "react-router";
import { fetchDiscountsFromAPI } from "../../admin/Discount/Discount";

function Order() {
    const [orderCars, setOrderCars] = useState([]);
    const [discounts, setDiscounts] = useState({
        New: 0,
        "Daily Commute": 0,
        "Law Enforcement": 0,
        Display: 0,
        Motorsport: 0,
    });
    const userAccount = localStorage.getItem("account");
    const navigate = useNavigate();

    useEffect(() => {
        fetchAllCars().then(data => {
            const orders = data.filter(car => car.incart === userAccount);
            setOrderCars(orders);
        });
        fetchDiscountsFromAPI().then(setDiscounts);
    }, [userAccount]);

    const handleCheckout = (car) => {
        // Navigate to /checkout/:id
        navigate(`/checkout/${car._id}`);
    };

    return (
        <div className="history-container">
            <h2 style={{ color: "white" }}>Your Orders</h2>
            {orderCars.length > 0 ? (
                <div className="OrderList">
                    {orderCars.map((car, idx) => {
                        const discountPercent =
                            discounts[car.status] || discounts[car.usage] || 0;
                        const discountedPrice = car.price - (car.price * discountPercent) / 100;
                        return (
                            <OrderCard
                                key={idx}
                                carname={car.carname}
                                price={discountedPrice}
                                contact={car.contact}
                                status={car.status}
                                discountPercent={discountPercent}
                                onCheckout={() => handleCheckout(car)}
                            />
                        );
                    })}
                </div>
            ) : (
                <p style={{ color: "white" }}>No cars in your order.</p>
            )}
        </div>
    );
}

export default Order;
