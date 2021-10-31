import React from "react";
import Service from "../../../Components/Service/Service";
import useService from "../../../Hooks/useService";
import Banner from "../Banner/Banner";
import HomeInfo from "../HomeInfo/HomeInfo";
import Subscribe from "../Subscribe/Subscribe";

const HomePage = () => {
  const [services, setServices] = useService();

  // render html
  return (
    <div>
      <Banner></Banner>
      <HomeInfo></HomeInfo>
      <div>
        <h1 className="text-center font-black text-success service-title">
          Services
        </h1>
        <div className="service-container">
          {services.slice(0, 5).map((service) => (
            <Service key={service._id} service={service}></Service>
          ))}
        </div>
      </div>
      <Subscribe></Subscribe>
    </div>
  );
};

export default HomePage;
