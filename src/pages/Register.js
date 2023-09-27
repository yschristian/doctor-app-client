import React from "react";
import "../styles/RegiserStyles.css";
import { Form, Input, message } from "antd";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { showLoading, hideLoading } from "../redux/features/alertSlice";
import Topbar from "../components/Topbar";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Register = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  //form handler
  const onfinishHandler = async (values) => {
    console.log(values)
    try {
      dispatch(showLoading());
      const res = await axios.post("/api/v1/user/register", values);
      dispatch(hideLoading());
      if (res.data.success) {
        message.success("Register Successfully!");
        navigate("/login");
      } else {
        message.error(res.data.message);
      }
    } catch (error) {
      dispatch(hideLoading());
      console.log(error);
      message.error("Something Went Wrong");
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
          className=" col-md-4 offset-md-5 col-xs-12 bg-light mt-4 pt-4 mb-4 register-form"
        >
          <h3 className="text-center fs-1 fw-bold">Register</h3>
          <Form.Item label="user name" name="name">
            <Input type="text" className="register-input" required />
          </Form.Item>
          <Form.Item label="Email" name="email">
            <Input type="email" className="register-input" required />
          </Form.Item>
          <Form.Item label="Password" name="password">
            <Input.Password className="register-input" required />
          </Form.Item>
          <Link to="/login" className="m-2">
            Already user login here
          </Link>
          <button className="btn btn-primary" type="submit">
            Register
          </button>
        </Form>
      </div>
      <Footer />
    </>
  );
};

export default Register;
