import { CardInfoI, LinkVariant, NavigationElementI, SocialIconInfoI } from "../models/Common.model";

export const navigationElements: NavigationElementI[] = [
    {
        id: 1,
        linkTo: '/',
        name: 'Home',
        active: false,
        variant: LinkVariant.Nav,
        icon: null
    },
    {
        id: 2,
        linkTo: '/about',
        name: 'About',
        active: false,
        variant: LinkVariant.Nav,
        icon: null
    },
    {
        id: 3,
        linkTo: '/projects',
        name: 'Projects',
        active: false,
        variant: LinkVariant.Nav,
        icon: null
    }
];

export const exploreMyWork = {
    linkTo: '/projects',
    name: 'Explore My Work',
    active: false,
    variant: LinkVariant.Button
};

export const socialLinks: SocialIconInfoI[] = [
    {
        href: '8840264533',
        name: 'Phone'
    },
    {
        href: 'bhagyampandey@gmail.com',
        name: 'Mail'
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

export const experiences: CardInfoI = {
    id: 'experience',
    header: 'Experience',
    list: [
        'Software Engineer - Infrrd (2023 - Present)',
        'Trainee Software Engineer - Infrrd (2022 - 2023)'
    ]
};

export const projects: CardInfoI[] = [
    {
        id: "doodle",
        header: "Doodle (Multiplayer Drawing Game) | Angular 18, TypeScript, SCSS, WebSocket",
        list: [
            "Real-time multiplayer drawing and guessing game.",
            "Interactive room with canvas, user list, score panel, and chatbox.",
            "Live updates and scoring via WebSocket integration."
        ]
    }, 
    {
        id: "musicPlayer",
        header: "Music Player App | React, TypeScript, REST API",
        list: [
        "Music player with playlist browsing, song search, and management.",
        "Responsive, accessible UI built with React.",
        "Seamless navigation between tracks, albums, and artists."
        ]
    }
]

export const aboutDescription = [
    'Software Engineer with nearly 3 years of experience in building responsive and interactive applications using Angular, React, TypeScript, and SCSS.',
    'Passionate about crafting intuitive UIs, optimizing workflows, and delivering scalable solutions while adhering to Agile methodologies.'
]