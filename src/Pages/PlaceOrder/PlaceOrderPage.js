import axios from "axios";
import React, { useState } from "react";
import { Button, Card, FloatingLabel, Form, Modal, Spinner } from "react-bootstrap";
import { useParams } from "react-router";
import Service from "../../Components/Service/Service";
import useAuth from "../../Hooks/useAuth";
import useServiceDetail from "../../Hooks/useServiceDetail";
import "./PlaceOrderPage.css";

const PlaceOrderPage = () => {
  // using auth c
  const { user } = useAuth();
  const { id } = useParams();
  const service = useServiceDetail(id);
  // for showing modal
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [dAddress, setdAddress] = useState("");

  
  const handleDeliveryAddress = (e) => {
    console.log(e.target.value);
    setdAddress(e.target.value);
  };

  const placeOrder = () => {
    const order = {
      name: user.displayName,
      email: user.email,
      address: dAddress,
      service: service,
      order_status: 0,
    };
    
    axios.post(`${process.env.REACT_APP_BASE_URL}/orders/add`, order)
            .then(res => {
                if (res.data.insertedId) {
                  handleShow();
                }
            })
   
  };

  return (
    <div>
      {service.title === "loading" ? (
        <div className="spinner-arena">
          <div className="spinnner-position">
            <Spinner animation="grow" variant="waring" />
          </div>
        </div>
      ) : (<Card className="m-5" style={{ width: "50%" }}>
      <Card.Img
        variant="top"
        src={service.image}
        width="1000px"
        height="200px"
      />
      <Card.Body>
        <Card.Title>{service.title}</Card.Title>
        <Card.Text> {service.subtitle}</Card.Text>
        <Card.Text> {service.cost}</Card.Text>
        <Card.Text> {service.delivery_time}</Card.Text>
      </Card.Body>
    </Card>)}

      
      <Form className="dc-form">
        <Form.Group className="mb-3">
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Name"
            value={user.displayName}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Email" value={user.email} />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Delivery address</Form.Label>
          <Form.Control
            type="text"
            placeholder="Delivery Address"
            onChange={handleDeliveryAddress}
          />
        </Form.Group>

        <Button variant="primary" type="button" onClick={placeOrder}>
          Place Order
        </Button>
      </Form>

      {/* Modal */}

      <Modal backdrop="static" show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Submitted</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {user.displayName}, order placed successfully.
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={handleClose}>
            Thank you !
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default PlaceOrderPage;
