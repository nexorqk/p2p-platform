import {
  Button,
  DatePicker,
  DatePickerProps,
  Form,
  Input,
  Select,
  Slider,
  TimeRangePickerProps,
  TreeSelect,
} from "antd";
import {
  EyeInvisibleOutlined,
  EyeTwoTone,
  UserOutlined,
} from "@ant-design/icons";

type FieldType = {
  username: string;
  password: string;
  remember: string;
};

const { RangePicker } = DatePicker;

const StudentSinUp = () => {
  const onFinish = (values: unknown) => {
    console.log("Success:", values);
  };

  const onFinishFailed = (errorInfo: unknown) => {
    console.log("Failed:", errorInfo);
  };

  const onBirthDatePicker: DatePickerProps["onChange"] = (date, dateString) => {
    console.log(date, dateString);
  };

  const onExperiencePicker: TimeRangePickerProps["onChange"] = (date) => {
    console.log(date);
  };

  const onSliderChange = (value: unknown) => {
    console.log(value);
  };

  return (
    <Form
      labelCol={{ span: 4 }}
      wrapperCol={{ span: 14 }}
      layout="horizontal"
      style={{ maxWidth: 800 }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
    >
      <Form.Item<FieldType>
        label="Username"
        name="username"
        rules={[{ required: true, message: "Please input your username!" }]}
      >
        <Input placeholder="Enter your username" prefix={<UserOutlined />} />
      </Form.Item>
      <Form.Item<FieldType>
        label="Password"
        name="password"
        rules={[{ required: true, message: "Please input your password!" }]}
      >
        <Input.Password
          placeholder="input password"
          iconRender={(visible) =>
            visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
          }
        />
      </Form.Item>
      <Form.Item label="Select">
        <Select>
          <Select.Option value="demo">Demo</Select.Option>
        </Select>
      </Form.Item>
      <Form.Item label="TreeSelect">
        <TreeSelect
          treeData={[
            {
              title: "Light",
              value: "light",
              children: [{ title: "Bamboo", value: "bamboo" }],
            },
          ]}
        />
      </Form.Item>
      <Form.Item label="Birth Date">
        <DatePicker onChange={onBirthDatePicker} />
      </Form.Item>
      <Form.Item label="Experience">
        <RangePicker onChange={onExperiencePicker} />
      </Form.Item>
      <Form.Item label="Your Training level">
        <Slider onChange={onSliderChange} defaultValue={50} />
      </Form.Item>
      <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
};

export default StudentSinUp;
