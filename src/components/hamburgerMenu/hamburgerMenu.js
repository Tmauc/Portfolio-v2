import React, { useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { useTheme } from 'styled-components';

import SwitchLang from 'components/switchLang/switchLang';
import Networks from 'components/networks/networks';

import useActiveNavbarLink from 'hooks/useActiveNavbarLink';

import {
  Label,
  Input,
  SpanMenu,
  SpanHamburgerMenu,
  Wrapper,
  NetworksWrapper,
  Ul,
  Li,
  A,
} from './hamburgerMenu.style';

function HamburgerMenu({ navbarItems }) {
  const [t] = useTranslation();
  const { networkItems } = useTheme();
  const handleLinkClick = (event) => {
    event.preventDefault();

    const link = event.target.closest('a');

    if (link && link.hasAttribute('href')) {
      const sectionId = link.getAttribute('href').slice(1);
      var elmntToView = document.getElementById(sectionId);
      elmntToView.scrollIntoView();
      const checkbox = document.querySelector('input[type="checkbox"]');
      checkbox.checked = false;
    }
  };

  const navbarRef = useRef(null);
  const activeSection = useActiveNavbarLink(navbarRef);

  return (
    <Label>
      <Input title="HamburgerMenu" type="checkbox" />
      <SpanMenu>
        <SpanHamburgerMenu />
      </SpanMenu>
      <Wrapper id="wrapper" ref={navbarRef}>
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
          <SwitchLang isMobile={true} />
        </Ul>
        <NetworksWrapper>
          <Networks networkItems={networkItems} />
        </NetworksWrapper>
      </Wrapper>
    </Label>
  );
}

export default HamburgerMenu;
