import React, { useCallback, useState } from 'react';

import Networks from '../../components/networks/networks';
import ActiveBar from '../../components/activeBar/activeBar';
import Navbar from '../../components/navbar/navbar';
import HamburgerMenu from '../../components/hamburgerMenu/hamburgerMenu';
import SwitchDarkMode from '../../components/switchDarkMode/switchDarkMode';
import Loader from '../../components/loader/loader';

import {
  LEFT_SIDE,
  RIGHT_SIDE,
  NAVBAR_ABOUT,
  ORANGE_COLOR,
  PURPLE_COLOR,
  THOMAS,
  MAUC,
} from '../../constants/constants';

import { NAVBAR_ITEMS_LEFT, NAVBAR_ITEMS_RIGHT } from '../../constants/navbarData';
import { NETWORK_ITEMS_LEFT, NETWORK_ITEMS_RIGHT } from '../../constants/networkData';

import LeftSide from '../../parts/leftSide/leftSide';
import RightSide from '../../parts/rightSide/rightSide';

import useDeviceType from '../../hooks/useDeviceType';

import {
  Background,
  Main,
  PageWrapper,
  Header,
  GradientWrapper,
  ColorGradient,
  LargeTransparentText,
  MainSection
} from './home.style'

function Home({ isDarkMode, setIsDarkMode, selectedTheme, setSelectedTheme }) {
  const [activeSection, setActiveSection] = useState(NAVBAR_ABOUT);
  const [activeSide, setActiveSide] = useState(LEFT_SIDE);
  const [loading, setLoading] = useState(false);
  const { isMobile } = useDeviceType();

  const handleClick = useCallback(() => {
    setLoading('swap');

    setTimeout(() => {
      setActiveSide(activeSide === LEFT_SIDE ? RIGHT_SIDE : LEFT_SIDE);
      setSelectedTheme(selectedTheme === ORANGE_COLOR ? PURPLE_COLOR : ORANGE_COLOR);
      setActiveSection(NAVBAR_ABOUT);
      document.title = activeSide === LEFT_SIDE ? 'Content Creator ~ Mauc' : 'Front-End Dev ~ Thomas';
      const checkbox = document.querySelector('input[type="checkbox"]');
      checkbox.checked = false;
    }, 500);

  }, [activeSide, selectedTheme, setSelectedTheme])

  const navbarItems = activeSide === LEFT_SIDE ? NAVBAR_ITEMS_LEFT : NAVBAR_ITEMS_RIGHT;
  const networkItems = activeSide === LEFT_SIDE ? NETWORK_ITEMS_LEFT : NETWORK_ITEMS_RIGHT;

  return (
    <Background isDarkMode={isDarkMode}>
      <Main>
        <PageWrapper>
          <Header>
            <GradientWrapper>
              <ColorGradient
                onClick={handleClick}
                aria-label="Go to Mauc's side page"
                tabIndex={0}
              >
                {activeSide === LEFT_SIDE ? THOMAS : MAUC}
              </ColorGradient>
              <ActiveBar />
            </GradientWrapper>
            <LargeTransparentText>
              {activeSide === LEFT_SIDE ?
                <p>Developer< br />Front End</p>
                :
                <p>Content< br />Creator</p>
              }
            </LargeTransparentText>
          </Header>
          <MainSection>
            {activeSide === LEFT_SIDE ?
              <LeftSide activeSection={activeSection} />
              :
              <RightSide activeSection={activeSection} />
            }
          </MainSection>
          {!isMobile ?
            <Navbar
              activeSection={activeSection}
              setActiveSection={setActiveSection}
              navbarItems={navbarItems}
            />
            :
            <></>
          }
        </PageWrapper>
        {isMobile &&
          <HamburgerMenu
            activeSection={activeSection}
            setActiveSection={setActiveSection}
            navbarItems={navbarItems}
          />
        }
        <Networks networkItems={networkItems} />
        <SwitchDarkMode isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} setLoading={setLoading} />
        {loading &&
          <Loader
            setLoading={setLoading}
            isSwap={loading === 'swap'}
          />
        }
      </Main>
    </Background>
  );
}
export default Home;
