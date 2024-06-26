import React, { useEffect, useState } from 'react'
import Layout from '../components/Layout'
import { Col, Form, Input, Row, TimePicker, message } from "antd";
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';

const MyProfile = () => {
  const [data, setData] = useState(null)
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user } = useSelector((state) => state.user);


  const getUserInfo = async () => {
    try {
      const res = await axios.get(
        `/api/v1/user/getUser/${user._id}`,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      if (res.data.success) {
        setData(res.data.data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getUserInfo();
    //eslint-disable-next-line
  }, []);

  return (
    <Layout>
    <h1>Manage Profile</h1>
    {data && (
      <Form
        layout="vertical"
        className="m-3"
        initialValues={{
          ...data
        }}
      >
        <h4 className="">Personal Details :</h4>
        <Row gutter={20}>
          <Col xs={24} md={24} lg={8}>
            <Form.Item
              label="Email"
              name="email"  // Make sure this matches the key in initialValues
              required
              rules={[{ required: true }]}
            >
              <Input type="text" placeholder="email" />
            </Form.Item>
          </Col>
          <Col xs={24} md={24} lg={8}>
            <Form.Item
              label="Name"
              name="name"  // Make sure this matches the key in initialValues
              required
              rules={[{ required: true }]}
            >
              <Input type="text" placeholder="name" />
            </Form.Item>
          </Col>
          {/* <Col xs={24} md={24} lg={8}>
            <Form.Item
              label="Account status"
              name="isDoctor"
              required
              rules={[{ required: true }]}
            >
              <Input type="text" placeholder="my status" />
            </Form.Item>
          </Col> */}
        </Row>
      </Form>
    )}
  </Layout>

  )
}

export default MyProfile