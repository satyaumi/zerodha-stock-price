import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import instance from '../../live/axios';

function Login ()  {
  const navigate = useNavigate();
  const [inputValue, setInputValue] = useState({
    email: "",
    password: "",
  });

  const { email, password } = inputValue;

  const handleOnchange = (e) => {
    const { name, value } = e.target;
    setInputValue((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleError = (err) => {
    toast.error(err, {
      position: "bottom-left",
    });
  };

  const handleSuccess = (msg) => {
    toast.success(msg, {
      position: "bottom-right",
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await instance.post("/login", 
        {... inputValue,

        },
        {withCredentials:true}
    );
      console.log("login response:",data);
      const { success, message, token } = data;
      if (success) {
        handleSuccess(message);
        setTimeout(()=>{
            navigate("/");
        },1000);
 
        if (token) {
          localStorage.setItem("jwt_token", token);
        }

        setTimeout(() => {
          navigate("/dashboard");
        }, 1500);
      } else {
        handleError(message);
      }
    } catch (error) {
      console.log("Login error:", error.response?.data || error.message);
      handleError(error.response?.data?.message || "Something went wrong");
    }

    setInputValue({
      email: "",
      password: "",
    });
  };

  return (
    <div className="signup-wrapper">
    <div className="form-container">
      <h2>Login Account</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            value={email}
            placeholder="Enter your email"
            onChange={handleOnchange}
          />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            value={password}
            placeholder="Enter your password"
            onChange={handleOnchange}
          />
        </div>
        <span><Link to={"http://localhost:3001/home"}>submit</Link></span>
        <span>
          Don’t have an account? <Link to={"/signup"}>Signup</Link>
        </span>
      </form>
      <ToastContainer />
    </div>
    </div>
  );
};

export default Login;
