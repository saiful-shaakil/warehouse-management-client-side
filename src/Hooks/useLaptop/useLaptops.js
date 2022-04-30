import { useEffect, useState } from "react";

const useLaptops = () => {
  const [laptops, setLaptops] = useState([]);
  useEffect(() => {
    fetch("https://infinite-gorge-79896.herokuapp.com/laptopCollection")
      .then((res) => res.json())
      .then((data) => setLaptops(data));
  }, []);
  return [laptops, setLaptops];
};

export default useLaptops;
