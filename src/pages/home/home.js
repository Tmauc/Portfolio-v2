import React, { useCallback, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useTheme } from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { gsap } from "gsap";

import ActiveBar from 'components/activeBar/activeBar';
import Navbar from 'components/navbar/navbar';
import HamburgerMenu from 'components/hamburgerMenu/hamburgerMenu';
import Loader from 'components/loader/loader';
import ScrollIndicator from 'components/scrollIndicator/scrollIndicator';
import SmallPostIt from 'components/SmallPostIt/smallPostIt';
import Socials from 'components/socials/socials';
import CustomCursor from 'components/customCursor/customCursor';
import Available from 'components/available/available';

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
  Header,
  HeaderWrapper,
  GradientWrapper,
  ColorGradient,
  LargeTransparentText,
} from './home.style';

function Home({ setSelectedTheme, activeSide }) {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const { isMobile, isVertical } = useDeviceType();
  const { itsMeArrow, smallArrow, backgroundCharacter } = useTheme();
  const [t] = useTranslation();

  const handleClick = useCallback(() => {
    setLoading('swap');

    setTimeout(() => {
      navigate(activeSide === LEFT_SIDE ? '/mauc' : '/thomas');
      document.title =
        activeSide === LEFT_SIDE ? t('title.mauc') : t('title.thomas');
    }, 500);
  }, [activeSide, navigate, t]);

  useEffect(() => {
    setSelectedTheme(activeSide === LEFT_SIDE ? ORANGE_COLOR : PURPLE_COLOR);
  }, [activeSide, setSelectedTheme]);

  useEffect(() => {
    gsap.set('.navbar-fixed', {
      opacity: 0,
    })

    const tl = gsap.timeline({
      scrollTrigger: {
        start: 'top+=700',
        end: '+=100',
        toggleActions: 'play none none reverse',
        scrub: .5
      }
    })

    tl.to('.navbar-fixed', {
      opacity: 1,
    })
  }, []);

  const navbarItems =
    activeSide === LEFT_SIDE ? NAVBAR_ITEMS_LEFT : NAVBAR_ITEMS_RIGHT;

  return (
    <Background>
      {!isMobile && <CustomCursor />}
      <div className='navbar-fixed'>
        {isMobile ? (
          <HamburgerMenu navbarItems={navbarItems} />
        ) : (
          <Navbar navbarItems={navbarItems} setLoading={setLoading} activeSide={activeSide} />
        )}
      </div>
      <Header id="header">
        <Img
          activeSide={activeSide}
          alt="An image to represent me in the current side"
          src={backgroundCharacter}
        />
        {!isMobile && !isVertical && (
          <>
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
          </>
        )}
        <HeaderWrapper>
          <div className='InfoWrapper'>
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
            <div className='navWrapper'>
              <Navbar
                navbarItems={navbarItems}
                setLoading={setLoading}
                activeSide={activeSide}
                isShort={true}
              />
            </div>
          </div>
        </HeaderWrapper>
      </Header>
      <Main id="mainSection">
        {activeSide === LEFT_SIDE ? <LeftSide /> : <RightSide />}
      </Main>
      {!isMobile && <Socials />}
      <Available />
      <ScrollIndicator />
      {loading && (
        <Loader
          aria-label="Loader"
          setLoading={setLoading}
          isSwap={loading === 'swap'}
        />
      )}
    </Background>
  );
}
export default Home;