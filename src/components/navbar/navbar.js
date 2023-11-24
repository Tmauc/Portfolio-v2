import React, { useRef, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';

import SwitchLang from 'components/switchLang/switchLang';

import useActiveNavbarLink from 'hooks/useActiveNavbarLink';

import {
  LEFT_SIDE,
  THOMAS,
  MAUC,
} from 'constants/constants';

import {
  Nav,
  NavItem,
  NavLink,
  Ul,
  Span,
  GradientWrapper,
  ColorGradient,
  Separator,
} from './navbar.style';

function Navbar({ navbarItems, setLoading, activeSide, isShort }) {
  const navigate = useNavigate();
  const [t] = useTranslation();
  const navbarRef = useRef(null);
  const activeSection = useActiveNavbarLink(navbarRef);

  const handleClick = useCallback(() => {
    setLoading('swap');

    setTimeout(() => {
      navigate(activeSide === LEFT_SIDE ? '/mauc' : '/thomas');
      document.title =
        activeSide === LEFT_SIDE ? t('title.mauc') : t('title.thomas');
    }, 500);
  }, [activeSide, navigate, setLoading, t]);

  return (
    <Nav aria-label="Main Navigation" role="navigation" ref={navbarRef} isShort={isShort}>
      {!isShort &&
        <GradientWrapper>
          <ColorGradient
            onClick={handleClick}
            aria-label={`Go to ${activeSide === LEFT_SIDE ? THOMAS : MAUC
              }'s side page`}
            tabIndex={0}
          >
            {activeSide === LEFT_SIDE ? THOMAS : MAUC}
          </ColorGradient>
        </GradientWrapper>
      }
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
        <Separator />
        <SwitchLang />
      </Ul>
    </Nav>
  );
}

export default Navbar;
