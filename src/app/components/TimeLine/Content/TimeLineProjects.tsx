import { TimeLineProject } from "@/app/data";
import Image from "next/image";
import { Calendar } from "@phosphor-icons/react";

export const TimeLineProjects: React.FC<{ projects: readonly TimeLineProject[]; }> = ({ projects }) => {
  return (
    <div className="flex flex-wrap gap-10">
      {projects.map((project, index) => (
        <div key={index} className="flex flex-col gap-2">
          <Image src={`/assets/${project.logo}`} alt={project.title} width={300} height={150} className="rounded-lg object-cover h-[150px]"/>
          <h4 className="font-semibold">{project.content}</h4>
      
          <p>{project.title}</p>
          <div className="flex items-center gap-2 -mt-1 text-gray-600">
            <Calendar />
            {project.date}
          </div>
          
          <h5 className="font-semibold mt-2">Objectifs</h5>
          <ul className="list-disc list-inside">
            {project.objectifs.map((objectif, index) => (  
              <li key={index}>{objectif}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};