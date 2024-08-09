import React, { useState } from "react";
import Logo from "./Logo";
import { Button } from "./ui/button";
import { Mail, MessageCircle, Phone } from "lucide-react";
import { Input } from "./ui/input";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";

const Footer = () => {
  const [email, setEmail] = useState("");
  const [load, setLoad] = useState(false);
  const submit = async () => {
    setLoad(true);
    try {
      const { data } = await axios.post("/api/news", { email });
      if (data?.success) {
        setEmail("");
        toast.success("Email subscribed to newsletter successfully");
      }
    } catch (error) {
      console.log(error);
    }
    setLoad(false);
  };
  return (
    <div className="grid grid-cols-1 md:grid-cols-2  gap-4 py-20 border-b border-b-black/60">
      <ToastContainer />
      <div className="space-y-4">
        <Logo />
        <a href="mailto:sounds@those.app">
          <Button variant="ghost">
            <Mail className="size-4 mr-2" />
            sounds@those.app
          </Button>
        </a>

        <a
          href="https://wa.me/+447405249625"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Button variant="ghost">
            <MessageCircle className="size-4 mr-2" />
            +44 7405 24 9625
          </Button>
        </a>
      </div>

      {/* <div className="space-y-4">
        <div className=" text-lg font-bold">Legal</div>
        <p>Terms Of Use</p>
        <p>Privacy Policy</p>
        <p>Cookie Policy</p>
      </div>

      <div className="space-y-4">
        <div className=" text-lg font-bold">Product</div>
        <p>Take Tour</p>
        <p>Live Chat</p>
        <p>Reviews</p>
      </div> */}

      <div className="space-y-4">
        <div className=" text-lg font-bold">Newsletter</div>
        <p>Stay Up To Date</p>

        <form name="nesletter" netlify>
          <div className="w-full flex items-center gap-2">
            <Input
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              className="!py-4"
              placeholder="Your email"
              value={email}
            />
            <Button
              onClick={submit}
              size="lg"
              disabled={load}
              className="disabled:copacity-50"
            >
              Subscribe
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Footer;
