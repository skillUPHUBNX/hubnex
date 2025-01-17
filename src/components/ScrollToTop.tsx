import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop = () => {
  const location = useLocation();

  useEffect(() => {
    // Wait for DOM to be fully ready and then scroll to the top
    const scrollToTop = () => {
      if (document.body) {
        window.scrollTo({
          top: 0,
          behavior: 'smooth',
        });
      }
    };

    scrollToTop();
  }, [location]);

  return null;
};

export default ScrollToTop;
