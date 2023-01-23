import axios from "axios";

export function loginUser({
  username,
  password,
}: {
  username: string;
  password: string;
}) {
  return axios.post("http://127.0.0.1:3001/auth/login", {
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
  console.log(username, password);
  return axios.post("http://127.0.0.1:3001/users/signup", {
    username: username,
    password: password,
  });
}
