import axios from "axios";

export function loginUser({
  email,
  password,
}: {
  email: string;
  password: string;
}) {
  return axios.post("/", {
    email: email,
    password: password,
  });
}

export function registerUser(data: {
  name: string;
  email: string;
  password: string;
  password_confirmation: string;
}) {
  return axios.post("/", {
    name: data.name,
    email: data.email,
    password: data.password,
    password_confirmation: data.password_confirmation,
  });
}
