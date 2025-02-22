import { LinkVariant, NavigationElementI, SocialIconInfoI } from "../models/Common.model";

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
        href: 'https://github.com/Bhagyam-1',
        name: 'Github'
    },
    {
        href: 'https://www.linkedin.com/in/bhagyam-pandey-869669192/',
        name: 'Linkedin'
    },
    {
        href: '',
        name: 'Mail'
    },
    {
        href: 'https://leetcode.com/u/clownsdarkness/',
        name: 'Leetcode'
    }
];

export const skills = [
    'Angular, React, TypeScript, JavaScript, SCSS',
    'UI/UX Design, Responsive Design',
    'Figma, Git, Postman',
    'Agile, Scrum'
];

export const experiences = [
    'Software Engineer - Infrrd (2023 - Present)',
    'Trainee Software Engineer - Infrrd (2022 - 2023)'
];