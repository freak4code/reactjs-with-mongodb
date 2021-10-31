import React from "react";
import { Spinner } from "react-bootstrap";
import Order from "../../Components/Order/Order";
import useAuth from "../../Hooks/useAuth";
import useOrder from "../../Hooks/useOrder";

const UserOrdersPage = () => {
  const { user } = useAuth();
  const [orders, setOrders] = useOrder(user.email);
  console.log(user.email);
  const handleDeleteOrder = (id) => {
    const proceed = window.confirm(
      "Are you sure, you want to delete this order ?"
    );
    if (proceed) {
      fetch(`${process.env.REACT_APP_BASE_URL}/orders/${id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount > 0) {
            alert("Order deleted successfully");
            const remainingOrders = orders.filter((order) => order._id !== id);
            setOrders(remainingOrders);
          }
        });
    }
  };

  const handleUpdateOrderStatus = (id, order) => {
    let newOrder = order;
    newOrder.order_status = 1;
    const proceed = window.confirm(
      "Are you sure, you want to approve this order ?"
    );
    if (proceed) {
      fetch(`${process.env.REACT_APP_BASE_URL}/orders/${id}`, {
        method: "PUT",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(newOrder),
      })
        .then((res) => res.json())
        .then((data) => {
          console.log("Update", data);
          if (data.modifiedCount > 0) {
            alert("Approved Successful");
          }
        });
    }
  };

  return (
    <div>
      <h3 className="text-center font-black service-title text-success mt-3">
        My Orders
      </h3>
      <div className="service-container">
        {orders.length === 0 ? (
          <div className="spinner-arena">
            <div className="spinnner-position">
              <Spinner animation="grow" variant="waring" />
            </div>
          </div>
        ) : (
          orders.map((order) => (
            <Order
              key={order._id}
              order={order}
              handleDeleteOrder={handleDeleteOrder}
              handleUpdateOrderStatus={handleUpdateOrderStatus}
            ></Order>
          ))
        )}
      </div>
    </div>
  );
};

export default UserOrdersPage;
