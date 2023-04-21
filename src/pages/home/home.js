import React, { useCallback, useState } from 'react';

import Networks from 'components/networks/networks';
import ActiveBar from 'components/activeBar/activeBar';
import Navbar from 'components/navbar/navbar';
import * as constants from 'constants/constants';

import LeftSide from 'parts/leftSide/leftSide';
import RightSide from 'parts/rightSide/rightSide';

import { Background, Main, PageWrapper, Header, GradientWrapper, ColorGradient, LargeText, MainSection } from './home.style'

function Home({ darkMode, setDarkMode }) {
  const [activeSection, setActiveSection] = useState('about');
  const [activeSide, setActiveSide] = useState(constants.LEFT_SIDE);

  const handleClick = useCallback(() => {
    setActiveSide(activeSide === constants.LEFT_SIDE ? constants.RIGHT_SIDE : constants.LEFT_SIDE);
    setActiveSection(constants.NAVBAR_ABOUT);
    document.title = activeSide === constants.LEFT_SIDE ? 'Content Creator ~ Mauc' : 'Front-End Dev ~ Thomas';
  }, [activeSide])

  return (
    <Background activeSide={activeSide} darkMode={darkMode}>
      <Main>
        <PageWrapper activeSide={activeSide}>
          <Header>
            <GradientWrapper>
              <ColorGradient
                onClick={handleClick}
                activeSide={activeSide}
                aria-label="Go to Mauc's side page"
                tabIndex={0}
              >
                {activeSide === constants.LEFT_SIDE ? 'thomas' : 'mauc'}
              </ColorGradient>
              <ActiveBar />
            </GradientWrapper>
            <LargeText activeSide={activeSide}>
              {activeSide === constants.LEFT_SIDE ?
                <p>Developer< br />Front End</p>
                :
                <p>Content< br />Creator</p>
              }
            </LargeText>
          </Header>
          <MainSection>
            {activeSide === constants.LEFT_SIDE ?
              <LeftSide activeSection={activeSection} />
              :
              <RightSide activeSection={activeSection} />
            }
          </MainSection>
          <Navbar
            activeSide={activeSide}
            activeSection={activeSection}
            setActiveSection={setActiveSection}
          />
        </PageWrapper>
        <Networks activeSide={activeSide} darkMode={darkMode} setDarkMode={setDarkMode} />
      </Main>
    </Background>
  );
}
export default Home;
