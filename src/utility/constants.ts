import { CardInfoI, ExperienceInfoI, LinkVariant, NavigationElementI, SocialIconInfoI } from "../models/Common.model";

export const navigationElements: NavigationElementI[] = [
    {
        id: 1,
        linkTo: 'about',
        name: 'About',
        variant: LinkVariant.NavButton
    },
    {
        id: 2,
        linkTo: 'projects',
        name: 'Projects',
        variant: LinkVariant.NavButton
    },
    {
        id: 3,
        linkTo: 'work',
        name: 'Work',
        variant: LinkVariant.NavButton
    },
    // {
    //     id: 4,
    //     linkTo: 'contact',
    //     name: 'Contact',
    //     active: false,
    //     variant: LinkVariant.NavButton
    // }
];

export const socialLinks: SocialIconInfoI[] = [
    {
        href: '8840264533',
        name: 'Phone Number'
    },
    {
        href: 'bhagyampandey@gmail.com',
        name: 'E-Mail'
    },
    {
        href: 'https://github.com/Bhagyam-1',
        name: 'Github'
    },
    {
        href: 'https://www.linkedin.com/in/bhagyam-pandey-869669192/',
        name: 'Linkedin'
    },
    {
        href: 'https://leetcode.com/u/clownsdarkness/',
        name: 'Leetcode'
    }
];

export const skills: CardInfoI = {
    id: 'skills',
    header: 'Skills',
    list: [
        'Angular, React, TypeScript, JavaScript, SCSS',
        'UI/UX Design, Responsive Design',
        'Figma, Git, Postman',
        'Agile, Scrum'
    ]
};

export const experiences: ExperienceInfoI[] = [
    {
        id: '1',
        header: 'Infrrd',
        list: {
            position: 'Software Engineer',
            timeLine: `08/'23 - Present`,
            workInfo: [
                "Developed a User and Region Dashboard with full CRUD functionality, reducing onboarding time by 40%.",
                "Optimized AI-driven dashboards, improving performance by 35% and reducing screen lag.",
                "Built UI components for automating AI agent workflows, enhancing task sequencing.",
                "Streamlined configuration with a front-end UI, reducing client-reported errors by 25%."
            ]
        }
    },
    {
        id: '2',
        header: 'Infrrd',
        list: {
            position: 'Trainee Software Engineer',
            timeLine: `07/'22 - 07/'23`,
            workInfo: [
                "Designed and implemented an Annotation Tool for document categorization.",
                "Developed a responsive UI to improve document navigation across devices."
            ]
        }
    }
];

export const projects: CardInfoI[] = [
    {
        id: "musicPlayer",
        header: "Music Player App | React, TypeScript, REST API",
        list: "Music player with playlist browsing, song search, and management. Responsive, accessible UI built with React. Seamless navigation between tracks, albums, and artists.",
        url: "https://song-sphere-gold.vercel.app/"
    },
    {
        id: "omnispace",
        header: "Omnispace | Next.js, TypeScript, REST API, WebSocket",
        list: "Omnispace is an all-in-one application designed to bring everything you need into a single platform. Whether you want to chat, share updates, explore new connections, or stay informed with the latest news across multiple categories and languages, Omnispace has you covered.",
        url: "https://omnispace-indol.vercel.app/"
    },
    {
        id: "doodle",
        header: "Doodle (Multiplayer Drawing Game) | Angular 18, TypeScript, WebSocket",
        list: "Real-time multiplayer drawing and guessing game. Interactive room with canvas, user list, score panel, and chatbox. Live updates and scoring via WebSocket integration."
    }
]

export const aboutDescription = [
    `Hi, I'm Bhagyam Pandey — a software engineer passionate about creating interactive, user-centric digital experiences.`,
    `I transform complex challenges into elegant solutions, leveraging modern technologies and agile practices to deliver impactful products. Blending creativity with technical excellence, I strive to craft designs that enhance engagement and drive business success.`,
    `I'm currently open to new opportunities where I can make a significant impact—if you think our visions align, let's connect!`
]