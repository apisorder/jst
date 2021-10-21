//  /src/components/ScrollToTop.js
//  reference:  https://reactrouter.com/web/guides/scroll-restoration

import { useEffect } from "react";
import { useLocation } from "react-router-dom";

// permits the linked content to automatically scroll to the top of the page
const ScrollToTop = ( ) => 
{
  const { pathname } = useLocation( );

  useEffect(( ) => 
  {
    window.scrollTo( 0, 0 );
  }, [pathname]);

  return null;
}
export default ScrollToTop;