import { bg1, hand } from "@/utils/assets";
import Image from "next/image";
import Link from "next/link";

// Components
import AboutMeCard from "@/components/ui/AboutMeCard";
import ContactCard from "@/components/ui/ContactCard";
import ParallaxText from "@/components/ui/ParallaxText";
import Profiles from "@/components/ui/Profiles";
import ProjectsCard from "@/components/ui/ProjectsCard";
import CredentialsCard from "@/components/ui/CredentialsCard";
import ServicesCard from "@/components/ui/ServicesCard";
import ContactsInfoCard from "@/components/ui/ContactsInfoCard";

export default function Home() {
  return (
    <main className="my-16">
      <section className="grid grid-cols-2 gap-6">
        <AboutMeCard />
        <div className="space-y-6">
          <ParallaxText />
          <div className="flex items-center gap-6">
            <CredentialsCard />
            <ProjectsCard />
          </div>
        </div>
      </section>

      <section className="grid grid-cols-4 gap-6 mt-8">
        <ContactsInfoCard />
        <ServicesCard />
        <Profiles />
      </section>

      <section className="grid grid-cols-2 gap-6 mt-8">
        <Link href="/" className="card py-10 px-6 w-full">
          <Image src={bg1} alt="bg1" className="bg-card" />

          <h1 className="text-lightest-slate font-semibold text-xl mb-3">
            Get In Touch
          </h1>
          <p className="text-lightest-slate/60 text-[15px] leading-6">
            Although I’m not currently looking for any new opportunities, my
            inbox is always open. Whether you have a question or just want to
            say hi, I’ll try my best to get back to you!
          </p>

          <Image
            src={hand}
            alt="hand"
            width={90}
            height={90}
            className="absolute bottom-2 right-8 z-10 duration-300 ease-linear move"
          />
        </Link>

        <ContactCard />
      </section>
    </main>
  );
}
