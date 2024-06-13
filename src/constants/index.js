import {
    cat,
    contact,
    bird,
    bash,
    c,
    csharp,
    cplusplus,
    css,
    emacs,
    git,
    github,
    gun,
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
    website,
} from "../assets/icons";

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

export const projects = [
    {
        iconUrl: gun,
        theme: 'btn-back-yellow',
        name: 'Last Stand',
        description: "Group project for Game Development class. A Unity first person shooter game incorporating Llama model (active server required) for AI NPC interaction. It is deployed and featured in UCLA ACM Studios itch.io page.",
        link: 'https://subramaniamsatyen.itch.io/last-stand',
    },
    {
        iconUrl: website,
        theme: 'btn-back-blue',
        name: 'Personal Website',
        description: "This is the very website you are looking at! Built on my own based on @javascirptmastery's tutorial on YouTube. GitHub repo linked below.",
        link: 'https://github.com/irist0419/my-website',
    },
    {
        iconUrl: cat,
        theme: 'btn-back-red',
        name: 'NASCAT',
        description: 'Group project for Computer Graphics class. An mini-game developed with given script tiny-graphics.js and WebGL knowledge. It is deployed with GitHub Pages and ready to play! ',
        link: 'https://irist0419.github.io/UCLA-CS-174A/',
    },
    {
        iconUrl: bird,
        theme: 'btn-back-green',
        name: 'LingGo',
        description: 'Group project for Software Construction class. A website for Linguistics learners who are struggling with phonetics/IPA. The linked GitHub repo includes a ReadMe on how to launch LingGo on your local machine.',
        link: 'https://github.com/irist0419/UCLA-CS-35L',
    },
    
];