import { icon2 } from "@/utils/assets";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaGithub, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { HiOutlineMail, HiOutlinePhone } from "react-icons/hi";
import { BsHandIndexThumb } from "react-icons/bs";

const page = () => {
  return (
    <main className="my-16 grid grid-cols-3 gap-12">
      <div className="space-y-20">
        <div>
          <h5 className="text-lightest-slate font-semibold text-lg uppercase">
            Contact info
          </h5>
          <ul className="space-y-4 mt-6">
            <li className="z-10 flex items-center gap-4">
              <div className="card w-20 h-20 flex justify-center items-center">
                <HiOutlineMail className="text-2xl text-lightest-slate" />
              </div>

              <div className="space-y-[3px] z-10">
                <p className="text-lightest-slate text-base">Email address</p>
                <p className="text-lightest-slate/60 text-sm">
                  chourafidev@gmail.com
                </p>
              </div>
            </li>
            <li className="z-10 flex items-center gap-4">
              <div className="card w-20 h-20 flex justify-center items-center">
                <HiOutlinePhone className="text-2xl text-lightest-slate" />
              </div>

              <div className="space-y-[3px] z-10">
                <p className="text-lightest-slate text-base">Phone number</p>
                <p className="text-lightest-slate/60 text-sm">+212 603940215</p>
              </div>
            </li>
          </ul>
        </div>
        <div>
          <h5 className="text-lightest-slate font-semibold text-lg uppercase flex items-center gap-3">
            I&apos;m On{" "}
            <BsHandIndexThumb className="rotate-180 text-lightest-slate/40" />
          </h5>
          <ul className="flex items-center gap-3 h-16 mt-8">
            <li className="w-20 h-20 z-10">
              <Link
                href="/"
                className="font-medium rounded-full text-base w-full h-full btn-white bg-gradient flex justify-center items-center"
              >
                <FaLinkedinIn className="text-2xl" />
              </Link>
            </li>
            <li className="w-20 h-20 z-10">
              <Link
                href="/"
                className="font-medium rounded-full text-base w-full h-full btn-white bg-gradient flex justify-center items-center"
              >
                <FaGithub className="text-2xl" />
              </Link>
            </li>
            <li className="w-20 h-20 z-10">
              <Link
                href="/"
                className="font-medium rounded-full text-base w-full h-full btn-white bg-gradient flex justify-center items-center"
              >
                <FaInstagram className="text-2xl" />
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="col-span-2 card p-8">
        <Image
          src={icon2}
          alt="icon2"
          className="absolute top-0 right-10 duration-300 ease-linear"
        />

        <h1 className="text-lightest-slate text-4xl font-medium">
          Let’s work <span className="text-green">together.</span>
        </h1>

        <form className="flex flex-col gap-3 mt-8">
          <input type="text" placeholder="Name *" className="z-10 input" />
          <input type="text" placeholder="Email *" className="z-10 input" />
          <input
            type="text"
            placeholder="Your Subject *"
            className="z-10 input"
          />
          <textarea
            placeholder="Your Message *"
            className="z-10 input"
            rows={6}
          ></textarea>
          <button className="btn btn-white bg-gradient z-10">
            Send Message
          </button>
        </form>
      </div>
    </main>
  );
};

export default page;