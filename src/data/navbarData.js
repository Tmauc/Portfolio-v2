import {
  NAVBAR_ABOUT,
  NAVBAR_PROJECTS,
  NAVBAR_RESUME,
  NAVBAR_SKILLS,
  NAVBAR_TWITCH,
  NAVBAR_OBS,
} from 'constants/constants';

export const NAVBAR_ITEMS_LEFT = [
  {
    href: '#about',
    label: 'navbar.about',
    activeConstant: NAVBAR_ABOUT,
    tabIndex: 0,
  },
  {
    href: '#projects',
    label: 'navbar.projects',
    activeConstant: NAVBAR_PROJECTS,
    tabIndex: 0,
  },
  {
    href: '#skills',
    label: 'navbar.skills',
    activeConstant: NAVBAR_SKILLS,
    tabIndex: 0,
  },
  {
    href: '#resume',
    label: 'navbar.resume',
    activeConstant: NAVBAR_RESUME,
    tabIndex: 0,
  },
];

export const NAVBAR_ITEMS_RIGHT = [
  {
    href: '#about',
    label: 'navbar.about',
    activeConstant: NAVBAR_ABOUT,
    tabIndex: 0,
  },
  {
    href: '#obs',
    label: 'navbar.obs',
    activeConstant: NAVBAR_OBS,
    tabIndex: 0,
  },
  {
    href: '#twitch',
    label: 'navbar.twitch',
    activeConstant: NAVBAR_TWITCH,
    tabIndex: 0,
  },
  /*{
    href: '#photography',
    label: 'navbar.photography',
    activeConstant: NAVBAR_PHOTOGRAPHY,
    disabled: true,
    tabIndex: 0,
  },*/
];
