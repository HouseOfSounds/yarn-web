import React from "react";
import Logo from "./Logo";
import { Button } from "./ui/button";

const Navbar = () => {
  return (
    <div className="mx-auto max-w-screen-lg w-full py-5 ">
      <div className="flex w-full items-center justify-between">
        <Logo />

        <Button size="lg">Download</Button>
      </div>
    </div>
  );
};

export default Navbar;
