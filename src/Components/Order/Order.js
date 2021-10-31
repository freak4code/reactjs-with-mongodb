import React from "react";
import { Card } from "react-bootstrap";

const Order = ({ order, handleDeleteOrder, handleUpdateOrderStatus }) => {
  // destructuring object
  const { _id, name, email, address, service, order_status } = order;

  // render html
  return (
    <Card style={{ width: "100%" }}>
      {order_status === 0 ? (
        <Card.Header className="text-danger font-weight-bold">
          <h1>Pending</h1>
        </Card.Header>
      ) : (
        <Card.Header className="text-success font-weight-bold">
          <h1>Approved</h1>
        </Card.Header>
      )}

      <Card.Img
        variant="top"
        src={service?.image}
        width="170px"
        height="330px"
      />
      <Card.Body>
        <Card.Title>Service Name: {service?.title}</Card.Title>
        <Card.Text>User Name: {name}</Card.Text>
        <Card.Text>User Email: {email}</Card.Text>
        <Card.Text>Service Cost: {service?.cost}</Card.Text>
        <Card.Text>Service Delivery Time: {service?.delivery_time}</Card.Text>
        <Card.Text>Service Delivery Address: {address}</Card.Text>

        {order_status === 0 ? (
          <button
            className="btn btn-warning m-3 "
            onClick={() => handleUpdateOrderStatus(_id, order)}
          >
            Approved Order
          </button>
        ) : (
          <div></div>
        )}
        <button
          className="btn btn-danger m-3"
          onClick={() => handleDeleteOrder(_id)}
        >
          Delete Order
        </button>
      </Card.Body>
    </Card>
  );
};

export default Order;
