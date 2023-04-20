import React from 'react';
import * as constants from 'constants/constants';
import { Nav, NavItem, NavLink, Ul, Span } from './navbar.style';

function Navbar({ activeSide, activeSection, setActiveSection }) {
  const handleLinkClick = (event) => {
    event.preventDefault();

    const link = event.target.closest('a');

    if (link && link.hasAttribute('href')) {
      const sectionId = link.getAttribute('href').slice(1);
      setActiveSection(sectionId);
    }
  };

  return (
    <>
      {activeSide === constants.LEFT_SIDE && (
        <Nav aria-label="Main Navigation" role="navigation">
          <Ul>
            <NavItem>
              <NavLink
                href="#contact"
                active={activeSection === constants.NAVBAR_CONTACT}
                orange
                onClick={handleLinkClick}
                tabIndex="5"
              >
                <Span>Contact</Span>
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                href="#projects"
                active={activeSection === constants.NAVBAR_PROJECTS}
                orange
                onClick={handleLinkClick}
                tabIndex="4"
              >
                <Span>Projects</Span>
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                href="#resume"
                active={activeSection === constants.NAVBAR_RESUME}
                orange
                onClick={handleLinkClick}
                tabIndex="3"
              >
                <Span>Resume</Span>
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                href="#skills"
                active={activeSection === constants.NAVBAR_SKILLS}
                orange
                onClick={handleLinkClick}
                tabIndex="2"
              >
                <Span>Skills</Span>
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                href="#about"
                active={activeSection === constants.NAVBAR_ABOUT}
                orange
                onClick={handleLinkClick}
                tabIndex="1"
              >
                <Span>About</Span>
              </NavLink>
            </NavItem>
          </Ul>
        </Nav>
      )}
      {activeSide === constants.RIGHT_SIDE && (
        <Nav aria-label="Main Navigation" role="navigation">
          <Ul>
            <NavItem>
              <NavLink
                href="#contact"
                active={activeSection === constants.NAVBAR_CONTACT}
                purple
                onClick={handleLinkClick}
                tabIndex="4"
              >
                <Span>Contact</Span>
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                href="#photography"
                active={activeSection === constants.NAVBAR_PHOTOGRAPHY}
                purple
                onClick={handleLinkClick}
                tabIndex="3"
              >
                <Span>Photography</Span>
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                href="#twitch"
                active={activeSection === constants.NAVBAR_TWITCH}
                purple
                onClick={handleLinkClick}
                tabIndex="2"
              >
                <Span>Twitch</Span>
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                href="#about"
                active={activeSection === constants.NAVBAR_ABOUT}
                purple
                onClick={handleLinkClick}
                tabIndex="1"
              >
                <Span>About</Span>
              </NavLink>
            </NavItem>
          </Ul>
        </Nav>
      )}
    </>
  );
}

export default Navbar;
