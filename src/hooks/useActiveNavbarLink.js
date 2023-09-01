import { useEffect, useState } from 'react';

import { NAVBAR_ABOUT } from 'constants/constants';

function useActiveNavbarLink(navbarRef) {
  const mainSection = document.querySelector("div#mainSection");
  const [activeSection, setActiveSection] = useState(NAVBAR_ABOUT);

  useEffect(() => {
    if (mainSection) {
      function handleScroll() {
        const sections = Array.from(document.querySelectorAll('section[id]'));

        sections.forEach((section) => {
          const sectionTop = section.offsetTop;

          if (mainSection.scrollTop >= sectionTop - 500) {
            setActiveSection(section.getAttribute('id'));
          }
        });
      }

      mainSection.addEventListener('scroll', handleScroll);

      return () => {
        mainSection.removeEventListener('scroll', handleScroll);
      };
    }
  }, [activeSection, mainSection, navbarRef]);
  return activeSection;
}


export default useActiveNavbarLink;
