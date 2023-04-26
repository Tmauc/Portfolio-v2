import {
  NAVBAR_ABOUT,
  NAVBAR_PHOTOGRAPHY,
  NAVBAR_CONTACT,
  NAVBAR_PROJECTS,
  NAVBAR_RESUME,
  NAVBAR_SKILLS,
  NAVBAR_TWITCH,
} from './constants';

export const NAVBAR_ITEMS_LEFT = [
  {
    href: '#contact',
    label: 'navbar.contact',
    activeConstant: NAVBAR_CONTACT,
    tabIndex: 0,
  },
  {
    href: '#projects',
    label: 'navbar.projects',
    activeConstant: NAVBAR_PROJECTS,
    disabled: true,
    tabIndex: 0,
  },
  {
    href: '#resume',
    label: 'navbar.resume',
    activeConstant: NAVBAR_RESUME,
    disabled: true,
    tabIndex: 0,
  },
  {
    href: '#skills',
    label: 'navbar.skills',
    activeConstant: NAVBAR_SKILLS,
    disabled: true,
    tabIndex: 0,
  },
  {
    href: '#about',
    label: 'navbar.about',
    activeConstant: NAVBAR_ABOUT,
    tabIndex: 0,
  },
];

export const NAVBAR_ITEMS_RIGHT = [
  {
    href: '#contact',
    label: 'navbar.contact',
    activeConstant: NAVBAR_CONTACT,
    tabIndex: 0,
  },
  {
    href: '#photography',
    label: 'navbar.photography',
    activeConstant: NAVBAR_PHOTOGRAPHY,
    disabled: true,
    tabIndex: 0,
  },
  {
    href: '#twitch',
    label: 'navbar.twitch',
    activeConstant: NAVBAR_TWITCH,
    tabIndex: 0,
  },
  {
    href: '#about',
    label: 'navbar.about',
    activeConstant: NAVBAR_ABOUT,
    tabIndex: 0,
  },
];
