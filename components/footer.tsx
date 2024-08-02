import React from "react";
import Logo from "./Logo";
import { Button } from "./ui/button";
import { Mail, Phone } from "lucide-react";
import { Input } from "./ui/input";

const Footer = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 py-20 border-b border-b-black/60">
      <div className="space-y-4">
        <Logo />
        <Button variant="ghost">
          <Mail className="size-4 mr-2" />
          help@yarn.com
        </Button>

        <Button variant="ghost">
          <Phone className="size-4 mr-2" />
          help@yarn.com
        </Button>
      </div>

      <div className="space-y-4">
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
      </div>

      <div className="space-y-4">
        <div className=" text-lg font-bold">Newsletter</div>
        <p>Stay Up To Date</p>

        <div className="w-full flex items-center gap-2">
          <Input type="email" className="!py-4" placeholder="Your email" />
          <Button size="lg">Subscribe</Button>
        </div>
      </div>
    </div>
  );
};

export default Footer;
