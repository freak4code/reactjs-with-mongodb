import React from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Service.css";

const Service = ({ service }) => {
  // destructuring object
  const { _id, title, subtitle, image, cost, delivery_time } = service;

  // render html
  return (
    <Card style={{ width: "100%" }}>
      <Card.Img variant="top" src={image} width="170px" height="330px" />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text> {subtitle}</Card.Text>
        <Card.Text> {cost}</Card.Text>
        <Card.Text> {delivery_time}</Card.Text>

         {/* Dynamic routing */}
        <Link to={`/place-order/${_id}`}>
          <button className="btn btn-warning">Book Now</button>
        </Link>
      </Card.Body>
    </Card>
  );
};

export default Service;
