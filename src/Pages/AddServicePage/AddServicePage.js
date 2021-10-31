import axios from "axios";
import React, { useState } from "react";
import { Button, Card, Form, Modal } from "react-bootstrap";

const AddServicePage = () => {
  // for showing modal
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [name, setName] = useState("");
  const [description, setdDescription] = useState("");
  const [image, setdImage] = useState("");
  const [cost, setCost] = useState("");
  const [time, setTime] = useState("");

  const handleServiceName = (e) => {
    console.log(e.target.value);
    setName(e.target.value);
  };

  const handleServiceDes = (e) => {
    console.log(e.target.value);
    setdDescription(e.target.value);
  };

  const handleServiceImage = (e) => {
    console.log(e.target.value);
    setdImage(e.target.value);
  };

  const handleServiceCost = (e) => {
    console.log(e.target.value);
    setCost(e.target.value);
  };

  const handleServiceDeliveryTime = (e) => {
    console.log(e.target.value);
    setTime(e.target.value);
  };

  const addService = () => {
    const service = {
      title: name,
      subtitle: description,
      image: image,
      cost: cost,
      delivery_time: time,
    };

    axios
      .post(`${process.env.REACT_APP_BASE_URL}/services/add`, service)
      .then((res) => {
        if (res.data.insertedId) {
          handleShow();
        }
      });
  };

  return (
    <div>
      <Form className="dc-form">
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Service Image Url</Form.Label>
          <Form.Control
            type="text"
            placeholder="Service Image Url"
            onChange={handleServiceImage}
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Service Name</Form.Label>
          <Form.Control type="text" placeholder="Service Name" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Service Description</Form.Label>
          <Form.Control type="text" placeholder="Service Description" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Service Cost</Form.Label>
          <Form.Control
            type="text"
            placeholder="Service Cost"
            onChange={handleServiceCost}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Service Delivery Time</Form.Label>
          <Form.Control
            type="text"
            placeholder="Service Delivery Time"
            onChange={handleServiceDeliveryTime}
          />
        </Form.Group>

        <Button variant="primary" type="button" onClick={addService}>
          Add Service
        </Button>
      </Form>

      {/* Modal */}

      <Modal backdrop="static" show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Submitted</Modal.Title>
        </Modal.Header>
        <Modal.Body>New service added successfully.</Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={handleClose}>
            Thank you !
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default AddServicePage;
