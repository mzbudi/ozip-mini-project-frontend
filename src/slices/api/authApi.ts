import axios from "axios";

export function loginUser({
  username,
  password,
}: {
  username: string;
  password: string;
}) {
  return axios.post(`${process.env.REACT_APP_API_URL}auth/login`, {
    username: username,
    password: password,
  });
}

export function registerUser({
  username,
  password,
}: {
  username: string;
  password: string;
}) {
  return axios.post(`${process.env.REACT_APP_API_URL}users/signup`, {
    username: username,
    password: password,
  });
}
