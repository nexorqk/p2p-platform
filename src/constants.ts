import { SelectType } from "./types";

export const emailRegEx = new RegExp(
  /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i
);

export const fullnameRegEx = new RegExp(
  /^[a-zA-ZàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð ,.'-]+$/u
);

export const inputErrors = {
  passwordPattern: "Minimum 4 characters.",
  emailError: "Uncorrect email.",
  fullnameError: "Not correct fullname",
  common: "Incorrect value",
  tooYoung: "Too young or too old",
};

export const genderArr: SelectType[] = [
  {
    id: "man",
    label: "Man",
  },
  {
    id: "female",
    label: "Female",
  },
  {
    id: "other",
    label: "Other",
  },
];
export const sportTypesArr: SelectType[] = [
  {
    id: "wrestling",
    label: "Борьба",
  },
  {
    id: "gymnastics",
    label: "Гимнастика",
  },
  {
    id: "fightings",
    label: "Единоборства",
  },
  {
    id: "gaming",
    label: "Игровые",
  },
  {
    id: "intelligent",
    label: "Интеллектуальные",
  },
  {
    id: "cybersport",
    label: "Киберспорт",
  },
  {
    id: "athletics",
    label: "Легкая атлетика",
  },
  {
    id: "power",
    label: "Силовые",
  },
  {
    id: "technical",
    label: "Технические",
  },
  {
    id: "fitness",
    label: "Фитнес",
  },
  {
    id: "hobby",
    label: "Хобби",
  },
];

export const specificSport: { [x: string]: SelectType[] }[] = [
  {
    wrestling: [
      {
        id: "1",
        label: "Армрестлинг",
      },
      {
        id: "2",
        label: "Вольная",
      },
      {
        id: "3",
        label: "Греко-римская",
      },
      {
        id: "4",
        label: "Грэпплинг",
      },
      {
        id: "5",
        label: "Дзюдо",
      },
      {
        id: "6",
        label: "Женская борьба",
      },
      {
        id: "7",
        label: "Мас-рестлинг",
      },
      {
        id: "8",
        label: "Самбо",
      },
      {
        id: "9",
        label: "Сумо",
      },
    ],
  },
  {
    gymnastics: [
      {
        id: "1",
        label: "Акробатика",
      },
      {
        id: "2",
        label: "Батуты",
      },
      {
        id: "3",
        label: "Воркаут",
      },
      {
        id: "4",
        label: "Спортивная",
      },
      {
        id: "5",
        label: "Художественная",
      },
    ],
  },
  {
    fightings: [
      {
        id: "1",
        label: "Бокс",
      },
      {
        id: "2",
        label: "Джиу-джитсу",
      },
      {
        id: "3",
        label: "Карате",
      },
      {
        id: "4",
        label: "Кикбоксинг",
      },
      {
        id: "5",
        label: "ММА",
      },
      {
        id: "6",
        label: "Панкратион",
      },
      {
        id: "7",
        label: "Тхэквондо",
      },
      {
        id: "8",
        label: "Универсальный бой",
      },
      {
        id: "9",
        label: "Ушу",
      },
      {
        id: "10",
        label: "Фехтование",
      },
    ],
  },
  {
    gaming: [
      {
        id: "1",
        label: "Бадминтон",
      },
      {
        id: "2",
        label: "Гандбол",
      },
      {
        id: "3",
        label: "Городки",
      },
      {
        id: "4",
        label: "Лапта",
      },
      {
        id: "5",
        label: "Настольный теннис",
      },
      {
        id: "6",
        label: "Регби",
      },
      {
        id: "7",
        label: "Теннис",
      },
      {
        id: "8",
        label: "Флорбол",
      },
    ],
  },
  {
    intelligent: [
      {
        id: "1",
        label: "Го",
      },
      {
        id: "2",
        label: "Спортивное ориентирование",
      },
      {
        id: "3",
        label: "Шахматы",
      },
      {
        id: "4",
        label: "Шашки",
      },
    ],
  },
  {
    cybersport: [
      {
        id: "1",
        label: "CS GO",
      },
      {
        id: "2",
        label: "Dota 2",
      },
      {
        id: "3",
        label: "PUBG",
      },
      {
        id: "4",
        label: "Overwatch",
      },
      {
        id: "5",
        label: "Warcraft 3",
      },
    ],
  },
  {
    athletics: [
      {
        id: "1",
        label: "Взрослая",
      },
      {
        id: "2",
        label: "Массовая",
      },
      {
        id: "3",
        label: "Юношеская",
      },
    ],
  },
  {
    power: [
      {
        id: "1",
        label: "Гиревой спорт",
      },
      {
        id: "2",
        label: "Пауэрлифтинг",
      },
      {
        id: "3",
        label: "Русский жим",
      },
      {
        id: "4",
        label: "Тяжелая атлетика",
      },
    ],
  },
  {
    technical: [
      {
        id: "1",
        label: "Автоспорт",
      },
      {
        id: "2",
        label: "Велоспорт",
      },
      {
        id: "3",
        label: "Вертолётный",
      },
      {
        id: "4",
        label: "Водно-моторный",
      },
      {
        id: "5",
        label: "Моделирование",
      },
      {
        id: "6",
        label: "Мотоспорт",
      },
      {
        id: "7",
        label: "Стрельба",
      },
      {
        id: "8",
        label: "Триатлон",
      },
    ],
  },
  {
    fitness: [
      {
        id: "1",
        label: "Аэробика",
      },
      {
        id: "2",
        label: "Бодибилдинг",
      },
    ],
  },
  {
    hobby: [
      {
        id: "1",
        label: "Бильярд",
      },
      {
        id: "2",
        label: "Боулинг",
      },
      {
        id: "3",
        label: "Дартс",
      },
      {
        id: "4",
        label: "Парашют",
      },
      {
        id: "5",
        label: "Пейнтбол",
      },
      {
        id: "6",
        label: "Рыболовный спорт",
      },
      {
        id: "7",
        label: "Скейтборд",
      },
      {
        id: "8",
        label: "Спортивное собаководство",
      },
      {
        id: "9",
        label: "Спортивный туризм",
      },
    ],
  },
];
