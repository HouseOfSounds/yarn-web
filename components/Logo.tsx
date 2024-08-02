import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Logo = () => {
  return (
    <Link href="/" className="flex items-center">
      <div className="relative size-6 md:h-8 md:w-8 mr-2">
        <Image fill alt="logo" src="/logo.png" />
      </div>

      <h1 className={cn("text-lg md:text-2xl font-bold")}>Yarn</h1>
    </Link>
  );
};

export default Logo;
