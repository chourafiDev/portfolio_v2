import { bg1, icon1, person4 } from "@/utils/assets";
import Image from "next/image";
import Link from "next/link";

const ProjectsCard = () => {
  return (
    <Link
      href="/works"
      className="card py-10 md:px-6 px-5 w-full h-full group flex flex-col justify-between"
    >
      <Image src={bg1} alt="bg1" className="bg-card" />

      <h2 className="text-lightest-slate/40 text-center uppercase font-bold text-[22px] mb-[7.3rem]">
        My Works
      </h2>

      <div className="absolute m-auto left-0 right-0 top-0 bottom-16 w-32 h-24 shadow-2xl shadow-dark">
        <Image src={person4} alt="person4" fill className="object-cover" />
      </div>

      <div>
        <p className="text-lightest-slate/60 mb-1 uppercase text-xs">
          Showcase
        </p>
        <p className="text-lightest-slate font-semibold text-xl">Projects</p>
      </div>

      <Image
        src={icon1}
        alt="icon1"
        className="absolute bottom-10 right-8 opacity-20 group-hover:opacity-100 duration-300 ease-linear"
      />
    </Link>
  );
};

export default ProjectsCard;
