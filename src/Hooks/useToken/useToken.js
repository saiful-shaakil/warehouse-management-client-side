import axios from "axios";
import { useEffect, useState } from "react";

const useToken = (user) => {
  const [tokenOfUser, setTokenOfUser] = useState("");
  useEffect(() => {
    const getToken = async () => {
      const email = user?.user?.email;
      if (email) {
        const { data } = await axios.post(
          "https://infinite-gorge-79896.herokuapp.com/login",
          {
            email,
          }
        );
        setTokenOfUser(data);
        localStorage.setItem("userToken", data);
      }
    };
    getToken();
  }, [user]);
  return [tokenOfUser];
};
export default useToken;
