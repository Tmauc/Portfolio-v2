import { useEffect, useState } from 'react';
import { TABLET_WIDTH } from '../constants/constants'

function useDeviceType() {
  const [isMobile, setIsMobile] = useState(false);
  const [screenSize, setScreenSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  useEffect(() => {
    const mediaQuery = window.matchMedia(`(max-width: ${TABLET_WIDTH}px)`);
    setIsMobile(mediaQuery.matches);

    const handleChange = (event) => {
      setIsMobile(event.matches);
    };

    mediaQuery.addEventListener('change', handleChange);

    const handleResize = () => {
      setScreenSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    window.addEventListener('resize', handleResize);

    return () => {
      mediaQuery.removeEventListener('change', handleChange);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return { isMobile, screenSize };
}

export default useDeviceType;
