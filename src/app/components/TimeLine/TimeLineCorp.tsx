import Image from "next/image";
import { TimeLineContentCorp } from "../../data";
import { Calendar } from "@phosphor-icons/react";

export const TimeLineCorp: React.FC<{ corp: TimeLineContentCorp; }> = ({ corp }) => {
  return (
    <div className="flex flex-col gap-2 mb-5">
      <div className="flex items-center gap-3">
        <Image src={`/assets/${corp.logo}`} alt={corp.title} width={25} height={25} className="rounded-full"/>
        <h4 className="font-semibold">{corp.content}</h4>
      </div>
      
      <p>{corp.title}</p>
      <div className="flex items-center gap-2 -mt-1 text-gray-600">
        <Calendar />
        {corp.date}
      </div>
      
      <h5 className="font-semibold mt-2">Objectifs</h5>
      <ul className="list-disc list-inside">
        {corp.objectifs.map((objectif, index) => (  
          <li key={index}>{objectif}</li>
        ))}
      </ul>
    </div>
  );
};