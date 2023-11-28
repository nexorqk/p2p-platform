import { TrainerCard } from "../components";

const trainersArr = [
  {
    name: "John",
    sport: "Единоборства",
    specifics: ["Кикбоксинг", "Бокс", "Карате"],
  },
  {
    name: "Anna",
    sport: "Гимнастика",
    specifics: ["Акробатика", "Спортивная"],
  },
];

export const TrainersPage = () => {
  return (
    <div className="flex flex-col justify-between">
      {trainersArr.map((trainer) => (
        <TrainerCard key={trainer.name} trainer={trainer} />
      ))}
    </div>
  );
};
