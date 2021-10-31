import { useEffect, useState } from "react";


// For  AdviceHub Page
const useAdviceHub  = () => {
  const [adviceHub, setadviceHub] = useState([]);
  useEffect(() => {
    fetch("./advices.json")
      .then((res) => res.json())
      .then((data) => setadviceHub(data));
  }, []);

  return [adviceHub, setadviceHub];
};

export default useAdviceHub;