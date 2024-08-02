import React from "react";
import Logo from "./Logo";
import { Button } from "./ui/button";
import Link from "next/link";
import { Instagram, Linkedin, Twitter } from "lucide-react";

const Navbar = () => {
  return (
    <div className="mx-auto max-w-screen-lg w-full py-5 ">
      <div className="flex w-full items-center justify-between">
        <Logo />

        <div className="flex items-center gap-1 md:gap-3">
          <Button asChild size="icon" variant="ghost">
            <Link
              href="https://www.instagram.com/thehouseofsounds/"
              target="_blank"
            >
              <Instagram className="size-5 md:size-6" />
            </Link>
          </Button>
          <Button asChild size="icon" variant="ghost">
            <Link href="https://x.com/THOSEAPP" target="_blank">
              <Twitter className="size-5 md:size-6" />
            </Link>
          </Button>
          <Button asChild size="icon" variant="ghost">
            <Link
              href="https://www.linkedin.com/company/the-house-of-sounds/"
              target="_blank"
            >
              <Linkedin className="size-5 md:size-6" />
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
