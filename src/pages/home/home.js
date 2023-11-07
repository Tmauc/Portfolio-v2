import React, { useCallback, useEffect, useState, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { useTheme } from 'styled-components';
import { useNavigate } from 'react-router-dom';

import ActiveBar from 'components/activeBar/activeBar';
import Navbar from 'components/navbar/navbar';
import HamburgerMenu from 'components/hamburgerMenu/hamburgerMenu';
import SwitchDarkMode from 'components/switchDarkMode/switchDarkMode';
import Loader from 'components/loader/loader';
import ScrollIndicator from 'components/scrollIndicator/scrollIndicator';
import SmallPostIt from 'components/SmallPostIt/smallPostIt';
import Socials from 'components/socials/socials';
import CustomCursor from 'components/customCursor/customCursor';

import {
  LEFT_SIDE,
  RIGHT_SIDE,
  ORANGE_COLOR,
  PURPLE_COLOR,
  THOMAS,
  MAUC,
  ITSME_ARROW,
  WATCH_ARROW,
  REYES_PULL,
} from 'constants/constants';

import { NAVBAR_ITEMS_LEFT, NAVBAR_ITEMS_RIGHT } from 'data/navbarData';

import LeftSide from 'parts/sides/leftSide';
import RightSide from 'parts/sides/rightSide';

import useDeviceType from 'hooks/useDeviceType';

import {
  Background,
  Main,
  Img,
  PageWrapper,
  Header,
  GradientWrapper,
  ColorGradient,
  LargeTransparentText,
  MainSection,
  MainWrapper,
} from './home.style';

function Home({ isDarkMode, setIsDarkMode, setSelectedTheme, activeSide }) {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const { isMobile, isVertical } = useDeviceType();
  const { itsMeArrow, smallArrow, backgroundCharacter } = useTheme();
  const [t] = useTranslation();
  const mainRef = useRef(null);

  const handleClick = useCallback(() => {
    setLoading('swap');

    setTimeout(() => {
      navigate(activeSide === LEFT_SIDE ? '/mauc' : '/thomas');
      document.title =
        activeSide === LEFT_SIDE ? t('title.mauc') : t('title.thomas');
      const checkbox = document.querySelector('input[type="checkbox"]');
      checkbox.checked = false;
    }, 500);
  }, [activeSide, navigate, t]);

  useEffect(() => {
    setSelectedTheme(activeSide === LEFT_SIDE ? ORANGE_COLOR : PURPLE_COLOR);
  }, [activeSide, setSelectedTheme]);

  const navbarItems =
    activeSide === LEFT_SIDE ? NAVBAR_ITEMS_LEFT : NAVBAR_ITEMS_RIGHT;

  return (
    <Background>
      {!isMobile && <CustomCursor />}
      <Img
        activeSide={activeSide}
        alt="An image to represent me in the current side"
        src={backgroundCharacter}
      />
      <Main>
        <PageWrapper>
          {!isMobile && !isVertical && (
            <div id="smallPostIt-Wrapper">
              <SmallPostIt
                svgSRC={itsMeArrow}
                type={ITSME_ARROW}
                activeSide={activeSide}
              />
              {activeSide === LEFT_SIDE && (
                <SmallPostIt svgSRC={smallArrow} type={WATCH_ARROW} />
              )}
              {activeSide === RIGHT_SIDE && (
                <SmallPostIt svgSRC={smallArrow} type={REYES_PULL} />
              )}
            </div>
          )}
          <Header id="header">
            <GradientWrapper>
              <ColorGradient
                onClick={handleClick}
                aria-label={`Go to ${activeSide === LEFT_SIDE ? THOMAS : MAUC
                  }'s side page`}
                tabIndex={0}
              >
                {activeSide === LEFT_SIDE ? THOMAS : MAUC}
              </ColorGradient>
              <ActiveBar />
            </GradientWrapper>
            <LargeTransparentText>
              {activeSide === LEFT_SIDE ? (
                <p>
                  Front End
                  <br />
                  {t('largeText.developer')}
                </p>
              ) : (
                <p>
                  {t('largeText.contentCreatorPart1')}
                  <br />
                  {t('largeText.contentCreatorPart2')}
                </p>
              )}
            </LargeTransparentText>
          </Header>
          <MainSection id="mainSection" ref={mainRef}>
            <MainWrapper>
              {activeSide === LEFT_SIDE ? <LeftSide /> : <RightSide />}
            </MainWrapper>
          </MainSection>
        </PageWrapper>
        {isMobile ? (
          <HamburgerMenu navbarItems={navbarItems} />
        ) : (
          <Navbar navbarItems={navbarItems} />
        )}
        <SwitchDarkMode
          aria-label="Toggle dark mode"
          isDarkMode={isDarkMode}
          setIsDarkMode={setIsDarkMode}
          setLoading={setLoading}
        />
        {!isMobile && <Socials />}
        <ScrollIndicator mainRef={mainRef} />
        {loading && (
          <Loader
            aria-label="Loader"
            setLoading={setLoading}
            isSwap={loading === 'swap'}
          />
        )}
      </Main>
    </Background>
  );
}
export default Home;
