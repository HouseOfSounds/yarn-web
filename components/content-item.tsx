import { cn } from "@/lib/utils";
import Image from "next/image";
import React from "react";

interface ContentItemProps {
  imagePath: string;
  itemName?: string;
  title: string;
  children: React.ReactNode;
  flip?: boolean;
}

const ContentItem = ({
  imagePath,
  itemName,
  title,
  flip,
  children,
}: ContentItemProps) => {
  return (
    <div
      className={cn(
        "flex items-center justify-center gap-4 md:flex-row flex-col-reverse",
        flip && "flex-col-reverse md:flex-row-reverse"
      )}
    >
      <div className=" w-full lg:w-[50%] ">
        <div className="text-sm tracking-wider uppercase text-[#FF5555]">
          {itemName}
        </div>
        <h2 className="text-3xl font-bold">{title}</h2>

        <div className="flex flex-col gap-4 py-4 lg:gap-7 lg:py-7 text-sm">
          {children}
        </div>
      </div>
      <div className=" w-full lg:w-[40%]">
        <div className="relative h-[50dvh] sm:h-[40dvh] lg:h-[70dvh] w-full">
          <Image
            className=" object-contain"
            fill
            alt={itemName || "aa"}
            src={`/assets/images${imagePath}`}
          />
        </div>
      </div>
    </div>
  );
};

export default ContentItem;
