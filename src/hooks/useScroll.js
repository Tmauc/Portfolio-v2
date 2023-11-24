import { useEffect, useState } from 'react';

function useScroll() {
  const [isScrollBottom, setIsScrollBottom] = useState(false);

  useEffect(() => {
    const element = document.body;

    if (!element) return;

    const isScrollable = element.scrollHeight > element.clientHeight;
    if (!isScrollable) return;

    const handleScroll = () => {
      const scrollBottom =
        element.scrollHeight - element.scrollTop - element.clientHeight;
      setIsScrollBottom(scrollBottom <= 10);
    };

    element.addEventListener('scroll', handleScroll);

    return () => {
      element.removeEventListener('scroll', handleScroll);
    };
  }, []);

  function scrollToTop() {
    const element = document.body;
    if (!element) return;
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }

  return [isScrollBottom, scrollToTop];
}

export default useScroll;
