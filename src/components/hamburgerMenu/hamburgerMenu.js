import React from 'react';
import { useTranslation } from 'react-i18next';

import {
  Label,
  Input,
  SpanMenu,
  SpanHamburgerMenu,
  Wrapper,
  Ul,
  Li,
  A,
} from './hamburgerMenu.style';

function HamburgerMenu({ activeSection, setActiveSection, navbarItems }) {
  const [t] = useTranslation();
  const handleLinkClick = (event) => {
    event.preventDefault();

    const link = event.target.closest('a');

    if (link && link.hasAttribute('href')) {
      const sectionId = link.getAttribute('href').slice(1);
      setActiveSection(sectionId);
      const checkbox = document.querySelector('input[type="checkbox"]');
      checkbox.checked = false;
    }
  };

  return (
    <Label>
      <Input title="HamburgerMenu" type="checkbox" />
      <SpanMenu>
        <SpanHamburgerMenu />
      </SpanMenu>
      <Wrapper id="wrapper">
        <Ul>
          {navbarItems.map((item, index) => (
            <Li key={index}>
              <A
                href={item.href}
                active={activeSection === item.activeConstant}
                onClick={!item.disabled ? handleLinkClick : undefined}
                disabled={item.disabled}
                tabIndex={item.tabIndex}
              >
                {t(item.label)}
              </A>
            </Li>
          ))}
        </Ul>
      </Wrapper>
    </Label>
  );
}

export default HamburgerMenu;
