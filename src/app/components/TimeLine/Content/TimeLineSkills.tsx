import { TimeLineSkill } from "@/app/data";
import Image from "next/image"

export default function TimeLineSkills({ content, skills }: { content: string, skills: readonly TimeLineSkill[] }): React.ReactElement {
  return (
    <div className="mb-4">
      <h2 className="font-medium mb-4">{content}</h2>
      <ul className="flex flex-col gap-2.5">
        {skills.map((skill, index) => (
          <li key={index} className="flex items-center gap-2">
            <Image src={`https://cdn.simpleicons.org/${skill.icon}`} alt={skill.name} width={24} height={24} />
            <h3 className="font-medium">{skill.name}</h3>

            <div className="relative w-16 h-2">
              <div className="absolute inset-0 rounded-full bg-gray-200 w-16"></div>
              <div className="absolute inset-0 rounded-full bg-[#C82973]" style={{width: `${Math.round(64 / 5 * skill.level)}px`}}></div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}