import axios from "axios";

export function getProduct(id: string) {
  const token = localStorage.getItem("access_token");
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  return axios.get(`${process.env.REACT_APP_API_URL}product/${id}`, config);
}
