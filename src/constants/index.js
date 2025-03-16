import {
    contact,
    bash,
    c,
    csharp,
    cplusplus,
    css,
    emacs,
    git,
    github,
    html,
    javascript,
    lisp,
    mongodb,
    nodejs,
    python,
    react,
    tailwindcss,
    linkedin,
    unity,
    webgl,
} from "../assets/icons";

import {
    dreamScape,
    lastHope,
    lastStand,
    Nascat,
    Itch,
    LingGo,
    website
} from "../assets/images"
export const skills = [
    {
        imageUrl: bash,
        name: "Bash",
        type: "Programming Language",
    },
    {
        imageUrl: c,
        name: "C",
        type: "Programming Language",
    },
    {
        imageUrl: csharp,
        name: "C#",
        type: "Programming Language",
    },
    {
        imageUrl: cplusplus,
        name: "C++",
        type: "Programming Language",
    },
    {
        imageUrl: css,
        name: "CSS",
        type: "Frontend",
    },
    {
        imageUrl: emacs,
        name: "GNU Emacs",
        type: "IDE",
    },
    {
        imageUrl: git,
        name: "Git",
        type: "Version Control",
    },
    {
        imageUrl: github,
        name: "GitHub",
        type: "Version Control",
    },
    {
        imageUrl: html,
        name: "HTML",
        type: "Frontend",
    },
    {
        imageUrl: javascript,
        name: "JavaScript",
        type: "Frontend",
    },
    {
        imageUrl: lisp,
        name: "Emacs Lisp",
        type: "Programming Language",
    },
    {
        imageUrl: mongodb,
        name: "MongoDB",
        type: "Database",
    },
    {
        imageUrl: nodejs,
        name: "Node.js",
        type: "Backend",
    },
    {
        imageUrl: python,
        name: "Python",
        type: "Programming Language",
    },
    {
        imageUrl: react,
        name: "React",
        type: "Frontend",
    },
    {
        imageUrl: tailwindcss,
        name: "Tailwind CSS",
        type: "Frontend",
    },
    {
        imageUrl: unity,
        name: "Unity",
        type: "Game Engine",
    },
    {
        imageUrl: webgl,
        name: "WebGL",
        type: "API",
    },
];

// export const experiences = [
//     {
//         title: "React.js Developer",
//         company_name: "Starbucks",
//         icon: ,
//         iconBg: "#accbe1",
//         date: "March 2020 - April 2021",
//         points: [
//             "Developing and maintaining web applications using React.js and other related technologies.",
//             "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
//             "Implementing responsive design and ensuring cross-browser compatibility.",
//             "Participating in code reviews and providing constructive feedback to other developers.",
//         ],
//     },

// ];

export const socialLinks = [
    {
        name: 'Contact',
        iconUrl: contact,
        link: '/contact',
    },
    {
        name: 'GitHub',
        iconUrl: github,
        link: 'https://github.com/irist0419',
    },
    {
        name: 'LinkedIn',
        iconUrl: linkedin,
        link: 'https://www.linkedin.com/in/iris-tsui-647383208',
    }
];

export const gprojects = [
    {
        imageUrl: dreamScape,
        name: 'Project : DreamScape',
        description: "An AAA-like project by Aspen Game Studio.  Worked on player input systems and quest implementation towards Steam launch as programmer. Add our game to your wishlist on Steam!",
        link: 'https://store.steampowered.com/app/3569570/Project__DreamScape/',

    },
    {

        //iconUrl: space,
        imageUrl: lastHope,
        name: 'Last Hope:Return',
        description: "A space-themed third person parkour game made in Unity by a duo effort.  Built a custom character controller for movements, game physics and character animation. Deployed on my itch.io page.",
        link: 'https://irist0419.itch.io/last-hope-return',
    },
    {
        //iconUrl: gun,
        imageUrl:lastStand,
        name: 'Last Stand',
        description: "A Unity first person shooter game incorporating Llama model (active server required) for AI NPC interaction by 3 students. It is deployed and featured on UCLA ACM Studios itch.io page.",
        link: 'https://subramaniamsatyen.itch.io/last-stand',
    },
    {
        //iconUrl: cat,
        imageUrl: Nascat,
        name: 'NASCAT',
        description: 'As a duo, we developed a mini-game with given script tiny-graphics.js and WebGL knowledge. It is deployed with GitHub Pages and ready to play! ',
        link: 'https://irist0419.github.io/UCLA-CS-174A/',
    },
    {
        imageUrl: Itch,
        name: 'Game Jam works',
        description: 'You can find my game jam works on my itch.io profile:)',
        link: 'https://irist0419.itch.io/'
    },
];

export const wprojects = [
    {
        //iconUrl: website,
        imageUrl: website,
        name: 'Personal Website',
        description: "This is the very website you are looking at! Built based on @javascirptmastery's tutorial on YouTube, but with my own twist. GitHub repo linked below.",
        link: 'https://github.com/irist0419/my-website',
    },
    {
        //iconUrl: bird,
        imageUrl: LingGo,
        name: 'LingGo',
        description: 'A web application for Linguistics(Phonetics) learners made by a group of 5. The linked GitHub repo includes a ReadMe on how to launch LingGo on your local machine.',
        link: 'https://github.com/irist0419/UCLA-CS-35L',
    },

];