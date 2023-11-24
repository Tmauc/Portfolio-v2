import { useState } from 'react';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useLenis } from '@studio-freight/react-lenis'

import { NAVBAR_ABOUT } from 'constants/constants';

function useActiveNavbarLink() {
  const [activeSection, setActiveSection] = useState(NAVBAR_ABOUT);

  const calcSectionTop = (section) => {
    if (section.id === 'header') {
      return section.offsetTop;
    } else {
      return section.offsetTop + window.innerWidth / 2;
    }
  }

  const lenis = useLenis(({ scroll }) => {
    ScrollTrigger.update();
    const sections = Array.from(document.querySelectorAll('section[id]'));

    sections.forEach((section) => {
      const sectionTop = calcSectionTop(section);

      if (scroll >= sectionTop) {
        setActiveSection(section.getAttribute('id'));
      }
    });
  })
  return { lenis, activeSection };
}

export default useActiveNavbarLink;
