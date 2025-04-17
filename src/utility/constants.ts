import { CardInfoI, ExperienceInfoI, LinkVariant, NavigationElementI, SocialIconInfoI } from "../models/Common.model";

export const navigationElements: NavigationElementI[] = [
    {
        id: 1,
        linkTo: 'about',
        name: 'About',
        active: false,
        variant: LinkVariant.NavButton
    },
    {
        id: 2,
        linkTo: 'projects',
        name: 'Projects',
        active: false,
        variant: LinkVariant.NavButton
    },
    {
        id: 3,
        linkTo: 'work',
        name: 'Work',
        active: false,
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
        list: "Music player with playlist browsing, song search, and management. Responsive, accessible UI built with React. Seamless navigation between tracks, albums, and artists."
    },
    {
        id: "doodle",
        header: "Doodle (Multiplayer Drawing Game) | Angular 18, TypeScript, SCSS, WebSocket",
        list: "Real-time multiplayer drawing and guessing game. Interactive room with canvas, user list, score panel, and chatbox. Live updates and scoring via WebSocket integration."
    }
]

export const aboutDescription = [
    `Hello there! I'm Bhagyam Pandey, a software engineer passionate about building interactive and responsive digital experiences.`,
    `I am: a forward-thinking innovator who thrives on transforming complex technical challenges into elegant, intuitive digital experiences. I excel at leveraging modern technologies and agile methodologies to drive product strategy, taking initiative and collaborating seamlessly with my team to deliver impactful solutions.`,
    `I strive to: blend creativity with technical excellence to craft user-centric designs that not only solve problems but also enhance user engagement and drive business success. My passion lies in pushing boundaries and continuously refining processes to achieve measurable growth.`,
    `I'm currently open to new opportunities where I can make a significant impact—if you think our visions align, let’s connect!`
]

export const aboutContent = [
    
    `With nearly 3 years of experience, I've partnered with tech companies to develop innovative web applications using React, Angular, TypeScript, Javascript, Tailwind and SCSS. Whether I'm crafting full-featured dashboards, streamlining workflows, or optimizing intuitive UIs.`,
    `I focus on creating scalable solutions that make technology feel natural. When I'm not coding, I'm exploring new tools and techniques to push the boundaries of digital innovation.`
]