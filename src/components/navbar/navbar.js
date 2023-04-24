import React from 'react';
import { Nav, NavItem, NavLink, Ul, Span } from './navbar.style';

function Navbar({ activeSection, setActiveSection, navbarItems }) {
  const handleLinkClick = (event) => {
    event.preventDefault();

    const link = event.target.closest('a');

    if (link && link.hasAttribute('href')) {
      const sectionId = link.getAttribute('href').slice(1);
      setActiveSection(sectionId);
    }
  };

  return (
    <Nav aria-label="Main Navigation" role="navigation">
      <Ul>
        {navbarItems.map((item, index) => (
          <NavItem key={index}>
            <NavLink
              href={item.href}
              active={activeSection === item.activeConstant}
              onClick={!item.disabled ? handleLinkClick : undefined}
              disabled={item.disabled}
              tabIndex={item.tabIndex}
            >
              <Span>{item.label}</Span>
            </NavLink>
          </NavItem>
        ))}
      </Ul>
    </Nav>
  );
}

export default Navbar;
