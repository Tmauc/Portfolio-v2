import {
  FaTwitch,
  FaLinkedin,
  FaGithub,
  FaYoutube,
  FaInstagram,
  FaTiktok,
  FaDiscord,
} from 'react-icons/fa';

import { MdBento } from 'react-icons/md';

import { FaXTwitter } from 'react-icons/fa6';

export const MAUC_ITEMS = [
  {
    name: 'YouTube',
    url: 'https://www.youtube.com/channel/UCLoRQsaPSD1QFqoHbxxX-CA',
    icon: <FaYoutube />,
    color: 'hsl(4, 71%, 55%)',
    className: 'youtube',
  },
  {
    name: 'Bento',
    url: 'https://bento.me/mauc',
    icon: <MdBento />,
    color: 'hsl(227, 87%, 68%)',
    className: 'bento',
  },
  {
    name: 'Instagram',
    url: 'https://www.instagram.com/t.mauc/',
    icon: <FaInstagram />,
    color: 'hsl(340, 75%, 54%)',
    className: 'instagram',
  },
  {
    name: 'X',
    url: 'https://x.com/MaucSama',
    icon: <FaXTwitter />,
    color: 'hsl(198, 91%, 62%)',
    className: 'x',
  },
  {
    name: 'TikTok',
    url: 'https://www.tiktok.com/@maucsama',
    icon: <FaTiktok />,
    color: 'hsl(0, 0%, 0%)',
    className: 'tiktok',
  },
  {
    name: 'Twitch',
    url: 'https://www.twitch.tv/maucsama',
    icon: <FaTwitch />,
    color: 'hsl(261, 43%, 45%)',
    className: 'twitch',
  },
  {
    name: 'Discord',
    url: 'https://github.com/Tmauc',
    icon: <FaDiscord />,
    color: 'hsl(224, 60%, 65%)',
    className: 'discord',
  },
];

export const THOMAS_ITEMS = [
  {
    name: 'Linkedin',
    url: 'https://www.linkedin.com/in/tmauc/',
    icon: <FaLinkedin />,
    color: 'hsl(199, 85%, 36%)',
    className: 'linkedin',
  },
  {
    name: 'Bento',
    url: 'https://bento.me/mauc',
    icon: <MdBento />,
    color: 'hsl(227, 87%, 68%)',
    className: 'bento',
  },
  {
    name: 'GitHub',
    url: 'https://github.com/Tmauc',
    icon: <FaGithub />,
    color: 'hsl(0, 0%, 20%)',
    className: 'github',
  },
  {
    name: 'Discord',
    url: 'https://github.com/Tmauc',
    icon: <FaDiscord />,
    color: 'hsl(224, 60%, 65%)',
    className: 'discord',
  },
  {
    name: 'Twitch',
    url: 'https://www.twitch.tv/maucsama',
    icon: <FaTwitch />,
    color: 'hsl(261, 43%, 45%)',
    className: 'twitch',
  },
];
