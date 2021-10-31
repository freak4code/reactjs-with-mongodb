import React from "react";
import { Carousel } from "react-bootstrap";

const Banner = () => {

  // render html
  return (
    <Carousel style={{ margin: "20px" }}>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://images.pexels.com/photos/6407436/pexels-photo-6407436.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>Faster Delivery</h3>
          <p>No matter what happens ! We always have backup plans</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://images.pexels.com/photos/4391470/pexels-photo-4391470.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Anywhere</h3>
          <p>No matter where are you. We have connections !</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://images.pexels.com/photos/6407585/pexels-photo-6407585.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Privacy Matters</h3>
          <p>No matter what. Always try your best to keep you secret safe !.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default Banner;
