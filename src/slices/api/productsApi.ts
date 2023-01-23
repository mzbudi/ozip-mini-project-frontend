import axios from "axios";

export function getProduct(id: string) {
  const token = localStorage.getItem("access_token");
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  return axios.get(`http://127.0.0.1:3001/product/${id}`, config);
}
