import { bg1, person4, star } from "@/utils/assets";
import { RobotoMono } from "@/utils/fonts";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { BsBoxArrowUpRight, BsCaretRight, BsGithub } from "react-icons/bs";

const page = () => {
  return (
    <main className="lg:my-16 my-10">
      <section className="grid lg:grid-cols-3 grid-cols-1 md:gap-6 gap-0">
        <div className="flex gap-6 lg:flex-col md:flex-row flex-col">
          <div className="card w-full p-5">
            <Image src={bg1} alt="bg1" className="bg-card" />

            <div className="w-full h-72 rounded-30 overflow-hidden relative">
              <Image
                src={person4}
                alt="person4"
                fill
                className="absolute object-cover"
              />
            </div>

            <div className="z-10 relative">
              <h1 className="text-lightest-slate font-semibold text-xl mb-1 mt-6">
                School management
              </h1>
              <p
                className={`${RobotoMono.className} text-green/60 text-[15px] mt-4 z-10 relative`}
              >
                Technologies:
              </p>

              <ul
                className={`${RobotoMono.className} flex flex-wrap text-lightest-slate/50 text-[13px] lg:text-sm mt-2`}
              >
                <li className="flex items-center gap-1 mr-3 mb-1">
                  <BsCaretRight className="text-green text-[12px] " />
                  Next.js
                </li>
                <li className="flex items-center gap-1 mr-3 mb-1">
                  <BsCaretRight className="text-green text-[12px] " /> Next-auth
                </li>
                <li className="flex items-center gap-1 mr-3 mb-1">
                  <BsCaretRight className="text-green text-[12px] " /> MongoDb
                </li>
                <li className="flex items-center gap-1 mr-3 mb-1">
                  <BsCaretRight className="text-green text-[12px] " /> Ant
                  Design
                </li>
              </ul>

              <ul className="flex justify-end text-lightest-slate/50 gap-4 mt-5">
                <li>
                  <Link
                    href="https://github.com/chourafiDev/school-managment-app"
                    legacyBehavior
                  >
                    <a target="_blank" rel="noreferrer">
                      <BsGithub className="text-2xl hover:text-green duration-150 ease-in" />
                    </a>
                  </Link>
                </li>
                <li>
                  <Link
                    href="https://yanerp-app.vercel.app/admin/dashboard"
                    legacyBehavior
                  >
                    <a target="_blank" rel="noreferrer">
                      <BsBoxArrowUpRight className="text-2xl hover:text-green duration-150 ease-in" />
                    </a>
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="card w-full p-5">
            <Image src={bg1} alt="bg1" className="bg-card" />

            <div className="w-full h-72 rounded-30 overflow-hidden relative">
              <Image
                src={person4}
                alt="person4"
                fill
                className="absolute object-cover"
              />
            </div>

            <div className="z-10 relative">
              <h1 className="text-lightest-slate font-semibold text-xl mb-1 mt-6">
                NFT marketplace
              </h1>
              <p
                className={`${RobotoMono.className} text-green/60 text-[15px] mt-4 z-10 relative`}
              >
                Technologies:
              </p>

              <ul
                className={`${RobotoMono.className} flex flex-wrap text-lightest-slate/50 text-[13px] lg:text-sm mt-2`}
              >
                <li className="flex items-center gap-1 mr-3 mb-1">
                  <BsCaretRight className="text-green text-[12px] " />
                  Next.js
                </li>
                <li className="flex items-center gap-1 mr-3 mb-1">
                  <BsCaretRight className="text-green text-[12px] " />{" "}
                  Tailwindcss
                </li>
              </ul>

              <ul className="flex justify-end text-lightest-slate/50 gap-4 mt-5">
                <li>
                  <Link
                    href="https://github.com/chourafiDev/nft-marketplace"
                    legacyBehavior
                  >
                    <a target="_blank" rel="noreferrer">
                      <BsGithub className="text-2xl hover:text-green duration-150 ease-in" />
                    </a>
                  </Link>
                </li>
                <li>
                  <Link
                    href="https://nft-marketplace-five-alpha.vercel.app"
                    legacyBehavior
                  >
                    <a target="_blank" rel="noreferrer">
                      <BsBoxArrowUpRight className="text-2xl hover:text-green duration-150 ease-in" />
                    </a>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="col-span-2">
          <div className="flex items-center justify-center gap-8 lg:mt-0 mt-16">
            <Image
              src={star}
              alt="star"
              width={50}
              height={50}
              className="object-cover"
            />
            <h2 className="font-semibold lg:text-[3rem] md:text-4xl text-center text-[1.75rem] text-lightest-slate">
              All Projects
            </h2>
            <Image
              src={star}
              alt="star"
              width={50}
              height={50}
              className="object-cover"
            />
          </div>

          <div className="grid md:grid-cols-2 grid-cols-1 gap-6 mt-10">
            <div className="card p-5">
              <Image src={bg1} alt="bg1" className="bg-card" />

              <div className="w-full h-72 rounded-30 overflow-hidden relative">
                <Image
                  src={person4}
                  alt="person4"
                  fill
                  className="absolute object-cover"
                />
              </div>

              <div className="z-10 relative">
                <h1 className="text-lightest-slate font-semibold text-xl mb-1 mt-6">
                  Booking
                </h1>
                <p
                  className={`${RobotoMono.className} text-green/60 text-[15px] mt-4 z-10 relative`}
                >
                  Technologies:
                </p>

                <ul
                  className={`${RobotoMono.className} flex flex-wrap text-lightest-slate/50 text-[13px] lg:text-sm mt-2`}
                >
                  <li className="flex items-center gap-1 mr-3 mb-1">
                    <BsCaretRight className="text-green text-[12px] " />
                    React.js
                  </li>
                  <li className="flex items-center gap-1 mr-3 mb-1">
                    <BsCaretRight className="text-green text-[12px] " />
                    Tailwindcss
                  </li>
                  <li className="flex items-center gap-1 mr-3 mb-1">
                    <BsCaretRight className="text-green text-[12px] " /> Redux
                  </li>
                  <li className="flex items-center gap-1 mr-3 mb-1">
                    <BsCaretRight className="text-green text-[12px] " /> Node.js
                    (Express.js)
                  </li>
                  <li className="flex items-center gap-1 mr-3 mb-1">
                    <BsCaretRight className="text-green text-[12px] " /> MongoDb
                  </li>
                </ul>

                <ul className="flex justify-end text-lightest-slate/50 gap-4 mt-5">
                  <li>
                    <Link
                      href="https://github.com/chourafiDev/bookingrooms"
                      legacyBehavior
                    >
                      <a target="_blank" rel="noreferrer">
                        <BsGithub className="text-2xl hover:text-green duration-150 ease-in" />
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="http://bookingrooms.herokuapp.com"
                      legacyBehavior
                    >
                      <a target="_blank" rel="noreferrer">
                        <BsBoxArrowUpRight className="text-2xl hover:text-green duration-150 ease-in" />
                      </a>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>

            <div className="card p-5">
              <Image src={bg1} alt="bg1" className="bg-card" />

              <div className="w-full h-72 rounded-30 overflow-hidden relative">
                <Image
                  src={person4}
                  alt="person4"
                  fill
                  className="absolute object-cover"
                />
              </div>

              <div className="z-10 relative">
                <h1 className="text-lightest-slate font-semibold text-xl mb-1 mt-6">
                  TikTok clone
                </h1>
                <p
                  className={`${RobotoMono.className} text-green/60 text-[15px] mt-4 z-10 relative`}
                >
                  Technologies:
                </p>

                <ul
                  className={`${RobotoMono.className} flex flex-wrap text-lightest-slate/50 text-[13px] lg:text-sm mt-2`}
                >
                  <li className="flex items-center gap-1 mr-3 mb-1">
                    <BsCaretRight className="text-green text-[12px] " />
                    Next.js
                  </li>
                  <li className="flex items-center gap-1 mr-3 mb-1">
                    <BsCaretRight className="text-green text-[12px] " />
                    Typescript
                  </li>
                  <li className="flex items-center gap-1 mr-3 mb-1">
                    <BsCaretRight className="text-green text-[12px] " />
                    MongoDb
                  </li>
                  <li className="flex items-center gap-1 mr-3 mb-1">
                    <BsCaretRight className="text-green text-[12px] " />
                    Tailwindcss
                  </li>
                </ul>

                <ul className="flex justify-end text-lightest-slate/50 gap-4 mt-5">
                  <li>
                    <Link
                      href="https://github.com/chourafiDev/videoly"
                      legacyBehavior
                    >
                      <a target="_blank" rel="noreferrer">
                        <BsGithub className="text-2xl hover:text-green duration-150 ease-in" />
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link href="https://videoly.vercel.app/" legacyBehavior>
                      <a target="_blank" rel="noreferrer">
                        <BsBoxArrowUpRight className="text-2xl hover:text-green duration-150 ease-in" />
                      </a>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>

            <div className="card p-5">
              <Image src={bg1} alt="bg1" className="bg-card" />

              <div className="w-full h-72 rounded-30 overflow-hidden relative">
                <Image
                  src={person4}
                  alt="person4"
                  fill
                  className="absolute object-cover"
                />
              </div>

              <div className="z-10 relative">
                <h1 className="text-lightest-slate font-semibold text-xl mb-1 mt-6">
                  Travel agency
                </h1>
                <p
                  className={`${RobotoMono.className} text-green/60 text-[15px] mt-4 z-10 relative`}
                >
                  Technologies:
                </p>

                <ul
                  className={`${RobotoMono.className} flex flex-wrap text-lightest-slate/50 text-[13px] lg:text-sm mt-2`}
                >
                  <li className="flex items-center gap-1 mr-3 mb-1">
                    <BsCaretRight className="text-green text-[12px] " />
                    Next.js
                  </li>
                  <li className="flex items-center gap-1 mr-3 mb-1">
                    <BsCaretRight className="text-green text-[12px] " />
                    Typescript
                  </li>
                  <li className="flex items-center gap-1 mr-3 mb-1">
                    <BsCaretRight className="text-green text-[12px] " />
                    Tailwindcss
                  </li>
                  <li className="flex items-center gap-1 mr-3 mb-1">
                    <BsCaretRight className="text-green text-[12px] " />
                    Faramer motion
                  </li>
                </ul>

                <ul className="flex justify-end text-lightest-slate/50 gap-4 mt-5">
                  <li>
                    <Link
                      href="https://github.com/chourafiDev/travel_ui"
                      legacyBehavior
                    >
                      <a target="_blank" rel="noreferrer">
                        <BsGithub className="text-2xl hover:text-green duration-150 ease-in" />
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="https://elite-travel.vercel.app/"
                      legacyBehavior
                    >
                      <a target="_blank" rel="noreferrer">
                        <BsBoxArrowUpRight className="text-2xl hover:text-green duration-150 ease-in" />
                      </a>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>

            <div className="card p-5">
              <Image src={bg1} alt="bg1" className="bg-card" />

              <div className="w-full h-72 rounded-30 overflow-hidden relative">
                <Image
                  src={person4}
                  alt="person4"
                  fill
                  className="absolute object-cover"
                />
              </div>

              <div className="z-10 relative">
                <h1 className="text-lightest-slate font-semibold text-xl mb-1 mt-6">
                  Blog app
                </h1>
                <p
                  className={`${RobotoMono.className} text-green/60 text-[15px] mt-4 z-10 relative`}
                >
                  Technologies:
                </p>

                <ul
                  className={`${RobotoMono.className} flex flex-wrap text-lightest-slate/50 text-[13px] lg:text-sm mt-2`}
                >
                  <li className="flex items-center gap-1 mr-3 mb-1">
                    <BsCaretRight className="text-green text-[12px] " />
                    Next.js
                  </li>
                  <li className="flex items-center gap-1 mr-3 mb-1">
                    <BsCaretRight className="text-green text-[12px] " />
                    Next auth
                  </li>
                  <li className="flex items-center gap-1 mr-3 mb-1">
                    <BsCaretRight className="text-green text-[12px] " />
                    Typescript
                  </li>
                  <li className="flex items-center gap-1 mr-3 mb-1">
                    <BsCaretRight className="text-green text-[12px] " />
                    Tailwindcss
                  </li>
                  <li className="flex items-center gap-1 mr-3 mb-1">
                    <BsCaretRight className="text-green text-[12px] " />
                    MongoDb
                  </li>
                  <li className="flex items-center gap-1 mr-3 mb-1">
                    <BsCaretRight className="text-green text-[12px] " />
                    Prisma ORM
                  </li>
                </ul>

                <ul className="flex justify-end text-lightest-slate/50 gap-4 mt-5">
                  <li>
                    <Link
                      href="https://github.com/chourafiDev/blog"
                      legacyBehavior
                    >
                      <a target="_blank" rel="noreferrer">
                        <BsGithub className="text-2xl hover:text-green duration-150 ease-in" />
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link href="https://zonexa.vercel.app/" legacyBehavior>
                      <a target="_blank" rel="noreferrer">
                        <BsBoxArrowUpRight className="text-2xl hover:text-green duration-150 ease-in" />
                      </a>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>

            <div className="card p-5 md:col-span-2 col-span-1">
              <Image src={bg1} alt="bg1" className="bg-card" />

              <div className="w-full h-72 rounded-30 overflow-hidden relative">
                <Image
                  src={person4}
                  alt="person4"
                  fill
                  className="absolute object-cover"
                />
              </div>

              <div className="z-10 relative">
                <h1 className="text-lightest-slate font-semibold text-xl mb-1 mt-6">
                  POS (Point of sale system) app
                </h1>
                <p
                  className={`${RobotoMono.className} text-green/60 text-[15px] mt-4 z-10 relative`}
                >
                  Technologies:
                </p>

                <ul
                  className={`${RobotoMono.className} flex flex-wrap text-lightest-slate/50 text-[13px] lg:text-sm mt-2`}
                >
                  <li className="flex items-center gap-1 mr-3 mb-1">
                    <BsCaretRight className="text-green text-[12px] " />
                    Next.js
                  </li>
                  <li className="flex items-center gap-1 mr-3 mb-1">
                    <BsCaretRight className="text-green text-[12px] " />
                    Next auth
                  </li>
                  <li className="flex items-center gap-1 mr-3 mb-1">
                    <BsCaretRight className="text-green text-[12px] " />
                    Typescript
                  </li>
                  <li className="flex items-center gap-1 mr-3 mb-1">
                    <BsCaretRight className="text-green text-[12px] " />
                    Tailwindcss
                  </li>
                  <li className="flex items-center gap-1 mr-3 mb-1">
                    <BsCaretRight className="text-green text-[12px] " />
                    Node.js (Express.js)
                  </li>
                  <li className="flex items-center gap-1 mr-3 mb-1">
                    <BsCaretRight className="text-green text-[12px] " />
                    MongoDb
                  </li>
                </ul>

                <ul className="flex justify-end text-lightest-slate/50 gap-4 mt-5">
                  <li>
                    <Link
                      href="https://github.com/chourafiDev/POS_RESTAURANT_UI"
                      legacyBehavior
                    >
                      <a target="_blank" rel="noreferrer">
                        <BsGithub className="text-2xl hover:text-green duration-150 ease-in" />
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="https://pos-restaurant-ui.vercel.app/en/dashboard"
                      legacyBehavior
                    >
                      <a target="_blank" rel="noreferrer">
                        <BsBoxArrowUpRight className="text-2xl hover:text-green duration-150 ease-in" />
                      </a>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mt-20">
        <h2 className="md:text-3xl text-2xl text-lightest-slate/60 font-bold text-center">
          Other Noteworthy Projects
        </h2>

        <div className="flex md:flex-row flex-col gap-6 mt-8">
          <div className="card p-6">
            <Image src={bg1} alt="bg1" className="bg-card" />
            <div className="relative z-10">
              <h6 className="text-xl font-semibold text-lightest-slate">
                Simple shopping cart
              </h6>
              <p className="text-lightest-slate/60 text-sm mt-2">
                Building a simple shopping cart using react and redux toolkit
                for state management
              </p>
              <ul
                className={`${RobotoMono.className} flex flex-wrap lg:gap-6 gap-3 text-lightest-slate/30 text-[13px] lg:mt-3 mt-6`}
              >
                <li>React.js</li>
                <li>Styled Components</li>
                <li>Redux Toolkit</li>
              </ul>

              <ul className="flex justify-end text-lightest-slate/50 gap-4 mt-5">
                <li>
                  <Link
                    href="https://github.com/chourafiDev/redux-toolkit-shopping-cart"
                    legacyBehavior
                  >
                    <a target="_blank" rel="noreferrer">
                      <BsGithub className="text-2xl hover:text-green duration-150 ease-in" />
                    </a>
                  </Link>
                </li>
                <li>
                  <Link
                    href="https://shopping-cart-ten-chi.vercel.app/"
                    legacyBehavior
                  >
                    <a target="_blank" rel="noreferrer">
                      <BsBoxArrowUpRight className="text-2xl hover:text-green duration-150 ease-in" />
                    </a>
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="card p-6">
            <Image src={bg1} alt="bg1" className="bg-card" />
            <div className="relative z-10">
              <h6 className="text-xl font-semibold text-lightest-slate">
                Weather app
              </h6>
              <p className="text-lightest-slate/60 text-sm mt-2">
                weather app is provide a possibility to search about the weather
                of most cities in the world
              </p>
              <ul
                className={`${RobotoMono.className} flex flex-wrap lg:gap-6 gap-3 text-lightest-slate/30 text-[13px] lg:mt-3 mt-6`}
              >
                <li>Next.js</li>
                <li>Open Weather api</li>
              </ul>

              <ul className="flex justify-end text-lightest-slate/50 gap-4 mt-5">
                <li>
                  <Link
                    href="https://github.com/chourafiDev/weather-app"
                    legacyBehavior
                  >
                    <a target="_blank" rel="noreferrer">
                      <BsGithub className="text-2xl hover:text-green duration-150 ease-in" />
                    </a>
                  </Link>
                </li>
                <li>
                  <Link
                    href="https://weather-app-delta-roan.vercel.app/"
                    legacyBehavior
                  >
                    <a target="_blank" rel="noreferrer">
                      <BsBoxArrowUpRight className="text-2xl hover:text-green duration-150 ease-in" />
                    </a>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default page;
