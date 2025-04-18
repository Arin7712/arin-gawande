"use client";

import { Manrope } from "next/font/google";
import React from "react";
import { Button } from "./ui/button";
import Image from "next/image";
import Link from "next/link";
import { toast } from "sonner";

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["400", "700"],
});

const Contact = () => {
  async function handleSubmit(e: any) {
    e.preventDefault();
    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        access_key: "3d23dc08-f2aa-4289-8f0d-c2f9882982dc",
        name: e.target.name.value,
        email: e.target.email.value,
        phone: e.target.phone.value,
        message: e.target.message.value,
      }),
    });
    const result = await response.json();
    if (result.success) {
        toast("Form Submitted Successfully");
      console.log(result);
    }
  }

  return (
    <div className="padding flex md:flex-row flex-col items-start md:items-stretch justify-between py-[6rem] md:gap-6 gap-[4rem]">
      <div
        className={`${manrope.className} w-full md:w-[60%] flex flex-col gap-[3rem]`}
      >
        <div className="flex flex-col gap-2">

        <h1 className={`text-4xl max-w-3xl font-bold ${manrope.className}`}>
          A comprehensive solution for all of your challenges.
        </h1>
        <p className="text-sm font-light">
          "Get in touch with me – I'm here to help!"
        </p>
        </div>
        {/* <div className="text-3xl font-light">Contact Us !</div> */}
        <div className="w-full">
          <form className="space-y-[3rem]" onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              required
              placeholder="Name"
              className="border-b-[1px] border-b-zinc-800 bg-transparent focus:outline-none w-[100%] focus:ring-0"
            />
            <input
              type="text"
              name="phone"
              required
              placeholder="Phone Number"
              className="border-b-[1px] border-b-zinc-800 w-[100%] bg-transparent focus:outline-none focus:ring-0"
            />
            <input
              type="text"
              name="email"
              required
              placeholder="Email Address"
              className="border-b-[1px] border-b-zinc-800 w-[100%] focus:ring-0 bg-transparent focus:outline-none"
            />
            <textarea
              name="message"
              required
              placeholder="Your Message"
              className="border-b-[1px] border-b-zinc-800 w-[100%] bg-transparent focus:outline-none focus:ring-0 resize-none"
            />
            <input
              type="hidden"
              name="access_key"
              value="3d23dc08-f2aa-4289-8f0d-c2f9882982dc"
            />
            <div>
              <Button
                type="submit"
              >
                Submit
              </Button>
            </div>
          </form>
        </div>
      </div>
      <div className="relative md:flex-1 flex justify-between flex-col order-[-1] md:order-1 rounded-xl p-6 md:w-auto w-full md:h-auto h-[20rem] overflow-hidden bg-[url('/p1.jpg')] bg-no-repeat bg-cover">
        <div className="relative">
        </div>
        
      </div>
    </div>
  );
};

export default Contact;
