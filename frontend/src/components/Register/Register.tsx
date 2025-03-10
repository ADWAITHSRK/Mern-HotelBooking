import React, { useState } from "react";
import { Form, Input, Button, Card, Typography } from "antd";
import { UserOutlined, LockOutlined, MailOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";

const { Title } = Typography;

interface RegisterFormValues {
  email: string;
  password: string;
  firstName: string;
  lastName: string;
}

const RegisterPage: React.FC = () => {
  const [form] = Form.useForm<RegisterFormValues>();
  const [loading, setLoading] = useState(false);

  const onFinish = async (values: RegisterFormValues) => {
    setLoading(true);
    console.log("Register Values:", values);
    // Simulate API call
    setTimeout(() => {
      setLoading(false);
      alert("Registration successful!");
    }, 2000);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-white py-6 px-4 sm:px-6 lg:px-8">
      <Card className="w-full max-w-xl shadow-lg rounded-lg">
        <div className="text-center">
          <Title level={3} className="text-blue-600">
            Create a New Account
          </Title>
          
        </div>

        <Form
          form={form}
          name="register"
          onFinish={onFinish}
          className="mt-6"
        >
          {/* First Name and Last Name */}
          <div className="flex gap-4">
            <Form.Item
              name="firstName"
              rules={[
                { required: true, message: "Please input your first name!" },
              ]}
              className="flex-1"
            >
              <Input
                prefix={<UserOutlined className="text-gray-400" />}
                placeholder="First Name"
                className="w-full"
              />
            </Form.Item>
            <Form.Item
              name="lastName"
              rules={[
                { required: true, message: "Please input your last name!" },
              ]}
              className="flex-1"
            >
              <Input
                prefix={<UserOutlined className="text-gray-400" />}
                placeholder="Last Name"
                className="w-full"
              />
            </Form.Item>
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
          <Form.Item >
            <Button
              type="primary"
              htmlType="submit"
              loading={loading}
              className="mx-auto w-full bg-blue-600 hover:bg-blue-700"
            >
              Sign Up
            </Button>
          </Form.Item>

          {/* Terms and Conditions */}
          <Form.Item>
            <div className="text-center text-gray-600">
              By clicking Sign Up, you agree to our{" "}
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

        {/* Login Link */}
        <div className="text-center mt-4">
          <span className="text-gray-600">Already have an account? </span>
          <Link to="/login" className="text-blue-600 hover:underline">
            Log In
          </Link>
        </div>
      </Card>
    </div>
  );
};

export default RegisterPage;