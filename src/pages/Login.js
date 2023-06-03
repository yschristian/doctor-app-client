import React from "react";
import "../styles/RegiserStyles.css";
import { Form, Input, message } from "antd";
import { useDispatch } from "react-redux";
import { showLoading, hideLoading } from "../redux/features/alertSlice";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import Topbar from "../components/Topbar";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  //form handler
  const onfinishHandler = async (values) => {
    try {
      dispatch(showLoading());
      const res = await axios.post("/api/v1/user/login", values);
      window.location.reload();
      dispatch(hideLoading());
      if (res.data.success) {
        localStorage.setItem("token", res.data.token);
        message.success("Login Successfully");
        navigate("/dashboard");
      } else {
        message.error(res.data.message);
      }
    } catch (error) {
      dispatch(hideLoading());
      console.log(error);
      message.error("something went wrong");
    }
  };
  return (
    <>
      <Topbar />
      <Navbar />
      <div className="form-container ">
        <Form
          layout="vertical"
          onFinish={onfinishHandler}
          className="col-md-4 offset-md-5 col-xs-12 bg-light mt-4 pt-4 mb-4 register-form"
        >
          <h3 className="text-center fs-1 fw-bold">Login </h3>

          <Form.Item label="Email" name="email">
            <Input type="email" className="register-input" required />
          </Form.Item>
          <Form.Item label="Password" name="password">
            <Input type="password" className="register-input" required />
          </Form.Item>
          <Link to="/register" className="m-2">
            Not a user Register here
          </Link>
          <button className="btn btn-primary" type="submit">
            Login
          </button>
        </Form>
      </div>
      <Footer />
    </>
  );
};

export default Login;
