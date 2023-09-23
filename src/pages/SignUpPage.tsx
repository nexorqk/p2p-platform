import { Tabs } from "antd";
import type { TabsProps } from "antd";
import StudentSinUp from "../components/StudentSignUp";
import TrainerSignUp from "../components/TrainerSignUp";

const onChange = (key: string) => {
  console.log(key);
};

const items: TabsProps["items"] = [
  {
    key: "1",
    label: "Student",
    children: <StudentSinUp />,
  },
  {
    key: "2",
    label: "Trainer",
    children: <TrainerSignUp />,
  },
];

const SignUpPage = () => {
  return (
    <Tabs
      defaultActiveKey="1"
      centered
      items={items}
      onChange={onChange}
      indicatorSize={(origin) => origin - 16}
    />
  );
};

export default SignUpPage;
