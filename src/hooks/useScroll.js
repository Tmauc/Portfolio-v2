import { useEffect, useState } from 'react';

function useScroll(ref) {
  const [isScrollBottom, setIsScrollBottom] = useState(false);

  useEffect(() => {
    const element = ref && ref.current;
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
  }, [ref]);

  function scrollToTop() {
    const element = ref && ref.current;
    if (!element) return;
    element.scrollTo({ top: 0, behavior: 'smooth' });
  }

  return [isScrollBottom, scrollToTop];
}

export default useScroll;
