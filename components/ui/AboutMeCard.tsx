import { bg1, person4 } from "@/utils/assets";
import { RobotoMono } from "@/utils/fonts";
import Image from "next/image";
import { HiDownload } from "react-icons/hi";

const AboutMeCard = () => {
  return (
    <div className="card md:p-10 p-5 w-full h-full flex md:flex-row flex-col items-center gap-10 group">
      <Image src={bg1} alt="bg1" className="bg-card" />

      <div className="about-me">
        <Image
          src={person4}
          alt="person4"
          fill
          className="absolute object-cover rounded-tl-[30px] rounded-br-[30px]"
        />
      </div>

      <div className="z-10">
        <p className="text-green mb-2 text-sm">Hi, my name is</p>
        <h1 className="text-lightest-slate text-3xl font-bold mb-[.5px]">
          Chourafi
        </h1>
        <h1 className="text-lightest-slate text-3xl font-bold">
          Abdelmonaime.
        </h1>
        <p className="text-lightest-slate/60 mt-4 text-sm">
          I&apos;m a fullstack developer and I build things for the web.
        </p>

        <button
          className={`${RobotoMono.className} btn btn-white bg-gradient flex items-center justify-center gap-3 mt-8`}
        >
          Get my resume <HiDownload />
        </button>
      </div>
    </div>
  );
};

export default AboutMeCard;
