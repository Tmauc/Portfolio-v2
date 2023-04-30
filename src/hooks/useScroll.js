import { useState, useEffect } from 'react';

function useScrollDetection() {
  const [isScrolling, setScrolling] = useState(false);

  useEffect(() => {
    function handleScroll() {
      if (!isScrolling && window.pageYOffset > 0) {
        setScrolling(true);
      } else if (isScrolling && window.pageYOffset === 0) {
        setScrolling(false);
      }
    }
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [isScrolling]);

  return isScrolling;
}

export default useScrollDetection;