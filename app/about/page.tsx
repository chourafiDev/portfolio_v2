"use client";

import ContactCard from "@/components/ui/ContactCard";
import CredentialsCard from "@/components/ui/CredentialsCard";
import Profiles from "@/components/ui/Profiles";
import { bg1, icon2, person4, star } from "@/utils/assets";
import { RobotoMono } from "@/utils/fonts";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { BsFillCaretRightFill } from "react-icons/bs";
import { FaGithub, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import Sticky from "react-sticky-el";

const Page = () => {
  return (
    <main className="my-16">
      <section className="grid grid-cols-3 gap-12">
        <Sticky scrollElement=".scrollarea" hideOnBoundaryHit={false}>
          <div className="card p-6">
            <Image src={bg1} alt="bg1" className="bg-card" />

            <div className="w-full h-80 rounded-30 overflow-hidden relative">
              <Image
                src={person4}
                alt="person4"
                fill
                className="absolute object-cover"
              />
            </div>

            <h1 className="text-lightest-slate font-semibold text-xl text-center mb-1 mt-10">
              Chourafi Abdelmoanime
            </h1>
            <p
              className={`${RobotoMono.className} text-lightest-slate/60 text-[15px] text-center`}
            >
              Fullstack developer
            </p>

            <ul className="flex items-center justify-center gap-3 h-16 px-10 mt-6">
              <li className="w-14 h-14 z-10">
                <Link
                  href="/"
                  className="font-medium rounded-full text-base w-full h-full btn-white bg-gradient flex justify-center items-center"
                >
                  <FaLinkedinIn className="text-xl" />
                </Link>
              </li>
              <li className="w-14 h-14 z-10">
                <Link
                  href="/"
                  className="font-medium rounded-full text-base w-full h-full btn-white bg-gradient flex justify-center items-center"
                >
                  <FaGithub className="text-xl" />
                </Link>
              </li>
              <li className="w-14 h-14 z-10">
                <Link
                  href="/"
                  className="font-medium rounded-full text-base w-full h-full btn-white bg-gradient flex justify-center items-center"
                >
                  <FaInstagram className="text-xl" />
                </Link>
              </li>
            </ul>
          </div>
        </Sticky>
        <div className="col-span-2">
          <div className="flex items-center justify-center gap-8">
            <Image
              src={star}
              alt="star"
              width={50}
              height={50}
              className="object-cover"
            />
            <h2 className="font-semibold text-[3rem] text-lightest-slate">
              About Me
            </h2>
            <Image
              src={star}
              alt="star"
              width={50}
              height={50}
              className="object-cover"
            />
          </div>

          <div className="card px-6 pb-6 pt-28 mt-10">
            <Image src={bg1} alt="bg1" className="bg-card" />

            <Image
              src={icon2}
              alt="icon2"
              className="absolute top-0 left-8 duration-300 ease-linear"
            />

            <div>
              <p className="text-lightest-slate/60 mb-4 leading-7">
                Hello! My name is Chourafi Abdelmonaime and I enjoy creating
                things that live on the internet. My interest in web development
                started back in 2020 when I tried creating templates with HTML
                and CSS!
              </p>

              <p className="text-lightest-slate/60 mb-4 leading-7">
                My passion is learning all possible things about web development
                and helping people to fix their problems on the internet
              </p>

              <p className="text-lightest-slate/60 leading-7">
                Here are a few technologies I’ve been learning and working with
                recently:
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4 mt-8">
              <ul className="text-lightest-slate/60 bg-lightest-slate/5 p-5 rounded-30 text-sm space-y-3">
                <li className="flex items-center gap-2">
                  <BsFillCaretRightFill className="text-green text-[10px]" />
                  <span>JavaScript (ES6+)</span>
                </li>
                <li className="flex items-center gap-2">
                  <BsFillCaretRightFill className="text-green text-[10px]" />
                  <span>Reactjs</span>
                </li>
                <li className="flex items-center gap-2">
                  <BsFillCaretRightFill className="text-green text-[10px]" />
                  <span>Nextjs</span>
                </li>
                <li className="flex items-center gap-2">
                  <BsFillCaretRightFill className="text-green text-[10px]" />
                  <span>Tailwindcss</span>
                </li>
              </ul>
              <ul className="text-lightest-slate/60 bg-lightest-slate/5 p-5 rounded-30 text-sm space-y-3">
                <li className="flex items-center gap-2">
                  <BsFillCaretRightFill className="text-green text-[10px]" />
                  <span>Typescript</span>
                </li>
                <li className="flex items-center gap-2">
                  <BsFillCaretRightFill className="text-green text-[10px]" />
                  <span>React Native</span>
                </li>
                <li className="flex items-center gap-2">
                  <BsFillCaretRightFill className="text-green text-[10px]" />
                  <span>Nodejs</span>
                </li>
                <li className="flex items-center gap-2">
                  <BsFillCaretRightFill className="text-green text-[10px]" />
                  <span>MongoDb</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-14">
            <h2 className="text-lightest-slate font-semibold text-lg">
              EXPERIENCE
            </h2>
            <div className="mt-6">
              <p className="text-lightest-slate/60 text-base mb-1 font-normal">
                2024 - Present
              </p>
              <h3 className={`${RobotoMono.className} text-green text-base`}>
                Frontend developer
              </h3>
              <p className="text-lightest-slate/60 font-normal text-[15px] mt-3">
                Sit amet luctussd fav venenatis, lectus magna fringilla inis
                urna, porttitor rhoncus dolor purus non enim praesent in
                elementum sahas facilisis leo, vel fringilla est ullamcorper
                eget nulla facilisi etisam dignissim diam quis enim lobortis
                viverra orci sagittis eu volutpat odio facilisis mauris sit.
              </p>
            </div>

            <div className="mt-14">
              <p className="text-lightest-slate/60 text-base mb-1 font-normal">
                2021 - 2022
              </p>
              <h3 className={`${RobotoMono.className} text-green text-base`}>
                Fullstack web developer
              </h3>
              <p className="text-lightest-slate/60 font-normal text-[15px] mt-3">
                Sit amet luctussd fav venenatis, lectus magna fringilla inis
                urna, porttitor rhoncus dolor purus non enim praesent in
                elementum sahas facilisis leo, vel fringilla est ullamcorper
                eget nulla facilisi etisam dignissim diam quis enim lobortis
                viverra orci sagittis eu volutpat odio facilisis mauris sit.
              </p>
            </div>
          </div>

          <div className="mt-14">
            <h2 className="text-lightest-slate font-semibold text-lg">
              EDUCATION
            </h2>
            <div className="mt-6">
              <p className="text-lightest-slate/60 text-base mb-1 font-normal">
                2016 - 2017
              </p>
              <h3 className={`${RobotoMono.className} text-green text-base`}>
                Baccalaureate In Expiremental Sciences
              </h3>
              <p className="text-lightest-slate/60 font-normal text-[15px] mt-3">
                Abtih High School
              </p>
            </div>

            <div className="mt-14">
              <p className="text-lightest-slate/60 text-base mb-1 font-normal">
                2019 - 2021
              </p>
              <h3 className={`${RobotoMono.className} text-green text-base`}>
                Specialized Technician in IT development
              </h3>
              <p className="text-lightest-slate/60 font-normal text-[15px] mt-3">
                NTIC , Marrakech
              </p>
            </div>
          </div>

          <div className="mt-14">
            <h2 className="text-lightest-slate font-semibold text-lg">
              SKILLS
            </h2>

            <div className="grid grid-cols-2 gap-10 py-3 mt-6">
              <div>
                <p className="dark:text-lightest-slate/50 text-dark/60 mb-3">
                  Nextjs
                </p>
                <div className="w-full bg-lightest-slate/20 rounded-full">
                  <div
                    className="bg-green/60 text-xs font-medium text-dark text-center p-[.5px] leading-none rounded-l-lg"
                    style={{ width: "85%" }}
                  >
                    85%
                  </div>
                </div>
              </div>
              <div>
                <p className="dark:text-lightest-slate/50 text-dark/60 mb-3">
                  Nodejs (Expressjs)
                </p>
                <div className="w-full bg-lightest-slate/20 rounded-full">
                  <div
                    className="bg-green/60 text-xs font-medium text-dark text-center p-[.5px] leading-none rounded-l-lg"
                    style={{ width: "80%" }}
                  >
                    80%
                  </div>
                </div>
              </div>
              <div>
                <p className="dark:text-lightest-slate/50 text-dark/60 mb-3">
                  Laravel
                </p>
                <div className="w-full bg-lightest-slate/20 rounded-full">
                  <div
                    className="bg-green/60 text-xs font-medium text-dark text-center p-[.5px] leading-none rounded-l-lg"
                    style={{ width: "70%" }}
                  >
                    70%
                  </div>
                </div>
              </div>

              <div>
                <p className="dark:text-lightest-slate/50 text-dark/60 mb-3">
                  MongoDb
                </p>
                <div className="w-full bg-lightest-slate/20 rounded-full">
                  <div
                    className="bg-green/60 text-xs font-medium text-dark text-center p-[.5px] leading-none rounded-l-lg"
                    style={{ width: "70%" }}
                  >
                    70%
                  </div>
                </div>
              </div>
              <div>
                <p className="dark:text-lightest-slate/50 text-dark/60 mb-3">
                  Javascript (ES6+)
                </p>
                <div className="w-full bg-lightest-slate/20 rounded-full">
                  <div
                    className="bg-green/60 text-xs font-medium text-dark text-center p-[.5px] leading-none rounded-l-lg"
                    style={{ width: "85%" }}
                  >
                    85%
                  </div>
                </div>
              </div>
              <div>
                <p className="dark:text-lightest-slate/50 text-dark/60 mb-3">
                  Reactjs
                </p>
                <div className="w-full bg-lightest-slate/20 rounded-full">
                  <div
                    className="bg-green/60 text-xs font-medium text-dark text-center p-[.5px] leading-none rounded-l-lg"
                    style={{ width: "85%" }}
                  >
                    85%
                  </div>
                </div>
              </div>
              <div>
                <p className="dark:text-lightest-slate/50 text-dark/60 mb-3">
                  HTML/CSS
                </p>
                <div className="w-full bg-lightest-slate/20 rounded-full">
                  <div
                    className="bg-green/60 text-xs font-medium text-dark text-center p-[.5px] leading-none rounded-l-lg"
                    style={{ width: "90%" }}
                  >
                    90%
                  </div>
                </div>
              </div>
              <div>
                <p className="dark:text-lightest-slate/50 text-dark/60 mb-3">
                  Taiwlindcss
                </p>
                <div className="w-full bg-lightest-slate/20 rounded-full">
                  <div
                    className="bg-green/60 text-xs font-medium text-dark text-center p-[.5px] leading-none rounded-l-lg"
                    style={{ width: "90%" }}
                  >
                    90%
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="grid grid-cols-4 gap-6 mt-12">
        <Profiles />
        <div className="col-span-2">
          <ContactCard />
        </div>
        <CredentialsCard />
      </section>
    </main>
  );
};

export default Page;
