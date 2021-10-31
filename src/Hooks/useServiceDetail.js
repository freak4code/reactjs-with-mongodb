import { useEffect, useState } from "react";


// hook for single service detail
const useServiceDetail = (id) => {
  
  // set title to loading for showing spinner
  const [service, setService] = useState({title: "loading"});
  useEffect(() => {
    fetch(`${process.env.REACT_APP_BASE_URL}/services/${id}`)
      .then((res) => res.json())
      .then((data) => setService(data));
  }, [id]);

  return service;
};

export default useServiceDetail;
