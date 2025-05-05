'use client';

import Image from "next/image";
import TimeLine from "./components/TimeLine/TimeLine";
import WritingText from "./components/Text/WritingText";
import SplashScreen from "./components/SplashScreen/SplashScreen";
import Link from "next/link";
import { GithubLogo, LinkedinLogo, Mailbox } from "@phosphor-icons/react";
import Particles from "./components/Overlays/Particles";

export default function Home(): React.ReactElement {

  return (
    <>
      <Particles />
      <SplashScreen />
      
      <div className="flex flex-col p-6 z-10 justify-center">
        <div className="flex gap-4 mb-6 p-1 sm:p-2 md:p-5 justify-center">
          <Image src="/image.png" alt="avatar" width={60} height={60} className="rounded-full w-16 h-16" />
          <div className="flex flex-col gap-0.75">
            <h1 className="text-3xl font-bold">
              <WritingText texts={['Hello, moi c\'est Simon !', 'À la recherche d\'une alternance']} />
            </h1>
            <p>Développeur Web Full-Stack en alternance</p>
          </div>
        </div>

        <div className="flex gap-4 justify-center mb-15">
          <Link href="https://linkedin.com/in/simon-picot"><LinkedinLogo size={24}/></Link>
          <Link href="https://github.com/simonpct"><GithubLogo size={24}/></Link>
          <Link href="mailto:contact@simonpct.fr"><Mailbox size={24}/></Link>
        </div>

        <TimeLine />
      </div>
    </>
  );
}
