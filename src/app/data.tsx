import { ArrowFatDown, ArrowFatUp } from "@phosphor-icons/react";
import { KBD } from "./components/Text/KBD";

export type TimeLineContent =
  TimeLineContentText
  | TimeLineContentCorp
  | TimeLineContentReact
  | TimeLineContentSkills
  | TimeLineContentProjects;

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

export type TimeLineContentProjects = {
  readonly type: 'projects';
  readonly projects: readonly TimeLineProject[];
}

export type TimeLineProject = {
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
        content: 'Développeur de 18 ans, curieux et créatif, je suis passionné par l’impact du numérique dans notre quotidien.'
      },
      {
        type: 'text',
        content: 'J’aime concevoir des outils utiles, esthétiques et accessibles, que ce soit pour améliorer les mobilités, l’expérience utilisateur ou l’organisation des équipes.'
      },
      {
        type: 'text',
        content: 'Je suis toujours en quête de nouveaux défis techniques, quel que soit le secteur d’activité.'
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
          'Développement et maintenance d’interfaces web réactives et performantes',
          'Participation à la réflexion produit et à l’amélioration continue',
          'Collaboration en équipe agile avec designers et responsables marketing'
        ]
      },
      {
        type: 'corp',
        title: 'Keolis Grand Nancy - Réseau Stan (Nancy)',
        date: 'juin 2023',
        logo: 'stan.png',
        content: 'Stage volontaire (hors cadre scolaire)',
        objectifs: [
          'Observer et comprendre les enjeux opérationnels liés à la régulation en temps réel des réseaux de transport',
          'Découvrir les outils internes utilisés pour superviser et adapter l\'offre en fonction des aléas',
          'Analyser les canaux et méthodes de communication vers les voyageurs (information perturbation, temps réel, etc.)',
          'Approfondir ma culture des systèmes d\'aide à l\'exploitation et à l\'information voyageurs (SAEIV)'
        ]
      }
    ]
  },
  {
    title: 'Mes projets',
    content: [
      {
        type: 'projects',
        projects: [
          {
            title: 'Cartographie souterraine - Projet OpenStreetMap',
            date: 'mai 2025 (en cours)',
            logo: 'osm.png',
            content: 'Projet personnel',
            objectifs: [
              'Cartographie souterraine des stations de métro et des gares avec OpenStreetMap',
              'Utilisation de la technologie LiDAR pour la capture précise des espaces souterrains',
              'Création de modèles 3D navigables des infrastructures souterraines',
              'Contribution à l\'amélioration de l\'accessibilité des données cartographiques pour les personnes à mobilité réduite'
            ]
          },
          {
            title: 'Application mobilité Nancy',
            date: 'avril-mai 2025 (en cours)',
            logo: 'nancy.png',
            content: 'Projet de développement',
            objectifs: [
              'Développement d\'une application moderne pour remplacer celle des horaires en temps réel des mobilités de Nancy',
              'Intégration des API de transport public pour fournir des informations précises et en temps réel',
              'Conception d\'une interface utilisateur intuitive et accessible pour tous les usagers',
              'Implémentation de fonctionnalités avancées comme les alertes personnalisées et les itinéraires alternatifs'
            ]
          }
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
        content: 'Toujours curieux et motivé, je suis ouvert à de nouvelles opportunités dans le développement web, la tech, ou des secteurs innovants.'
      },
      {
        type: 'text',
        content: 'Envie d’échanger ? Écrivez-moi par mail ou sur LinkedIn. À bientôt peut-être !'
      }
    ]
  }
];