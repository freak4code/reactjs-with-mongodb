import React from "react";
import { Spinner } from "react-bootstrap";
import Service from "../../Components/Service/Service";
import useService from "../../Hooks/useService";
import "./Services.css";

const Services = () => {
  const [services, setServices] = useService();

  // render html
  return (
    <div>
      <h3 className="text-center font-black service-title text-success mt-3">
        Services
      </h3>
      <div className="service-container">
        {services.length === 0 ? (
        <div className="spinner-arena">
          <div className="spinnner-position">
            <Spinner animation="grow" variant="waring" />
          </div>
        </div>
      ) : services.map((service) => (
          <Service key={service._id} service={service}></Service>
        ))}
      </div>
    </div>
  );
};

export default Services;
