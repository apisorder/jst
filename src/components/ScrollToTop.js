//  /src/components/ScrollToTop.js
//  reference:  https://reactrouter.com/web/guides/scroll-restoration
//  reference:  https://dmitripavlutin.com/react-useeffect-explanation/

import { useEffect } from "react";
import { useLocation } from "react-router-dom";

// permits the linked content to automatically scroll to the top of the page
const ScrollToTop = ( ) => 
{
    //  array destrucutring
    const { pathname } = useLocation( );

    //  useEffect is for side effects, and the window will only scroll to the top
    //  if and only if the path name (dependencies) has changed
    //  it is a side effect because it does not directly calculate the output
    useEffect(( ) => 
    {
        window.scrollTo( 0, 0 );
    }, [ pathname ]);

    return null;
}
export default ScrollToTop;