"use client";
import Image from "next/image";
import Link from "next/link";
import { Button } from "./ui/button";
import ContentItem from "./content-item";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";

const Hero = () => {
  const [email, setEmail] = useState("");
  const [load, setLoad] = useState(false);

  const validateEmail = (email: string) => {
    const re =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  };
  const submit = async () => {
    setLoad(true);
    try {
      const { data } = await axios.post("/api", { email });
      if (data?.success) {
        setEmail("");
        toast.success("Email added to waitlist successfully");
      }
    } catch (error) {
      console.log(error);
    }
    setLoad(false);
  };
  return (
    <div className=" flex items-center justify-center ">
      {/* Optional overlay for better text visibility */}
      {/* <div className="absolute inset-0 bg-black opacity-0 lg:opacity-20"></div> */}
      <div className=" h-full xl:h-[90dvh] w-full flex flex-col-reverse lg:flex-row xl:items-start gap-y-0 md:gap-y-16 lg:gap-y-0 lg:justify-center ">
        <div className="relative z-10 w-full lg:w-[50%] ">
          <div className="w-full text-left space-y-4 sm:space-y-8 py-8 flex flex-col items-start">
            <div className="text-4xl lg:text-5xl font-bold relative">
              Join the Yarn Community to Discuss, Share, & Discover Music With
              Your Friends
            </div>
            <p className=" text-sm sm:text-base lg::max-w-2xl mr-auto">
              Amplify Your Music Passion, Be Part of the New Music Social
              Experience <br /> <b> - Sign Up for the Yarn Waitlist.</b> <br />{" "}
              Early joiners stand the chance to win tickets to concerts in Lagos
              this December
            </p>

            <div className="w-full flex items-center gap-2">
              <Input
                value={email}
                type="email"
                className="!py-4"
                placeholder="Your email"
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <Button
              onClick={() => (validateEmail(email) ? submit() : () => {})}
              size="lg"
              disabled={email === "" || load}
              className="disabled:opacity-50"
            >
              Join Our Waitlist
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
