import { NavLink } from "react-router-dom";
import { Separator } from "./ui/separator";

export const Header = () => (
  <header className="flex justify-between py-2 container max-w-7xl">
    <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
      <NavLink to="/">Music Platform</NavLink>
    </h1>
    <div className="flex p-2 shadow-lg border border-solid border-black rounded-3xl">
      <h4 className="scroll-m-20 text-xl font-semibold tracking-tight px-2">
        <NavLink to="/trainers">Trainers</NavLink>
      </h4>
      <Separator orientation="vertical" />
      <h4 className="scroll-m-20 text-xl font-semibold tracking-tight px-2">
        <NavLink to="/about">About</NavLink>
      </h4>
    </div>
    <div className="flex items-center">
      <h4 className="scroll-m-20 text-xl font-semibold tracking-tight">
        <NavLink to="/sign-in">Sign In</NavLink>
      </h4>
      <h3 className="px-1 scroll-m-20 text-2xl font-semibold tracking-tight">
        /
      </h3>
      <h4 className="scroll-m-20 text-xl font-semibold tracking-tight">
        <NavLink to="/sign-up">Sign Up</NavLink>
      </h4>
    </div>
  </header>
);
