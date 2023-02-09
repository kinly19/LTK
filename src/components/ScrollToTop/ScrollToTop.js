import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop = (props) => {
  let currentUrl = useLocation();

  useEffect(() => {
    if (!currentUrl.hash) {
      window.scrollTo(0, 0);
    }
  }, [currentUrl]);

  return props.children;
};

export default ScrollToTop;