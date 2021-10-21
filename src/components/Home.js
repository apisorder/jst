//  /src/components/Functions.js

//  to allow React Hooks to be used
import React, { useState } from 'react';

//  sharable components across different components
import AnchorStyled from './AnchorStyled';
import DividerStyled from './DividerStyled';
import Footer from './Footer';
import Header from './Header';
import LineFeeder from './LineFeeder';
import ParagraphStyled from './ParagraphStyled';

//  SVG needed for the page
import { ReactComponent as HomeBuilding } from '../images/homeBuilding.svg';

//  to be able to navigate to other links in React Router
import { Link } from 'react-router-dom';

const Home = ( { title } ) => 
{
    // ***********************************React Hooks**************************
    // for showing and hiding lesson review
    const [ showReview, setShowReview ] = useState( false );
    const toggleReview = ( ) => (
        setShowReview( showReview => !showReview )
    )
    // ***********************************React Hooks**************************

    // ***********************************local variables**********************
    //  convenience variables -> also possible to use React hooks to change the value, but doing
    //  so entails too many calls to the Hook, since each modification of value would require one
    let lineNumber = 1;
    // ***********************************local variables*************************

    return (
        <>
            {/* ***********************************page header************* */}
            {/* main image */}
            <DividerStyled mainImage>
                <HomeBuilding />
            </DividerStyled>

            <DividerStyled>
                {/* page title */}
                <Header main>
                    { title && (<>{ title }</>) }
                </Header>
                {/* page title */}
                {/* ***********************************page header********************** */}
                
                {/* lecture content */}
                {/* ***********************************Introduction******************* */}
                <ParagraphStyled>
                    Welcome to JST – our online JavaScript Tutor. Our goal is to offer an 
                    introductory presentation of the JavaScript (JS) programming language. 
                    JS is a high-level programming language that provides multiparadigm support, 
                    including procedural, functional, object-oriented, and event-driven. In 
                    addition to server-side support, JS is also a core technology used in web 
                    browsers for client-side programming that specifies the behavior of web 
                    pages.                   
                </ParagraphStyled>

                <ParagraphStyled>
                    The targeted audience of JST are developers who are familiar with basic 
                    concepts of procedural and object-oriented programming, used in languages 
                    such as C++ or Java: data structures, control mechanisms, functions, and 
                    data encapsulation. JST has not been developed for novice-level users.
                </ParagraphStyled>               

                <ParagraphStyled>
                    Typical JST users are senior-level computer science students and professionals 
                    who seek brief and introductory exposure to the language for evaluation of its 
                    expressive power and area of use. The volume of materials being presented is 
                    appropriate for study over three afternoons, approximately twelve hours. 
                    Familiarity with JST's content will enable users to understand the role and 
                    the structure of JS programs and to decide whether to continue a more detailed 
                    study of JS based on professional literature.
                </ParagraphStyled>

                <ParagraphStyled>
                    Although not a requirement, a cursory knowledge of HTML may be beneficial to 
                    understanding the upcoming lessons. Therefore, a primer on HTML has been 
                    prepared. If the student is foreign to the technology, a brief study using 
                    the primer is recommended.
                </ParagraphStyled>
                {/* ***********************************Introduction********************** */}
                {/* lecture content */}

                {/* ***********************************lesson review************* */}
                {/* show review */}
                    { 
                        !showReview && (
                            <AnchorStyled
                                recap
                                onClick={ toggleReview }
                            >
                                Let's Recap
                            </AnchorStyled>
                        )
                    }
                {/* show review */}

                {/* lesson review */}
                {
                    showReview && (
                        <>
                            <ParagraphStyled review>
                                <Header main>
                                    Recap
                                </Header>
                                
                                ({lineNumber++}) JS supports multiparadigm support.
                                <LineFeeder />
                                ({lineNumber++}) JS facilitates user interaction on the client 
                                side.<LineFeeder />
                                ({lineNumber++}) JST assumes familiarity with basic programming 
                                concepts.<LineFeeder />
                                ({lineNumber}) knowledge of HTML may be conducive for learning 
                                JS.
                            </ParagraphStyled>
                        </>
                    )
                }
                {/* lesson review */}

                {/* hide review */}
                {
                    showReview && (
                        <AnchorStyled 
                                recapDoneHome
                                onClick={ toggleReview }
                        >
                                I am done reviewing!
                        </AnchorStyled>
                    )
                }
                {/* hide review */}
                {/* ***********************************lesson review*********************** */}

            </DividerStyled>
            {/* main content */}

            {/* ***********************************page navigation****************** */}
            <DividerStyled pageLinker>

                <Footer>
                    <Link to='/html-primer'>&lArr; HTML Primer</Link>
                </Footer>

                <Footer>
                        <Link to='/setup'>Skip HTML Primer &rArr;</Link>
                </Footer>
                
            </DividerStyled>
            {/* ***********************************page navigation******************** */}
            {/* main content */}
        </>
    )
}
export default Home;