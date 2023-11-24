import React, { useState, useRef, useEffect } from 'react';
import { ThemeProvider } from 'styled-components';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ReactLenis, useLenis } from '@studio-freight/react-lenis'
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from 'react-router-dom';

import Home from 'pages/home/home';

import { GlobalFonts } from 'assets/styles/fonts';
import { GlobalStyle } from 'assets/styles/cssReset';
import { themes } from 'themes/themes';

import { ORANGE_COLOR, LEFT_SIDE, RIGHT_SIDE } from 'constants/constants';

import './Library.scss'

function App() {
  const [selectedTheme, setSelectedTheme] = useState(ORANGE_COLOR);
  const theme = themes[selectedTheme].darkTheme;
  gsap.registerPlugin(ScrollTrigger);
  const lenis = useLenis(({ scroll }) => {

  })

  const lenisRef = useRef(lenis)

  useEffect(() => {
    function update(time) {
      lenisRef.current?.raf(time * 1000)
    }

    gsap.ticker.add(update)

    return () => {
      gsap.ticker.remove(update)
    }
  })

  return (
    <ThemeProvider theme={theme}>
      <GlobalFonts />
      <GlobalStyle />
      <ReactLenis ref={lenisRef} autoRaf={false} root>
        <Router>
          <Routes>
            <Route
              exact
              path="/thomas"
              element={
                <Home
                  setSelectedTheme={setSelectedTheme}
                  activeSide={LEFT_SIDE}
                />
              }
            />
            <Route
              exact
              path="/mauc"
              element={
                <Home
                  setSelectedTheme={setSelectedTheme}
                  activeSide={RIGHT_SIDE}
                />
              }
            />
            <Route path="*" element={<Navigate to="/thomas" />} />
          </Routes>
        </Router>
      </ReactLenis>
    </ThemeProvider >
  );
}

export default App;