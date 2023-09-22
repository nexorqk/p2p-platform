import { useState } from "react";
import StudentSinUp from "../../components/StudentSignUp";
import TrainerSignUp from "../../components/TrainerSignUp";

import styles from "./SignUpPage.module.css";

const SignUpPage = () => {
  const [isTrainer, setIsTrainer] = useState(false);

  return (
    <div>
      <div className={styles.tabs}>
        <h2
          className={[styles.tab, !isTrainer && styles.active].join(" ")}
          onClick={() => setIsTrainer(false)}
        >
          Student
        </h2>
        <h2
          className={[styles.tab, isTrainer && styles.active].join(" ")}
          onClick={() => setIsTrainer(true)}
        >
          Trainer
        </h2>
      </div>
      {isTrainer ? <TrainerSignUp /> : <StudentSinUp />}
    </div>
  );
};

export default SignUpPage;
