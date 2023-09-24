import {
  Button,
  DatePicker,
  DatePickerProps,
  Form,
  Input,
  Select,
  Slider,
  TimeRangePickerProps,
} from "antd";
import {
  EyeInvisibleOutlined,
  EyeTwoTone,
  UserOutlined,
} from "@ant-design/icons";
import { useState } from "react";

type FieldType = {
  username: string;
  password: string;
  remember: string;
};

const { RangePicker } = DatePicker;

const TrainerSignUp = () => {
  const [typeOfSport, setTypeOfSport] = useState("");
  const sportTypesArr: { [x: string]: string }[] = [
    { wrestling: "Борьба" },
    { gymnastics: "Гимнастика" },
    { fightings: "Единоборства" },
    { gaming: "Игровые" },
    { intelligent: "Интеллектуальные" },
    { cybersport: "Киберспорт" },
    { athletics: "Легкая атлетика" },
    { power: "Силовые" },
    { technical: "Технические" },
    { fitness: "Фитнес" },
    { hobby: "Хобби" },
  ];

  const specificSport: { [x: string]: string[] } = {
    wrestling: [
      "Армрестлинг",
      "Вольная",
      "Греко-римская",
      "Грэпплинг",
      "Дзюдо",
      "Женская борьба",
      "Мас-рестлинг",
      "Самбо",
      "Сумо",
    ],
    gymnastics: [
      "Акробатика",
      "Батуты",
      "Воркаут",
      "Спортивная",
      "Художественная",
    ],
    fightings: [
      "Бокс",
      "Джиу-джитсу",
      "Карате",
      "Кикбоксинг",
      "ММА",
      "Панкратион",
      "Тхэквондо",
      "Универсальный бой",
      "Ушу",
      "Фехтование",
    ],
    gaming: [
      "Бадминтон",
      "Гандбол",
      "Городки",
      "Лапта",
      "Настольный теннис",
      "Регби",
      "Теннис",
      "Флорбол",
    ],
    intelligent: ["Го", "Спортивное ориентирование", "Шахматы", "Шашки"],
    cybersport: ["CS GO", "Dota 2", "PUBG", "Overwatch", "Warcraft 3"],
    athletics: ["Взрослая", "Массовая", "Юношеская"],
    power: ["Гиревой спорт", "Пауэрлифтинг", "Русский жим", "Тяжелая атлетика"],
    technical: [
      "Автоспорт",
      "Велоспорт",
      "Вертолётный",
      "Водно-моторный",
      "Моделирование",
      "Мотоспорт",
      "Стрельба",
      "Триатлон",
    ],
    fitness: ["Аэробика", "Бодибилдинг"],
    hobby: [
      "Бильярд",
      "Боулинг",
      "Дартс",
      "Парашют",
      "Пейнтбол",
      "Рыболовный спорт",
      "Скейтборд",
      "Спортивное собаководство",
      "Спортивный туризм",
    ],
  };
  const onFinish = (values: unknown) => {
    console.log("Success:", values);
  };

  const onFinishFailed = (errorInfo: unknown) => {
    console.log("Failed:", errorInfo);
  };

  const handleTypeOfSport = (value: string) => {
    setTypeOfSport(value);
  };

  const handleOption = (e: unknown) => {
    console.log(e);
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

  if (typeOfSport) {
    console.log(specificSport[typeOfSport]);
  }

  return (
    <Form
      labelCol={{ span: 4 }}
      wrapperCol={{ span: 14 }}
      layout="horizontal"
      style={{ maxWidth: 600 }}
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
      <Form.Item label="Type of sport">
        <Select onChange={handleTypeOfSport}>
          {sportTypesArr.map((sport) => {
            const key = Object.keys(sport)[0];
            return (
              <Select.Option key={key} value={key} onChange={handleOption}>
                {sport[key]}
              </Select.Option>
            );
          })}
        </Select>
      </Form.Item>
      <Form.Item label="Specific sport">
        <Select>
          {typeOfSport
            ? specificSport[typeOfSport].map((sport, idx) => {
                return (
                  <Select.Option
                    key={idx}
                    value={sport}
                    onChange={handleOption}
                  >
                    {sport}
                  </Select.Option>
                );
              })
            : null}
        </Select>
      </Form.Item>
      <Form.Item label="Birth Date">
        <DatePicker onChange={onBirthDatePicker} />
      </Form.Item>
      <Form.Item label="Experience">
        <RangePicker onChange={onExperiencePicker} />
      </Form.Item>
      <Form.Item label="Power">
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

export default TrainerSignUp;
