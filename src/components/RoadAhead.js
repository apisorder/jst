//  /src/components/RoadAhead.js
//  reference:  https://www.udemy.com/course/modern-javascript/

import React from 'react';

//  sharable components across different components
import DividerStyled from './DividerStyled';
import Footer from './Footer';
import Header from './Header';
import ParagraphStyled from './ParagraphStyled';

//  to be able to navigate to other links in React Router
import { Link } from 'react-router-dom';

const RoadAhead = ( { title } ) => 
{

    return (
        <>
            {/* ***********************************page header************************** */}
            <DividerStyled>
                {/* page title */}
                <Header main>
                    { title && (<>{ title }</>) }
                </Header>
                {/* page title */}
                {/* ***********************************page header********************** */}

                <ParagraphStyled>
                    Using JST, you have been exposed to the very basics of JavaScript.
                    However, as has been demonstrated in the sample web application,
                    JavaScript is far more powerful than what has been covered here. 
                </ParagraphStyled>
                
                <ParagraphStyled>
                    Some of the topics which have been excluded from JST include
                    different operators, such as the spread operator (...), and the nullish
                    coalescing operator (???), array destructuring, and JavaScript classes. 
                </ParagraphStyled>

                <ParagraphStyled>
                    The power of JavaScript, as has already been discussed, lies in its
                    power to facilitate extensive user interaction without the presence of
                    a server or a server-side language.  The importance of the server cannot
                    be undermined:  without the server, the website cannot be hosted, and
                    without the server, search engines would be unable to fetch results from
                    a database.  However, some tasks are better delegated to JavaScript, and
                    these include user input validation, changing the page based on some user
                    interaction, and interacting with the system when data throughput 
                    (connection with the server) is limited.  Knowing the importance of 
                    different sides on the web will help guide the direction in which to 
                    further your study.
                </ParagraphStyled>  

                <ParagraphStyled>
                    Should you decide to take the client-side route, to verify your 
                    understanding of the materials covered through JST, it is recommended that 
                    you use the Quiz System to confirm that you have at least some basic 
                    understanding of JavaScript before using more advanced materials to increase 
                    your knowledge.
                </ParagraphStyled>                  
            </DividerStyled>

    
            {/* ***********************************page navigation*********************** */}
            <DividerStyled pageLinker>
                <Footer>
                    <Link to='/sample-web-application'>&lArr; Back</Link>
                </Footer>

                <Footer>
                    <Link to='/quiz'>Forward &rArr;</Link>
                </Footer>
            </DividerStyled>
            {/* ***********************************page navigation*********************** */}
        </>
    )
}
export default RoadAhead;