import React, { useState, useEffect } from 'react';
import { ThemeProvider } from 'styled-components';

import { useDarkMode } from 'hooks/useDarkMode';
import Home from 'pages/home/home';

import { GlobalFonts } from 'assets/styles/fonts';
import { GlobalStyle } from 'assets/styles/cssReset';
import { darkTheme, lightTheme } from 'theme/theme';

function App() {
  const [theme, setTheme] = useState(darkTheme);
  const isDarkMode = useDarkMode();
  const [darkMode, setDarkMode] = useState(isDarkMode || localStorage.getItem('darkMode') === 'true');

  useEffect(() => {
    localStorage.setItem('darkMode', darkMode);
    setTheme(darkMode ? darkTheme : lightTheme);
  }, [darkMode]);

  return (
    <ThemeProvider theme={theme}>
      <GlobalFonts />
      <GlobalStyle />
      <Home darkMode={darkMode} setDarkMode={setDarkMode} />
    </ThemeProvider>
  );
}

export default App;