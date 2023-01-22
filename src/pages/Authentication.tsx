import React, { useState, useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import { useNavigate } from "react-router-dom";
import {
  login,
  register,
  selectAuth,
  closeErrorModal,
} from "../slices/authSlices";

import Modal from "../components/Modal";

const Authentication: React.FC = () => {
  const [email, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [registEmail, setRegistEmail] = useState("");
  const [registPassword, setRegistPassword] = useState("");
  const [name, setName] = useState("");
  const [currentLayout, setCurrentLayout] = useState("login");
  const [isOpen, setIsOpen] = useState(false);
  const [errorType, setErrorType] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const dispatch = useAppDispatch();
  const auth = useAppSelector(selectAuth);
  const navigate = useNavigate();

  console.log(auth);

  useEffect(() => {
    if (auth.error !== "") {
      setErrorType("Error Login");
      setErrorMessage(auth.error);
      setIsOpen(true);
    }
    if (auth.isLogged === true) {
      navigate("/");
    }
  }, [auth.error, auth.isLogged, navigate]);

  const handleUsername = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(e.target.value);
  };

  const handlePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const handleRegistUsername = (e: React.ChangeEvent<HTMLInputElement>) => {
    setRegistEmail(e.target.value);
  };

  const handleRegistPassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    setRegistPassword(e.target.value);
  };

  const handleName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };

  const handleLogin = () => {
    if (email === "" || password === "") {
      setErrorType("Error Login");
      setErrorMessage("Please fill all the field");
      setIsOpen(true);
    }
    dispatch(login({ email, password }));
  };

  const handleCloseModal = (status: boolean) => {
    setIsOpen(status);
    dispatch(closeErrorModal());
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
            value={email}
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
            placeholder="Name"
            value={name}
            onChange={handleName}
            className="w-full border-2 border-[#E0E0E0] focus:outline-primary focus:caret-primary active:outline-borderPrimary rounded-lg px-4 py-2 mt-2 text-xs leading-5 opacity-50"
          />
          <input
            type="text"
            placeholder="Username"
            value={registEmail}
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
            onClick={() => {}}
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
        errorType={errorType}
        message={errorMessage}
      />
    </div>
  );
};

export default Authentication;
