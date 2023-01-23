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

export function registerUser(data: {
  name: string;
  email: string;
  password: string;
  password_confirmation: string;
}) {
  return axios.post("https://todo-api-18-140-52-65.rakamin.com/signup", {
    name: data.name,
    email: data.email,
    password: data.password,
    password_confirmation: data.password_confirmation,
  });
}
