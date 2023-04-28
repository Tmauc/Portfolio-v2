import React, { useState, useEffect } from 'react';
import { ThemeProvider } from 'styled-components';
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from 'react-router-dom';

import { useDarkMode } from 'hooks/useDarkMode';
import Home from 'pages/home/home';

import { GlobalFonts } from 'assets/styles/fonts';
import { GlobalStyle } from 'assets/styles/cssReset';
import { themes } from 'themes/themes';

import { ORANGE_COLOR, LEFT_SIDE, RIGHT_SIDE } from 'constants/constants';

function App() {
  const isbrowserDarkMode = useDarkMode();
  const [isDarkMode, setIsDarkMode] = useState(
    isbrowserDarkMode || localStorage.getItem('isDarkMode') === true
  );
  const [selectedTheme, setSelectedTheme] = useState(ORANGE_COLOR);
  const [theme, setTheme] = useState(themes[selectedTheme].darkTheme);

  useEffect(() => {
    localStorage.setItem('isDarkMode', isDarkMode);
    setTheme(
      isDarkMode
        ? themes[selectedTheme].darkTheme
        : themes[selectedTheme].lightTheme
    );
  }, [isDarkMode, selectedTheme]);

  return (
    <ThemeProvider theme={theme}>
      <GlobalFonts />
      <GlobalStyle />
      <Router>
        <Routes>
          <Route
            exact
            path="/thomas"
            element={
              <Home
                isDarkMode={isDarkMode}
                setIsDarkMode={setIsDarkMode}
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
                isDarkMode={isDarkMode}
                setIsDarkMode={setIsDarkMode}
                setSelectedTheme={setSelectedTheme}
                activeSide={RIGHT_SIDE}
              />
            }
          />
          <Route path="*" element={<Navigate to="/thomas" />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;