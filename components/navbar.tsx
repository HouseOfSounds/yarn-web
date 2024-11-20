import React from "react";
import Logo from "./Logo";
import { Button } from "./ui/button";
import Link from "next/link";
import { Instagram, Linkedin, Twitter } from "lucide-react";
import Image from "next/image";

const Navbar = () => {
  return (
    <div className="mx-auto max-w-screen-lg w-full py-5 ">
      <div className="flex w-full items-center justify-between">
        <Logo />

        <div className="flex  items-center sm:gap-1 md:gap-3">
          <Button
            asChild
            size="icon"
            variant="ghost"
            className=" hidden sm:flex"
          >
            <Link
              href="https://www.instagram.com/thehouseofsounds/"
              target="_blank"
            >
              <Instagram className="size-5 md:size-6 " />
            </Link>
          </Button>
          <Button
            asChild
            size="icon"
            variant="ghost"
            className=" hidden sm:flex"
          >
            <Link href="https://x.com/THOSEAPP" target="_blank">
              <Twitter className="size-5 md:size-6 " />
            </Link>
          </Button>
          <Button
            asChild
            size="icon"
            variant="ghost"
            className="mr-2 hidden sm:flex "
          >
            <Link
              href="https://www.linkedin.com/company/the-house-of-sounds/"
              target="_blank"
            >
              <Linkedin className="size-5 md:size-6 " />
            </Link>
          </Button>

          {/* DOWNLOAD ON PLAY STORE */}
          <Link
            href="https://play.google.com/store/apps/details?id=com.thehouseofsounds.yarnapp"
            target="_blank"
          >
            <Image
              className="object-right "
              width={120}
              height={120}
              alt="google-play"
              src={`/assets/images/download-button/play-store.png`}
            />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
