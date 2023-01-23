import React, { useState, useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import { useNavigate } from "react-router-dom";
import { login, register, selectAuth, closeModal } from "../slices/authSlices";

import Modal from "../components/Modal";

const Authentication: React.FC = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [registPassword, setRegistPassword] = useState("");
  const [registUsername, setRegistUsername] = useState("");
  const [currentLayout, setCurrentLayout] = useState("login");
  const [isOpen, setIsOpen] = useState(false);
  const [messageType, setMessageType] = useState("");
  const [message, setMessage] = useState("");

  const dispatch = useAppDispatch();
  const auth = useAppSelector(selectAuth);
  const navigate = useNavigate();

  useEffect(() => {
    if (auth.error !== "") {
      setMessageType("Error");
      setMessage(auth.error);
      setIsOpen(true);
    }
    if (auth.success !== "") {
      setMessageType("Success");
      setMessage(auth.success);
      setIsOpen(true);
      setRegistUsername("");
      setRegistPassword("");
      setCurrentLayout("login");
    }
    if (auth.isLogged === true) {
      navigate("/");
    }
  }, [auth.error, auth.isLogged, auth.success, navigate]);

  const handleUsername = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(e.target.value);
  };

  const handlePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const handleRegistUsername = (e: React.ChangeEvent<HTMLInputElement>) => {
    setRegistUsername(e.target.value);
  };

  const handleRegistPassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    setRegistPassword(e.target.value);
  };

  const handleLogin = () => {
    if (currentLayout === "login") {
      if (username === "" || password === "") {
        setMessageType("Error Login");
        setMessage("Please fill all the field");
        setIsOpen(true);
      }
      dispatch(login({ username, password }));
    }
  };

  const handleRegister = () => {
    if (currentLayout === "register") {
      if (registUsername === "" || registPassword === "") {
        setMessageType("Error Register");
        setMessage("Please fill all the field");
        setIsOpen(true);
      }
      dispatch(
        register({ username: registUsername, password: registPassword })
      );
    }
  };

  const handleCloseModal = (status: boolean) => {
    setIsOpen(status);
    dispatch(closeModal());
  };

  return (
    <div className="flex justify-center items-center h-screen w-screen">
      <div
        className={`overflow-hidden transition-all duration-300 ${
          currentLayout === "login"
            ? "translate-x-0 max-w-screen"
            : "w-0 translate-x-[-100%]"
        }`}
      >
        <div className="w-full px-4 mt-4 flex flex-col items-center justify-center space-y-3">
          <p className="font-nunito text-primary">Login Ozip Mini Project</p>
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={handleUsername}
            className="w-full border-2 border-[#E0E0E0] focus:outline-primary focus:caret-primary active:outline-borderPrimary rounded-lg px-4 py-2 mt-2 text-xs leading-5 opacity-50"
          />
          <input
            type="password"
            placeholder="password"
            value={password}
            onChange={handlePassword}
            className="w-full border-2 border-[#E0E0E0] focus:outline-primary focus:caret-primary active:outline-borderPrimary rounded-lg px-4 py-2 mt-2 text-xs leading-5 opacity-50"
          />
          <button
            onClick={handleLogin}
            className="flex flex-row justify-center ml-[5px] rounded-md shadow-sm border border-borderPrimary bg-primary px-4 py-2 text-sm font-medium text-white hover:bg-borderPrimary focus:outline-none focus-visible:ring-2 focus-visible:ring-borderPrimary focus-visible:ring-offset-2"
          >
            Login
          </button>

          <button
            onClick={() => setCurrentLayout("register")}
            className="flex flex-row justify-center ml-[5px] rounded-md shadow-sm border border-borderPrimary bg-primary px-4 py-2 text-sm font-medium text-white hover:bg-borderPrimary focus:outline-none focus-visible:ring-2 focus-visible:ring-borderPrimary focus-visible:ring-offset-2"
          >
            Register
          </button>
        </div>
      </div>

      <div
        className={`overflow-hidden transition-all duration-300 ${
          currentLayout === "register"
            ? "translate-x-0 max-w-screen"
            : "w-0 translate-x-[-100%]"
        }`}
      >
        <div className="w-full px-4 mt-4 flex flex-col items-center justify-center space-y-3">
          <p className="font-nunito text-primary">Register Ozip Mini Project</p>
          <input
            type="text"
            placeholder="Username"
            value={registUsername}
            onChange={handleRegistUsername}
            className="w-full border-2 border-[#E0E0E0] focus:outline-primary focus:caret-primary active:outline-borderPrimary rounded-lg px-4 py-2 mt-2 text-xs leading-5 opacity-50"
          />
          <input
            type="password"
            placeholder="Password"
            value={registPassword}
            onChange={handleRegistPassword}
            className="w-full border-2 border-[#E0E0E0] focus:outline-primary focus:caret-primary active:outline-borderPrimary rounded-lg px-4 py-2 mt-2 text-xs leading-5 opacity-50"
          />

          <button
            onClick={() => {
              handleRegister();
            }}
            className="flex flex-row justify-center ml-[5px] rounded-md shadow-sm border border-borderPrimary bg-primary px-4 py-2 text-sm font-medium text-white hover:bg-borderPrimary focus:outline-none focus-visible:ring-2 focus-visible:ring-borderPrimary focus-visible:ring-offset-2"
          >
            Register
          </button>

          <button
            onClick={() => setCurrentLayout("login")}
            className="flex flex-row justify-center ml-[5px] rounded-md shadow-sm border border-borderPrimary bg-primary px-4 py-2 text-sm font-medium text-white hover:bg-borderPrimary focus:outline-none focus-visible:ring-2 focus-visible:ring-borderPrimary focus-visible:ring-offset-2"
          >
            <span>{"<"}</span>
          </button>
        </div>
      </div>
      <Modal
        isOpen={isOpen}
        setIsOpen={() => handleCloseModal(false)}
        errorType={messageType}
        message={message}
      />
    </div>
  );
};

export default Authentication;
