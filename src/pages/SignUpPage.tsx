// import TrainerSignUp from "@/components/TrainerSignUp";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const SignUpPage = () => {
  return (
    // <Tabs defaultValue="sign-up">
    //   <TabsList>
    //     <TabsTrigger value="trainer">trainer</TabsTrigger>
    //     <TabsTrigger value="student">student</TabsTrigger>
    //   </TabsList>
    //   <TabsContent value="trainer">
    //     <TrainerSignUp />
    //   </TabsContent>
    //   <TabsContent value="password">Change your password here.</TabsContent>
    // </Tabs>
    <Tabs defaultValue="student" className="w-full">
      <TabsList className="grid w-full grid-cols-2">
        <TabsTrigger value="student">Student</TabsTrigger>
        <TabsTrigger value="password">Password</TabsTrigger>
      </TabsList>
      <TabsContent value="student">
        <Card>
          <CardHeader>
            <CardTitle>Student</CardTitle>
            <CardDescription>
              Make changes to your account here. Click save when you're done.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-2">
            <div className="space-y-1">
              <Label htmlFor="name">Name</Label>
              <Input id="name" defaultValue="Pedro Duarte" />
            </div>
            <div className="space-y-1">
              <Label htmlFor="username">Username</Label>
              <Input id="username" defaultValue="@peduarte" />
            </div>
          </CardContent>
          <CardFooter>
            <Button>Save changes</Button>
          </CardFooter>
        </Card>
      </TabsContent>
      <TabsContent value="trainer">
        <Card>
          <CardHeader>
            <CardTitle>Trainer</CardTitle>
            <CardDescription>
              Change your password here. After saving, you'll be logged out.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-2">
            <div className="space-y-1">
              <Label htmlFor="current">Current password</Label>
              <Input id="current" type="password" />
            </div>
            <div className="space-y-1">
              <Label htmlFor="new">New password</Label>
              <Input id="new" type="password" />
            </div>
          </CardContent>
          <CardFooter>
            <Button>Save password</Button>
          </CardFooter>
        </Card>
      </TabsContent>
    </Tabs>
  );
};

export default SignUpPage;
