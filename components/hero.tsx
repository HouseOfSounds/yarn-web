import Image from "next/image";
import React from "react";
import { Button } from "./ui/button";
import { MoveRight } from "lucide-react";

const Hero = () => {
  return (
    <div className=" flex items-center justify-center ">
      {/* Optional overlay for better text visibility */}
      {/* <div className="absolute inset-0 bg-black opacity-0 lg:opacity-20"></div> */}
      <div className=" h-full xl:h-[90dvh] w-full flex flex-col-reverse lg:flex-row xl:items-start gap-y-0 md:gap-y-16 lg:gap-y-0 lg:justify-center ">
        <div className="relative z-10 w-full lg:w-[50%] ">
          <div className="w-full text-left space-y-4 sm:space-y-8 py-8 flex flex-col items-start">
            <div className="text-4xl lg:text-5xl xl:text-6xl font-bold relative">
              Connect with Your Favorite Music like Never Before
            </div>
            <p className=" text-sm sm:text-base lg::max-w-2xl mr-auto">
              Explore new artists, join exclusive fan clubs, and immerse
              yourself in the music culture with Soundtalk. Where your musical
              journey is just a click away.
            </p>
            <Button size="lg">
              Get Started <MoveRight className="size-5 md:size-6 ml-2" />
            </Button>

            <div className=" hidden lg:inline-flex relative h-64 lg:h-80 w-[30dvw]">
              <Image
                className=" object-contain"
                fill
                alt="aa"
                src="/assets/images/hero/under_text.webp"
              />
            </div>
          </div>
        </div>

        <div className=" flex z-10  bg-opacity-30 justify-between border border-white text-center lg:w-[50%] lg:ml-10 p-4 px-5 sm:p-8 rounded-xl relative">
          {/* HERO IMAGES */}
          <div className=" relative h-[40dvh] sm:h-[50dvh] lg:h-[80dvh] w-full">
            <Image
              className=" object-contain"
              fill
              alt="hero_image_base"
              src="/assets/images/hero/hero_1.webp"
            />

            <div className="absolute inset-0 z-20 ">
              <div className="relative h-[40dvh] sm:h-[50dvh] lg:h-[80dvh]">
                <Image
                  className=" object-contain"
                  fill
                  alt="hero_image_2"
                  src="/assets/images/hero/hero_2.webp"
                />

                <div className="absolute inset-0 -left-[5rem] lg:-left-[10rem] -top-[1rem] md:-top-[2rem] lg:-top-[3rem] z-30 ">
                  <div className="relative h-[40dvh] sm:h-[50dvh] lg:h-[80dvh]">
                    <Image
                      className=" object-contain"
                      fill
                      alt="hero_image_3"
                      src="/assets/images/hero/hero_3.webp"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
