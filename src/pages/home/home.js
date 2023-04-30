import React, { useCallback, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useTheme } from 'styled-components';
import { useNavigate } from 'react-router-dom';

import Networks from 'components/networks/networks';
import ActiveBar from 'components/activeBar/activeBar';
import Navbar from 'components/navbar/navbar';
import HamburgerMenu from 'components/hamburgerMenu/hamburgerMenu';
import SwitchDarkMode from 'components/switchDarkMode/switchDarkMode';
import Loader from 'components/loader/loader';
import SmallPostIt from 'components/SmallPostIt/smallPostIt';

import {
  LEFT_SIDE,
  RIGHT_SIDE,
  NAVBAR_ABOUT,
  ORANGE_COLOR,
  PURPLE_COLOR,
  THOMAS,
  MAUC,
  ITSME_ARROW,
  WATCH_ARROW,
  REYES_PULL,
} from 'constants/constants';

import {
  NAVBAR_ITEMS_LEFT,
  NAVBAR_ITEMS_RIGHT,
} from 'data/navbarData';
import {
  NETWORK_ITEMS_LEFT,
  NETWORK_ITEMS_RIGHT,
} from 'data/networkData';

import LeftSide from 'parts/leftSide/leftSide';
import RightSide from 'parts/rightSide/rightSide';

import useDeviceType from 'hooks/useDeviceType';
import useScrollDetection from 'hooks/useScroll';

import {
  Background,
  Main,
  ImgWrapper,
  Img,
  PageWrapper,
  Header,
  TextWrapper,
  GradientWrapper,
  ColorGradient,
  LargeTransparentText,
  MainSection,
} from './home.style';

function Home({ isDarkMode, setIsDarkMode, setSelectedTheme, activeSide }) {
  const [activeSection, setActiveSection] = useState(NAVBAR_ABOUT);
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const { isMobile } = useDeviceType();
  const { itsMeArrow, smallArrow, backgroundCharacter } = useTheme();
  const [t] = useTranslation();
  const isScrolling = useScrollDetection();

  const handleClick = useCallback(() => {
    setLoading('swap');

    setTimeout(() => {
      navigate(activeSide === LEFT_SIDE ? '/mauc' : '/thomas');
      setActiveSection(NAVBAR_ABOUT);
      document.title =
        activeSide === LEFT_SIDE
          ? t('title.mauc')
          : t('title.thomas');
      const checkbox = document.querySelector('input[type="checkbox"]');
      checkbox.checked = false;
    }, 500);
  }, [activeSide, navigate, t]);

  useEffect(() => {
    setSelectedTheme(
      activeSide === LEFT_SIDE ? ORANGE_COLOR : PURPLE_COLOR
    );
  }, [activeSide, setSelectedTheme])

  const navbarItems =
    activeSide === LEFT_SIDE ? NAVBAR_ITEMS_LEFT : NAVBAR_ITEMS_RIGHT;
  const networkItems =
    activeSide === LEFT_SIDE ? NETWORK_ITEMS_LEFT : NETWORK_ITEMS_RIGHT;

  return (
    <Background>
      <ImgWrapper isScrolling={isScrolling}>
        <Img
          activeSide={activeSide}
          alt="An image to represent me in the current side"
          src={backgroundCharacter}
        />
        {!isMobile &&
          <div id='smallPostIt-Wrapper'>
            <SmallPostIt svgSRC={itsMeArrow} type={ITSME_ARROW} activeSide={activeSide} />
            {activeSide === LEFT_SIDE && <SmallPostIt svgSRC={smallArrow} type={WATCH_ARROW} />}
            {activeSide === RIGHT_SIDE && <SmallPostIt svgSRC={smallArrow} type={REYES_PULL} />}
          </div>
        }
      </ImgWrapper>
      <Main>
        <PageWrapper>
          <Header>
            <TextWrapper isScrolling={isScrolling}>
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
            </TextWrapper>
          </Header>
          <MainSection>
            {activeSide === LEFT_SIDE ? (
              <LeftSide activeSection={activeSection} />
            ) : (
              <RightSide activeSection={activeSection} />
            )}
          </MainSection>
        </PageWrapper>
        {isMobile ? (
          <HamburgerMenu
            activeSection={activeSection}
            setActiveSection={setActiveSection}
            navbarItems={navbarItems}
            networkItems={networkItems}
          />

        ) : (
          <Navbar
            activeSection={activeSection}
            setActiveSection={setActiveSection}
            navbarItems={navbarItems}
          />
        )}
        {!isMobile && <Networks networkItems={networkItems} />}
        <SwitchDarkMode
          aria-label="Toggle dark mode"
          isDarkMode={isDarkMode}
          setIsDarkMode={setIsDarkMode}
          setLoading={setLoading}
        />
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
