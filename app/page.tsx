"use client";
import ContentItem from "@/components/content-item";
import Footer from "@/components/footer";
import Hero from "@/components/hero";
import Navbar from "@/components/navbar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { faqs, features } from "@/constants";
import { cn } from "@/lib/utils";
import axios from "axios";
import { Sparkles } from "lucide-react";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";

export default function Home() {
  const [email, setEmail] = useState("");
  const [load, setLoad] = useState(false);
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
    <main className="h-full overflow-auto">
      <ToastContainer />
      <div className="mx-auto max-w-screen-xl h-full px-6 ">
        <div className="h-full flex flex-col">
          <div className="flex flex-1 flex-col">
            <Navbar />
            <Hero />

            <div className="flex flex-col gap-12 py-12">
              {/* FEATURES */}
              <ContentItem
                imagePath="/features/screen.webp"
                itemName="Features"
                title="Yarn"
                flip
              >
                {features.map((feature, index) => (
                  <div key={index} className="flex flex-col gap-2 text-sm">
                    <div className="flex items-center gap-2">
                      <feature.icon className="size-4 flex-shrink-0 text-[#FF5555]" />
                      <div className=" font-bold">{feature.title}</div>
                    </div>

                    <div className=" text-muted-foreground">
                      {feature.description}
                    </div>
                  </div>
                ))}
              </ContentItem>

              {/* ADVANTAGES */}
              <ContentItem
                imagePath="/advantages/screen.webp"
                itemName="Advantages"
                title="Why Yarn?"
              >
                <div className="flex items-center gap-2">
                  <div className="p-3 rounded-full flex-shrink-0 bg-[#FF5555]">
                    <Sparkles className="size-4  text-white" />
                  </div>
                  <div className=" font-bold">
                    A New Way to Discover and Connect
                  </div>
                </div>

                <div className="text-muted-foreground">
                  Yarn offers seamless music discovery and engaging fan
                  interactions. Join or start meaningful conversations about
                  your favorite songs and artists, both public and private.
                  Access detailed artist profiles, purchase event tickets, and
                  buy merchandise all in one place. Stay connected with the
                  artists you love effortlessly.
                </div>
              </ContentItem>

              {/* COMING SOON */}
              <div
                id="coming-soon"
                className="flex flex-col items-center justify-center"
              >
                <div className=" tracking-wider text-[#FF5555]">PRODUCT</div>
                <h2 className="text-4xl font-bold">COMING SOON</h2>
              </div>

              <ContentItem
                imagePath="/coming-soon/screen.webp"
                flip
                title="Transform Your Music Discovery Experience!"
              >
                <div className="text-sm text-muted-foreground">
                  {/* Yarn is currently in development & will be completed in a few
                  weeks. join our notifications list to get up dates on our
                  progress & our Launch. */}
                  Join our waitlist to enter our December concert ticket
                  giveaway.
                </div>
                <div className="w-full flex items-center gap-2">
                  <Input
                    value={email}
                    type="email"
                    className="!py-4"
                    placeholder="Your email"
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  <Button
                    onClick={submit}
                    size="lg"
                    disabled={load}
                    className="disabled:opacity-50"
                  >
                    Join
                  </Button>
                </div>
              </ContentItem>
            </div>

            <div className="">
              <div className="text-sm tracking-wider text-[#FF5555]">FAQ</div>
              <h2 className="text-3xl font-bold capitalize">
                Frequently asked <br /> questions
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 mt-8">
                {faqs.map((faq, index) => (
                  <div
                    key={index}
                    className={cn(
                      "bg-white rounded-lg p-8 shadow-md",
                      (index + 1 === 1 || index + 1 === 4 || index + 1 === 5) &&
                        "bg-[#FF5555] text-white"
                    )}
                  >
                    <div className="text-lg font-bold">{faq.question}</div>
                    <div
                      className={cn(
                        "text-sm text-muted-foreground",
                        (index + 1 === 1 ||
                          index + 1 === 4 ||
                          index + 1 === 5) &&
                          "text-white"
                      )}
                    >
                      {faq.answer}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <Footer />
            <div className="py-5 text-center text-sm capitalize">
              Copyright 2024. The House of Sounds. all rights reserved.
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
