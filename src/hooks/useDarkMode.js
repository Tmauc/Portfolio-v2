import { useState, useEffect } from 'react';

function useDarkMode() {
  const [isbrowserDarkMode, setIsbrowserDarkMode] = useState(
    window.matchMedia('(prefers-color-scheme: dark)').matches
  );

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const handleChange = () => setIsbrowserDarkMode(mediaQuery.matches);

    mediaQuery.addEventListener('change', handleChange);

    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  return isbrowserDarkMode;
}

export default useDarkMode;
