import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import { breakdot } from './assets';

i18n
  // detect user language
  // learn more: https://github.com/i18next/i18next-browser-languageDetector
  .use(LanguageDetector)
  // pass the i18n instance to react-i18next.
  .use(initReactI18next)
  // init i18next
  // for all options read: https://www.i18next.com/overview/configuration-options
  .init({
    debug: true,
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false, // not needed for react as it escapes by default
    },
    resources: {
      en: {
        translation: {
          navbar: {
            About: 'About',
            Projects: 'Projects',
            Contact: 'Contact'
          },
          hero: {
            hi: 'Hi, I\'m',
            title: 'I\'m a Full Stack Developer with experience in many fields.',
            see_my_projects: 'See my projects',
            here: 'Here'
          },
          about: {
            introduction: 'Introduction',
            about_me: 'ABOUT ME',
            description: `I am a Full Stack developer with a Master's Degree in Computational Science and over 8 years of 
            experience working on projects of varying complexity. My recent focus has been on web application 
            development using technologies such as Node.js, React.js, and other related frameworks. 
            Additionally, I have hands-on experience in desktop application development, 
            game development using Unity and Unreal Engine, as well as creating apps and tools for research purposes, 
            such as computational vision, math problem-solving, and data analysis.`,
            description_2: `I am proficient in various languages and technologies, including Java, C, C++, C#, JavaScript, Node.js, 
            React.js, HTML/CSS/SASS/LESS, GraphQL, MongoDB, Unity, Unreal Engine, and MySQL`,
            Frontend_Developer: 'Frontend Developer',
            Backend_Developer: 'Backend Developer',
            Game_Developer: 'Game Developer',
            Research_Developer: 'Research Developer',
          },
          tech: {
            my_skills: 'MY SKILLS',
            technologies: 'Technologies'
          },
          projects: {
            case_studies: 'CASE STUDIES',
            projects: 'PROJECTS',
            description: `Below are some of the projects I have worked on both for companies and individually. 
            Since I have worked on various types of projects, I have decided to show them in the following 3 categories.`,
            more_info: 'MORE INFO',
            games_and_interactive: 'Games and Interactive Applications',
            games_and_interactive_desc: `I have worked on more than 15 video game development and interactive application 
            projects, mainly with Unity, developing for mobile and desktop platforms, and using advanced tools such as VR, 
            HoloLens, Tobii, LeapMotion, and more.`,
            web_applications: 'We Apps',
            web_applications_desc: `I have worked on more than 10 web development projects for professional companies, 
            which include technologies such as HTML, CSS, JavaScript, Node.js, React.js, .NET, MongoDB, SQL Server, MySQL, 
            PHP, and many more.`,
            research_tools: 'Research Tools',
            research_tools_desc: `Lastly, I have also developed multiple research projects, which include application 
            development in C++ with Computer Vision, Machine Learning, Data Analysis, Optimization, and the implementation 
            of Mathematical Models.`,
            games_I_worked: 'Games I\'ve worked',
            super_hack_attack: "Super Hack Attack",
            super_hack_attack_title: "An awesome puzzle-fighting game currently in development.",
            super_hack_attack_desc: `Super Hack Attack is a game I worked on with the independent studio Ectoplasma GS, 
            where I served as the lead developer, being responsible for over 95% of the game's programming, which is 
            developed with Unity and C#. This game is currently in the Demo phase, and preparations are being made to 
            launch it into Early Access. It features a main menu, character selection, environments, power-ups, settings, 
            and gameplay. The game includes 3 environments, 7 characters, and 8 power-ups, as well as special abilities for 
            each character. Although the game demo cannot be shown yet due to its development state, below you can see a 
            simple video showcasing what we currently have in the game. I hope you enjoy it!`,
            breakdot: "BreakDot",
            breakdot_title: "A puzzle game developed by my self in 2016",
            breakdot_desc: `BreakDot is a fast-paced puzzle game that I developed entirely on my own in 2017. It was 
            programmed in Unity 2017 and released on the Google Play Store for Android (currently unavailable). 
            Below, you can watch a video of the game trailer and some screen shoots.`,
            zumoball: "Zumo Ball",
            zumoball_title: "The first game I published, a funny platform adventure!",
            zumoball_desc: `Zumo Ball is the first game I published, which I developed entirely on my own and released 
            in 2015 for mobile devices. This platform adventure uses the mobile's accelerometer to move between platforms. 
            Here you can watch a video of the game in action, also, you can download the demo using the button below. I hope you enjoy it!`,
            pvz: "Plants VS Zombies Test",
            pvz_title: "A Plants VS Zombie test I made in less than 3 days!",
            pvz_desc: `Some time ago, I developed a game test for Plants VS Zombies and decided to include it here. 
            I developed the game in less than 3 days, and it includes 5 types of plants and 5 types of zombies with 4 
            levels and varying difficulty. You can download the demo using the button below. I hope you enjoy it!`,
          },
          experience: {
            done_so_far: 'WHAT I\'VE DONE SO FAR',
            work_experience: 'WORK EXPERIENCE',
            experience_card_1: {
              title: 'Full Stack Developer',
              company: 'Manuvo',
              date_range: 'Jul 2014 - Dic 2014'
            },
            experience_card_2: {
              title: 'Full Stack Developer',
              company: 'Freelance',
              date_range: 'Feb 2015 - May 2020'
            },
            experience_card_3: {
              title: 'Full Stack Developer',
              company: 'Symliv',
              date_range: 'Aug 2021 - Jun 2023'
            },
            experience_card_4: {
              title: 'Backend Developer',
              company: 'Mescalina',
              date_range: 'Jan 2024 - Current Time'
            },
            resume: 'MY RESUME',
            resume_link: 'Oscar_Alejandro_Vitela_Ramirez_Resume.pdf'
          },
          contact: {
            get_in_touch: 'GET IN TOUCH',
            contact: 'Contact',
            name: 'Your Name',
            name_p: 'What\'s your name?',
            email: 'Your Email',
            email_p: 'What\'s your email?',
            message: 'Your Message',
            message_p: 'What\'s your message?',
            send: 'SEND',
            sending: 'SENDING',
            email_fail_message: 'Something went wrong. Please try again.',
            thank_you: 'Thank you. I will get back to you as soon as possible.'
          }
        }
      }
      ,
      es: {
        translation: {
          navbar: {
            About: 'Acerca De',
            Projects: 'Proyectos',
            Contact: 'Contacto'
          },
          hero: {
            hi: 'Soy',
            title: 'Soy un desarrollador Full Stack con experiencia en varios campos',
            see_my_projects: 'Mira mis proyectos',
            here: 'Aquí'
          },
          about: {
            introduction: 'Introducción',
            about_me: 'ACERCA DE MÍ',
            description: `Soy un desarrollador Full stack con Maestria en Ciencias Computacionales y con más de 8 años de
            experiencia trabajando en proyectos de complejidad variada. Mi enfoque reciente ha sido en el desarrollo de 
            aplicaciones web usando tecnologías como Node.js, React.js y otros frameworks relacionados. 
            Además, tengo suficiente experiencia en el desarrollo de aplicaciones de videojuegos usando Unity y Unreal Engine, 
            aplicaciones de escritorio, así como la creación de aplicaciones y herramientas con fines de investigación, 
            como visión computacional, solución de problemas matemáticos y análisis de datos.`,
            description_2: `Me considero ágil y eficiente en varios lenguajes y tecnologías, incluyendo java, C, C++, C#, Javascript, 
            Node.js, React.js, HTML/CSS/SASS/LESS, GraphQL, MongoDB, Unity, Unreal Engine, y MySQL`,
            Frontend_Developer: 'Desarrollo Frontend',
            Backend_Developer: 'Desarrollo Backend',
            Game_Developer: 'Desarrollo de Juegos',
            Research_Developer: 'Desarrollo para Investigación',
          },
          tech: {
            my_skills: 'MIS HABILIDADES',
            technologies: 'Tecnologías'
          },
          projects: {
            case_studies: 'CASOS DE ESTUDIO',
            projects: 'PROYECTOS',
            description: `A continuación dejo algunos de los proyectos en los que he trabajado tanto para empresas como individualmente. 
            Ya que he trabajado en varios tipos diferentes de proyectos, he decidido mostrarlos en las siguientes 3 categorías.`,
            games_and_interactive: 'Juegos y aplicaciones interactivas',
            games_and_interactive_desc: `He trabajado en más de 15 proyectos de desarrollo de videojuegos y aplicaciones interactivas 
            principalmente con Unity, desarrollando tanto para móviles, escritorio y con herramientas avanzadas como VR, Hololens, Tobii, LeapMotion y más.`,
            web_applications: 'Aplicaciones Web',
            web_applications_desc: `He trabajado en más de 10 proyectos de desarrollo web para empresas profesionales los cuales incluyen tecnologías como 
            HTMl, CSS; JavaScript, Node.js, React.js, .NET, MongoDB, SQL Server, MySQL, PHP y muchas más.`,
            research_tools: 'Desarrollo para investigación',
            research_tools_desc: `Por último, también he desarrollado múltiples proyectos con fines de investigación, los cuales incluyen desarrollo de 
            aplicaciones en C++ con Visión Computacional, Aprendizaje de Máquina, Análisis de Datos, Optimización e implementación de modelos Matemáticos`,
            more_info: 'MAS INFO',
            games_I_worked: 'Juegos en los que he Trabajado',
            super_hack_attack: "Super Hack Attack",
            super_hack_attack_title: "Un increíble juego tipo puzzle-fighting que aún se encuentra en desarrollo.",
            super_hack_attack_desc: `Super Hack Attack es un juego en el que he trabajado con el estudio 
            independiente Ectoplasma GS donde trabajé como el desarrollador principal, siendo responsable de más del 95 %
            de la programación del juego, el cual esta desarrollado con Unity y C#. Este juego se encuentra en fase de Demo
            y se están haciendo preparativos para lanzarlo a un estado de Early Access. Cuenta con menu principal, selección de
            personajes, escenarios, power ups, settings y gameplay. El juego cuenta con 3 escenarios, 7 personajes y 8 powerups
            así como habilidades especiales para cada personaje. Si bien no se puede mostrar el demo del juego aún debido a su estado
            en desarrolo, a continuación puedes ver un video sencillo mostrando lo que se tiene actualmente en el juego. ¡Espero que lo disfrutes!`,
            breakdot: "BreakDot",
            breakdot_title: "Un juego de puzzle desarrollado por mí en 2016",
            breakdot_desc: `BreakDot es un juego de puzzles con agilidad que desarrollé completamente solo en el 2017, 
            programado en Unity 2017 y lanzado a la tienda de google play store para Android (actualmente no disponible). A continuación puedes ver
            un video del trailer del juego y también algunas capturas de pantalla. ¡Espero que lo disfrutes!`,
            zumoball: "Zumo Ball",
            zumoball_title: "El primer juego que he publicado, una aventura divertida de plataformas.",
            zumoball_desc: `Zumo Ball es el primer juego que publiqué, lo desarrollé completamente solo lanzandolo en el 2015 para móviles. 
            Esta aventura de plataformas utiliza el acelerometro del móvil para moverte entre plataformas. Aquí puedes ver un video del juego
            en acción, además, Puedes descargar el demo en el botón de abajo. ¡Espero que lo disfrutes!`,
            pvz: "Test de Plantas VS Zombies",
            pvz_title: "Una prueba de Plantas VS Zombies que hice en menos de 3 días!",
            pvz_desc: `Hace tiempo se realicé una prueba de desarrollo del juego de Plantas VS Zombies y decidí incluirlo aquí. 
            El juego lo desarrollé en menos de 3 días e  incluye 5 tipos de plantas y 5 Zombies con 4 niveles y dificultad variable. 
            Puedes descargar el demo en el botón de abajo. ¡Espero que lo disfrutes!`,
          },
          experience: {
            done_so_far: 'LO QUE HE HECHO HASTA AHORA',
            work_experience: 'MI EXPERIENCIA DE TRABAJO',
            experience_card_1: {
              title: 'Desarrollador Full Stack',
              company: 'Manuvo',
              date_range: 'Jul 2014 - Dic 2014'
            },
            experience_card_2: {
              title: 'Desarrollador Full Stack',
              company: 'Freelance',
              date_range: 'Feb 2015 - May 2020'
            },
            experience_card_3: {
              title: 'Desarrollador Full Stack',
              company: 'Symliv',
              date_range: 'Ago 2021 - Jun 2023'
            },
            experience_card_4: {
              title: 'Desarrollador Backend',
              company: 'Mescalina',
              date_range: 'Ene 2024 - Actualidad'
            },
            resume: 'MY CV',
            resume_link: 'Oscar_Alejandro_Vitela_Ramirez_CV.pdf'
          },
          contact: {
            get_in_touch: 'COMUNICATE CONMIGO',
            contact: 'Contacto',
            name: 'Tu Nombre',
            name_p: 'Escribe tu nombre aquí',
            email: 'Tu correo electrónico',
            email_p: 'Escribe tu correo aquí',
            message: 'Tu mensaje',
            message_p: 'Escribe tu mensaje quí',
            send: 'ENVIAR',
            sending: 'ENVIANDO',
            email_fail_message: 'Ocurrió un problema, vuelve a intentarlo.',
            thank_you: 'Gracias. Me pondré en contacto contigo tan pronto como sea posible.'
          }
        }
      }
    }
  });

export default i18n;