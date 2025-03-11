import React, { useState } from "react";
import { Form, Input, Button, Card, Typography } from "antd";
import {  LockOutlined, MailOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
import { useLoginMutation } from "../../Redux/Features/userApiSlice";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const { Title } = Typography;

interface LoginFormValues {
  email: string;
  password: string;

}

const LoginPage: React.FC = () => {
  const navigate = useNavigate();
  const [login] = useLoginMutation();
  const [form] = Form.useForm<LoginFormValues>();
  const [loading, setLoading] = useState(false);

  const onFinish = async (values: LoginFormValues) => {
    try {
      setLoading(true);
      console.log("Login Values:", values);
      // Simulate API call
      await login(values).unwrap();
      toast.success("Login successful!");
      navigate("/");
    } catch (error) {
        toast.error("Login Failed");
      console.log(error);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-white py-6 px-4 sm:px-6 lg:px-8">
      <Card className="w-full max-w-xl shadow-sm rounded-lg">
        <div className="text-center">
          <Title level={3} className="text-blue-600">
            Login
          </Title>
        </div>

        <Form form={form} name="register" onFinish={onFinish} className="mt-6">
          {/* First Name and Last Name */}
          <div className="flex gap-4">
           
          </div>

          <Form.Item
            name="email"
            rules={[
              { required: true, message: "Please input your email!" },
              { type: "email", message: "Please enter a valid email!" },
            ]}
          >
            <Input
              prefix={<MailOutlined className="text-gray-400" />}
              placeholder="Email"
            />
          </Form.Item>

          {/* Password */}
          <Form.Item
            name="password"
            rules={[
              { required: true, message: "Please input your password!" },
              { min: 6, message: "Password must be at least 6 characters!" },
            ]}
          >
            <Input.Password
              prefix={<LockOutlined className="text-gray-400" />}
              placeholder="Password"
            />
          </Form.Item>

          {/* Submit Button */}
          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              loading={loading}
              className="mx-auto w-full bg-blue-600 hover:bg-blue-700"
            >
              Sign In
            </Button>
          </Form.Item>

          {/* Terms and Conditions */}
          <Form.Item>
            <div className="text-center text-gray-600">
              By clicking Sign In, you agree to our{" "}
              <Link to="/terms" className="text-blue-600 hover:underline">
                Terms
              </Link>
              ,{" "}
              <Link to="/privacy" className="text-blue-600 hover:underline">
                Privacy Policy
              </Link>
              , and{" "}
              <Link to="/cookies" className="text-blue-600 hover:underline">
                Cookies Policy
              </Link>
              .
            </div>
          </Form.Item>
        </Form>

        <div className="text-center mt-4">
          <span className="text-gray-600">Dont have an account? </span>
          <Link to="/register" className="text-blue-600 hover:underline">
            Sign Up
          </Link>
        </div>
      </Card>
    </div>
  );
};

export default LoginPage;
