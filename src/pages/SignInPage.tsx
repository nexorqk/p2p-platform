import { useState } from "react";
import { Button, Input, Space, Tooltip } from "antd";
import { InfoCircleOutlined, UserOutlined } from "@ant-design/icons";

const SignInPage = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);

  const handleSignIn = () => {
    console.log("Sign In");
  };

  return (
    <Space direction="vertical" size="large" style={{ display: "flex" }}>
      <h1>Sign In</h1>
      <Input
        style={{ width: 311 }}
        placeholder="Enter your username"
        prefix={<UserOutlined className="site-form-item-icon" />}
        suffix={
          <Tooltip title="Your Email while you sign up">
            <InfoCircleOutlined style={{ color: "rgba(0,0,0,.45)" }} />
          </Tooltip>
        }
      />
      <Space direction="horizontal">
        <Input.Password
          placeholder="input password"
          visibilityToggle={{
            visible: passwordVisible,
            onVisibleChange: setPasswordVisible,
          }}
        />
        <Button
          style={{ width: 80 }}
          onClick={() => setPasswordVisible((prevState) => !prevState)}
        >
          {passwordVisible ? "Hide" : "Show"}
        </Button>
      </Space>
      <Button className="sign-in" onClick={handleSignIn}>
        Sign In
      </Button>
    </Space>
  );
};

export default SignInPage;
