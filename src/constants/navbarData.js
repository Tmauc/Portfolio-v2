import {
  NAVBAR_ABOUT,
  NAVBAR_PHOTOGRAPHY,
  NAVBAR_CONTACT,
  NAVBAR_PROJECTS,
  NAVBAR_RESUME,
  NAVBAR_SKILLS,
  NAVBAR_TWITCH,
} from "./constants";

export const NAVBAR_ITEMS_LEFT = [
  {
    href: '#contact',
    label: 'Contact',
    activeConstant: NAVBAR_CONTACT,
    tabIndex: 5,
  },
  {
    href: '#projects',
    label: 'Projects',
    activeConstant: NAVBAR_PROJECTS,
    disabled: true,
    tabIndex: 4,
  },
  {
    href: '#resume',
    label: 'Resume',
    activeConstant: NAVBAR_RESUME,
    disabled: true,
    tabIndex: 3,
  },
  {
    href: '#skills',
    label: 'Skills',
    activeConstant: NAVBAR_SKILLS,
    disabled: true,
    tabIndex: 2,
  },
  {
    href: '#about',
    label: 'About',
    activeConstant: NAVBAR_ABOUT,
    tabIndex: 1,
  },
];

export const NAVBAR_ITEMS_RIGHT = [
  {
    href: '#contact',
    label: 'Contact',
    activeConstant: NAVBAR_CONTACT,
    tabIndex: 4,
  },
  {
    href: '#photography',
    label: 'Photography',
    activeConstant: NAVBAR_PHOTOGRAPHY,
    disabled: true,
    tabIndex: 3,
  },
  {
    href: '#twitch',
    label: 'Twitch',
    activeConstant: NAVBAR_TWITCH,
    tabIndex: 2,
  },
  {
    href: '#about',
    label: 'About',
    activeConstant: NAVBAR_ABOUT,
    tabIndex: 1,
  },
];