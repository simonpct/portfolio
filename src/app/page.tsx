import Image from "next/image";
import TimeLine from "./components/TimeLine/TimeLine";
import WritingText from "./components/Text/WritingText";
import SplashScreen from "./components/SplashScreen/SplashScreen";

export default function Home() {
  return (
    <>
      <SplashScreen />
      
      <div className="flex flex-col p-6">
        <div className="flex gap-4 mb-12 p-1 sm:p-2 md:p-5">
          <Image src="/image.png" alt="avatar" width={60} height={60} className="rounded-full w-16 h-16" />
          <div className="flex flex-col gap-0.75">
            <h1 className="text-3xl font-bold">
              <WritingText texts={['Hello, moi c\'est Simon !', 'Développeur Web en alternance']} />
            </h1>
            <p>Développeur Web en alternance</p>
          </div>
        </div>

        <TimeLine />
      </div>
    </>
  );
}
