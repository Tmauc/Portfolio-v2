import leftPNG from 'assets/imgs/thomas.webp';
import rightPNG from 'assets/imgs/mauc.webp';
import multipleCircleWhite from 'assets/svg/multipleCircleWhite.svg';
import multipleCircleGrey from 'assets/svg/multipleCircleGrey.svg';
import OrangeArrow from 'assets/svg/orangeArrow.svg';
import PurpleArrow from 'assets/svg/purpleArrow.svg';
import SmallOrangeArrow from 'assets/svg/smallOrangeArrow.svg';
import SmallPurpleArrow from 'assets/svg/smallPurpleArrow.svg';

const orangeColors = {
  primary: 'hsl(32, 100%, 50%)',
  primaryDark: 'hsl(47, 100%, 50%)',
  primaryLight: 'hsl(53, 100%, 50%)',

  invertPrimary: 'hsl(284, 100%, 50%)',
  invertPrimaryDark: 'hsl(299, 100%, 50%)',

  content: 'MAUC',
  itsMeArrow: OrangeArrow,
  smallArrow: SmallOrangeArrow,
  backgroundCharacter: leftPNG,
  backgroundUrl:
    "data:image/svg+xml,%3csvg width='100%25' height='100%25' xmlns='http://www.w3.org/2000/svg'%3e%3crect width='100%25' height='100%25' fill='none' stroke='%23FF8800FF' stroke-width='1' stroke-dasharray='21%2c 23%2c 11' stroke-dashoffset='37' stroke-linecap='square'/%3e%3c/svg%3e",
};

const purpleColors = {
  primary: 'hsl(284, 100%, 50%)',
  primaryDark: 'hsl(299, 100%, 50%)',
  primaryLight: 'hsl(319, 100%, 50%)',

  invertPrimary: 'hsl(32, 100%, 50%)',
  invertPrimaryDark: 'hsl(47, 100%, 50%)',

  content: 'THOMAS',
  itsMeArrow: PurpleArrow,
  smallArrow: SmallPurpleArrow,
  backgroundCharacter: rightPNG,
  backgroundUrl:
    "data:image/svg+xml,%3csvg width='100%25' height='100%25' xmlns='http://www.w3.org/2000/svg'%3e%3crect width='100%25' height='100%25' fill='none' stroke='%23bb00ffFF' stroke-width='1' stroke-dasharray='21%2c 23%2c 11' stroke-dashoffset='37' stroke-linecap='square'/%3e%3c/svg%3e",
};

const lightColors = {
  secondary: 'hsl(0, 0%, 95%)',
  tertiary: 'hsl(0, 0%, 30%)',
  textColor: 'hsl(0, 0%, 4%)',

  secondaryBackground: 'hsla(0, 0%, 93%, 0.6)',
  bottomBorder: 'hsl(0, 0%, 88%)',
  contrastBorder: 'hsl(0, 0%, 80%)',
  transparentBackground02: 'hsla(0, 0%, 100%, 0.1)',
  transparentBackground06: 'hsla(0, 0%, 100%, 0.6)',

  backgroundMultipleCircle: multipleCircleGrey,
};

const darkColors = {
  secondary: 'hsl(0, 0%, 7%)',
  tertiary: 'hsl(0, 0%, 95%)',
  textColor: 'hsl(37, 17%, 91%)',

  secondaryBackground: 'hsla(0, 0%, 7%, 0.6)',
  bottomBorder: 'hsl(0, 0%, 15%)',
  contrastBorder: 'hsl(0, 0%, 38%)',
  transparentBackground02: 'hsla(0, 0%, 0%, 0.2)',
  transparentBackground06: 'hsla(0, 0%, 0%, 0.6)',

  backgroundMultipleCircle: multipleCircleWhite,
};

const defaultColors = {
  text: {
    black: 'hsl(0, 0%, 7%)',
    white: 'hsl(37, 17%, 91%)',
  },
  socialMedia: {
    twitter: 'hsl(198, 91%, 62%)',
    instagram: 'hsl(340, 75%, 54%)',
    tiktok: 'hsl(178, 100%, 47%)',
    linkedin: 'hsl(199, 85%, 36%)',
    github: 'hsl(0, 0%, 20%)',
    youtube: 'hsl(4, 71%, 55%)',
    twitch: 'hsl(261, 43%, 45%)',
  },
  transparent: {
    black01: 'hsla(0, 0%, 0%, 0.1)',
    black03: 'hsla(0, 0%, 0%, 1)',
    white02: 'hsl(0, 0%, 100%, 0.2)',
    white05: 'hsl(0, 0%, 100%, 0.5)',
  },
  sky: {
    sky: 'hsl(199, 100%, 76%)',
    nightSky: 'hsl(215, 54%, 65%)',
    nightSkyLight: 'hsl(215, 55%, 65%)',
    stars: 'hsl(0, 0%, 100%)',
    sun: 'hsl(33, 100%, 79%)',
    moon: 'hsl(39, 100%, 85%)',
    crater: 'hsl(36, 59%, 78%)',
  },
};

export const themes = {
  orange: {
    lightTheme: {
      ...defaultColors,
      ...orangeColors,
      ...lightColors,
    },
    darkTheme: {
      ...defaultColors,
      ...orangeColors,
      ...darkColors,
    },
  },
  purple: {
    lightTheme: {
      ...defaultColors,
      ...purpleColors,
      ...lightColors,
    },
    darkTheme: {
      ...defaultColors,
      ...purpleColors,
      ...darkColors,
    },
  },
};
