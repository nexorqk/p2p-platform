import { Box, Stack } from "@mui/material";
import TrainerCard from "../components/TrainerCard";

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

const TrainersPage = () => {
  return (
    <Stack direction="row" spacing={2}>
      {trainersArr.map((trainer) => (
        <TrainerCard key={trainer.name} trainer={trainer} />
      ))}
    </Stack>
  );
};

export default TrainersPage;
