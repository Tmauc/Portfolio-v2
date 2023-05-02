import React, { useRef } from 'react';
import { useTranslation } from 'react-i18next';

import useActiveNavbarLink from 'hooks/useActiveNavbarLink';

import SwitchLang from 'components/switchLang/switchLang';

import { Nav, NavItem, NavLink, Ul, Span } from './navbar.style';

function Navbar({ navbarItems }) {
  const [t] = useTranslation();
  const navbarRef = useRef(null);
  const activeSection = useActiveNavbarLink(navbarRef);

  return (
    <Nav aria-label="Main Navigation" role="navigation" ref={navbarRef}>
      <Ul>
        {navbarItems.map((item, index) => (
          <NavItem key={index}>
            <NavLink
              href={item.href}
              active={activeSection === item.activeConstant}
              disabled={item.disabled}
              tabIndex={item.tabIndex}
            >
              <Span>{t(item.label)}</Span>
            </NavLink>
          </NavItem>
        ))}
        <SwitchLang />
      </Ul>
    </Nav>
  );
}

export default Navbar;
