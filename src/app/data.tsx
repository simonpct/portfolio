import { ArrowFatDown, ArrowFatUp } from "@phosphor-icons/react";
import { KBD } from "./components/Text/KBD";

export type TimeLineContent = TimeLineContentText | TimeLineContentCorp | TimeLineContentReact | TimeLineContentSkills;

export type TimeLineContentText = {
  readonly type: 'text';
  readonly content: string;
}

export type TimeLineContentReact = {
  readonly type: 'react';
  readonly content: () => React.ReactNode;
}

export type TimeLineContentCorp = {
  readonly type: 'corp';
  readonly title: string;
  readonly logo: string;
  readonly content: string;
  readonly objectifs: readonly string[];
  readonly date: string;
}

export type TimeLineContentSkills = {
  readonly type: 'skills';
  readonly content: string;
  readonly skills: readonly TimeLineSkill[];
}

export type TimeLineSkill = {
  readonly name: string;
  readonly icon: string;
  readonly level: number;
}

export interface TimeLineItemData {
  readonly title: string;
  readonly type?: 'title' | 'corp';
  readonly content?: readonly TimeLineContent[];
}

export const timeLineData: readonly TimeLineItemData[] = [
  {
    title: 'Mon parcours',
    type: 'title',
    content: [
      {
        type: 'react',
        content: () => (
          <div className="flex flex-col gap-2">
            <p className="italic">Utilise <KBD><ArrowFatUp weight="bold" /></KBD> et <KBD><ArrowFatDown weight="bold" /></KBD> pour naviguer dans la timeline.</p>
            <p className="italic">Ou appuie sur les arrêts pour naviguer.</p>
          </div>
        )
      }
    ]
  },
  {
    title: 'Qui suis-je ?',
    content: [
      {
        type: 'text',
        content: '18 ans et toutes mes dents, je suis passionné par les mobilités publiques et les transports en commun.'
      },
      {
        type: 'text',
        content: 'Souriant, dynamique et créatif, je déborde d’envie de rendre les transports plus intelligents, accessibles et attractifs.'
      }
    ]
  },
  {
    title: 'Ma formation',
    content: [
      {
        type: 'corp',
        title: 'CESI Nancy',
        date: 'oct. 2024 / juil. 2027',
        logo: 'cesi.png',
        content: 'Bachelor Concepteur Développeur d\'application (BAC+3)',
        objectifs: [
          'Concevoir et développer des applications web modernes et performantes',
          'Maitriser les dernières technologies web et les meilleures pratiques de développement',
          'Collaborer en équipe pour créer des solutions innovantes'
        ]
      }
    ]
  },
  {
    title: 'Mon expérience',
    content: [
      {
        type: 'corp',
        title: 'TheGiftsClub - Paris',
        date: 'oct. 2024 / juil. 2025',
        logo: 'thegiftsclub.png',
        content: 'Développeur web (contrat d\'alternance)',
        objectifs: [
          'Concevoir et développer des applications web modernes et performantes',
          'Maitriser les dernières technologies web et les meilleures pratiques de développement',
          'Collaborer en équipe pour créer des solutions innovantes'
        ]
      },
      {
        type: 'corp',
        title: 'Keolis Grand Nancy - Réseau Stan (Nancy)',
        date: 'juin 2023',
        logo: 'stan.png',
        content: 'Stage volontaire (hors cadre scolaire)',
        objectifs: [
          'Concevoir et développer des applications web modernes et performantes',
          'Maitriser les dernières technologies web et les meilleures pratiques de développement',
          'Collaborer en équipe pour créer des solutions innovantes'
        ]
      }
    ]
  },
  {
    title: 'Mes compétences',
    content: [
      {
        type: 'skills',
        content: 'Techniques',
        skills: [
          { name: 'React', icon: 'react', level: 4 },
          { name: 'Next.js', icon: 'next.js', level: 4 },
          { name: 'TypeScript', icon: 'typescript', level: 4 },
          { name: 'Node.js', icon: 'node.js', level: 4 },
          { name: 'Git', icon: 'git', level: 4 },
        ]
      },
      {
        type: 'skills',
        content: 'Bureautique',
        skills: [
          { name: 'Figma', icon: 'figma', level: 4 },
          { name: 'Trello', icon: 'trello', level: 4 },
          { name: 'Notion', icon: 'notion', level: 4 }
        ]
      }
    ]
  },
  {
    title: 'Et après ?',
    type: 'title',
    content: [
      {
        type: 'text',
        content: 'On se voit peut-être ? Contactez-moi par mail ou sur LinkedIn !'
      },
      {
        type: 'text',
        content: 'Je serais ravi de travailler avec vous !'
      }
    ]
  }
];