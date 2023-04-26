import React, { useState, useEffect } from 'react';
import { ThemeProvider } from 'styled-components';

import { useDarkMode } from './hooks/useDarkMode';
import Home from './pages/home/home';

import { GlobalFonts } from './assets/styles/fonts';
import { GlobalStyle } from './assets/styles/cssReset';
import { themes } from './themes/themes';

import { ORANGE_COLOR } from './constants/constants';

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
      <Home
        isDarkMode={isDarkMode}
        setIsDarkMode={setIsDarkMode}
        selectedTheme={selectedTheme}
        setSelectedTheme={setSelectedTheme}
      />
    </ThemeProvider>
  );
}

export default App;
