import ContactCard from "@/components/ui/ContactCard";
import CredentialsCard from "@/components/ui/CredentialsCard";
import Profiles from "@/components/ui/Profiles";
import { bg1, icon2, star } from "@/utils/assets";
import { RobotoMono } from "@/utils/fonts";
import Image from "next/image";
import React from "react";
import { BsCodeSlash, BsLayoutWtf } from "react-icons/bs";
import { LuLayoutPanelLeft } from "react-icons/lu";

const page = () => {
  return (
    <main className="lg:my-16 my-10">
      <section className="grid lg:grid-cols-3 grid-cols-1 lg:gap-6 gap-0">
        <div className="card">
          <Image src={bg1} alt="bg1" className="bg-card" />

          <ul className="flex flex-col lg:h-full h-96 justify-between md:px-16 px-8 lg:py-20 py-14">
            <li className="flex items-center gap-6 z-10">
              <BsLayoutWtf className="text-[2rem] text-lightest-slate" />
              <p className="text-lightest-slate font-medium text-lg">
                WEB DESIGNING
              </p>
            </li>
            <li className="flex items-center gap-6 z-10">
              <LuLayoutPanelLeft className="text-[2rem] text-lightest-slate" />
              <p className="text-lightest-slate font-medium text-lg">
                MOBILE DESIGNING
              </p>
            </li>
            <li className="flex items-center gap-6 z-10">
              <BsCodeSlash className="text-[2rem] text-lightest-slate" />
              <p className="text-lightest-slate font-medium text-lg">
                DEVELOPMENT
              </p>
            </li>
          </ul>
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
              My Offerings
            </h2>
            <Image
              src={star}
              alt="star"
              width={50}
              height={50}
              className="object-cover"
            />
          </div>

          <div className="card md:px-6 px-3 md:pb-6 pb-3 pt-28 mt-10">
            <Image src={bg1} alt="bg1" className="bg-card" />
            <Image
              src={icon2}
              alt="icon2"
              className="absolute top-0 left-8 duration-300 ease-linear"
            />

            <div className="grid md:grid-cols-2 grid-cols-1 gap-4">
              <div className="card p-4">
                <Image src={bg1} alt="bg1" className="bg-card" />
                <h1
                  className={`${RobotoMono.className} text-lightest-slate/40 font-semibold`}
                >
                  WEB DESIGNING
                </h1>
                <p className="text-lightest-slate mt-3 leading-6 text-[15px]">
                  Sit amet luctussd fav venenatis, lectus magna fringilla inis
                  urna, porttitor asna rhoncus dolor purus non enim aberitin
                  praesent in elementum sahas facilisis leo, vel fringilla est
                  etisam dignissim.
                </p>
              </div>
              <div className="card p-4">
                <Image src={bg1} alt="bg1" className="bg-card" />
                <h1
                  className={`${RobotoMono.className} text-lightest-slate/40 font-semibold`}
                >
                  MOBILE DESIGNING
                </h1>
                <p className="text-lightest-slate mt-3 leading-6 text-[15px]">
                  Sit amet luctussd fav venenatis, lectus magna fringilla inis
                  urna, porttitor asna rhoncus dolor purus non enim aberitin
                  praesent in elementum sahas facilisis leo, vel fringilla est
                  etisam dignissim.
                </p>
              </div>
              <div className="card p-4 md:col-span-2 col-span-1">
                <Image src={bg1} alt="bg1" className="bg-card" />
                <h1
                  className={`${RobotoMono.className} text-lightest-slate/40 font-semibold`}
                >
                  DEVELOPMENT
                </h1>
                <p className="text-lightest-slate mt-3 leading-6 text-[15px]">
                  Sit amet luctussd fav venenatis, lectus magna fringilla inis
                  urna, porttitor asna rhoncus dolor purus non enim aberitin
                  praesent in elementum sahas facilisis leo, vel fringilla est
                  etisam dignissim.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-6 mt-12">
        <div className="lg:order-1 order-1">
          <Profiles />
        </div>
        <div className="md:col-span-2 col-span-1 lg:order-2 order-3">
          <ContactCard />
        </div>
        <div className="lg:order-3 order-2">
          <CredentialsCard />
        </div>
      </section>
    </main>
  );
};

export default page;
