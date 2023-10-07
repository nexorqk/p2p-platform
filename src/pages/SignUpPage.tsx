import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import TrainerSignUp from "../components/TrainerSignUp";
import StudentSignUp from "../components/StudentSignUp";

const SignUpPage = () => (
  <Tabs defaultValue="student" className="max-w-4xl mx-auto">
    <TabsList className="w-full">
      <TabsTrigger className="w-full" value="student">
        Student
      </TabsTrigger>
      <TabsTrigger className="w-full" value="trainer">
        Trainer
      </TabsTrigger>
    </TabsList>
    <TabsContent value="student">
      <StudentSignUp />
    </TabsContent>
    <TabsContent value="trainer">
      <TrainerSignUp />
    </TabsContent>
  </Tabs>
);

export default SignUpPage;
