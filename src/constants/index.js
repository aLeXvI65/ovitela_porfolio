import {
  frontend,
  backend,
  gamepad,
  prototyping,
  javascript,
  javascript_info,
  typescript,
  typescript_info,
  html,
  html_info,
  css,
  css_info,
  reactjs,
  reactjs_info,
  redux,
  tailwind,
  nodejs,
  nodejs_info,
  git,
  figma,
  cpp,
  cpp_info,
  graphql,
  graphql_info,
  superHackAttack,
  breakdot,
  zumo,
  pvz,
  movie,
  nyeusi,
  space,
  coverhunt,
  dcc,
  kelhel,
  microverse,
  csharp,
  sqlserver,
  sqlserver_info,
  csharp_info,
  unity,
  unity_info,
  unreal,
  unreal_info,
  mysql,
  mysql_info,
  java,
  java_info,
} from '../assets';

export const navLinks = [
  {
    id: 'about',
    title: 'About',
  },
  {
    id: 'projects',
    title: 'Projects',
  },
  {
    id: 'contact',
    title: 'Contact',
  },
];

const services = [
  {
    title: 'Frontend_Developer',
    icon: frontend,
  },
  {
    title: 'Backend_Developer',
    icon: backend,
  },
  {
    title: 'Game_Developer',
    icon: gamepad,
  },
  {
    title: 'Research_Developer',
    icon: prototyping,
  },
];

const technologies = [
  {
    name: 'HTML 5',
    icon: html,
    infoIcon: html_info,
  },
  {
    name: 'CSS 3',
    icon: css,
    infoIcon: css_info,
  },
  {
    name: 'JavaScript',
    icon: javascript,
    infoIcon: javascript_info,
  },
  {
    name: 'TypeScript',
    icon: typescript,
    infoIcon: typescript_info,
  },
  {
    name: 'React JS',
    icon: reactjs,
    infoIcon: reactjs_info,
  },
  {
    name: 'Unity',
    icon: unity,
    infoIcon: unity_info,
  },
  {
    name: 'Unreal',
    icon: unreal,
    infoIcon: unreal_info,
  },
  {
    name: 'Node JS',
    icon: nodejs,
    infoIcon: nodejs_info,
  },
  {
    name: 'SQL Server',
    icon: sqlserver,
    infoIcon: sqlserver_info,
  },
  {
    name: 'graphql',
    icon: graphql,
    infoIcon: graphql_info,
  },
  {
    name: 'C#',
    icon: csharp,
    infoIcon: csharp_info,
  },
  {
    name: 'MySQL',
    icon: mysql,
    infoIcon: mysql_info,
  },
  {
    name: 'java',
    icon: java,
    infoIcon: java_info,
  },
  {
    name: 'cpp',
    icon: cpp,
    infoIcon: cpp_info,
  },
];

const experiences = [
  {
    title: 'experience_card_1',
    company_name: 'Manuvo',
    icon: coverhunt,
    iconBg: '#333333',
    date: 'Jul 2014 - Dic 2014',
  },
  {
    title: 'experience_card_2',
    company_name: 'Freelance',
    icon: microverse,
    iconBg: '#333333',
    date: 'Feb 2015 - May 2020',
  },
  {
    title: 'experience_card_3',
    company_name: 'Symliv',
    icon: kelhel,
    iconBg: '#333333',
    date: 'Aug 2021 - Jun 2023',
  },
  {
    title: 'experience_card_4',
    company_name: 'Mescalina',
    icon: dcc,
    iconBg: '#333333',
    date: 'Jan 2024 - Current Time',
  },
];

const projectsGames = [
  {
    id: 'project-1',
    name: 'Super Hack Attack',
    description: 'super_hack_attack_title',
    tags: [
      {
        name: 'unity',
        color: 'blue-text-gradient',
      },
      {
        name: 'C#',
        color: 'green-text-gradient',
      },
    ],
    image: superHackAttack,
    repo: '#',
    demo: '/super_hack_attack',
    data: {
      title: 'super_hack_attack',
      video: ''
    }
  },
  {
    id: 'project-2',
    name: 'BreakDot',
    description:
      'breakdot_title',
    tags: [
      {
        name: 'unity',
        color: 'blue-text-gradient',
      },
      {
        name: 'C#',
        color: 'green-text-gradient',
      },
    ],
    image: breakdot,
    repo: '#',
    demo: '/breakdot',
    data: {
      title: 'super_hack_attack',
      video: 'https://www.youtube.com/watch?v=gZBLx_ptKro'
    }
  },
  {
    id: 'project-3',
    name: 'Zumo Ball',
    description: 'zumoball_title',
    tags: [
      {
        name: 'unity',
        color: 'blue-text-gradient',
      },
      {
        name: 'C#',
        color: 'green-text-gradient',
      },
    ],
    image: zumo,
    repo: '#',
    demo: '/zumo_ball',
    download_demo: '/assets/projects/demos/ZumoBall_Demo_PC.zip',
  },
  {
    id: 'project-3',
    name: 'Plant VS Zombies test',
    description: 'pvz_title',
    tags: [
      {
        name: 'unity',
        color: 'blue-text-gradient',
      },
      {
        name: 'C#',
        color: 'green-text-gradient',
      },
    ],
    image: pvz,
    repo: '#',
    demo: '/pvz_demo',
    download_demo: '/assets/projects/demos/PlatsVsZombies_Test_PC.zip',
  },
  // {
  //   id: 'project-4',
  //   name: 'Movie Metro',
  //   description: `A single-page application that allows users to search for any movie or show's ratings and its details.`,
  //   tags: [
  //     {
  //       name: 'nextjs',
  //       color: 'blue-text-gradient',
  //     },
  //     {
  //       name: 'supabase',
  //       color: 'green-text-gradient',
  //     },
  //     {
  //       name: 'css',
  //       color: 'pink-text-gradient',
  //     },
  //   ],
  //   image: movie,
  //   repo: 'https://github.com/shaqdeff/Movie-Metro',
  //   demo: 'https://movie-metro.netlify.app/',
  // },
  // {
  //   id: 'project-5',
  //   name: 'Nyeusi Fest Site',
  //   description:
  //     'This is a demo concert website for a music festival called Nyeusi.',
  //   tags: [
  //     {
  //       name: 'nextjs',
  //       color: 'blue-text-gradient',
  //     },
  //     {
  //       name: 'supabase',
  //       color: 'green-text-gradient',
  //     },
  //     {
  //       name: 'css',
  //       color: 'pink-text-gradient',
  //     },
  //   ],
  //   image: nyeusi,
  //   repo: 'https://github.com/shaqdeff/Nyeusi-Fest-Site',
  //   demo: 'https://shaqdeff.github.io/Nyeusi-Fest-Site/',
  // },
];

export { services, technologies, experiences, projectsGames };
