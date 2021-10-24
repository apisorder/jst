//  /src/App.js
//  reference:  https://www.freecodecamp.org/news/react-router-in-5-minutes/

import React from "react";

// react router
// ReactRouter does not work with GitHub Pages -> HashRouter is more versatile
import { 
  HashRouter as Router, 
  Switch, 
  Route, 
  Link } from "react-router-dom";

// to enable linked routes to always go to the top of the page
import ScrollToTop from './components/ScrollToTop';

// header
import Header from './components/Header';
import { ReactComponent as Logo } from './images/logo.svg';

// footer
import Footer from './components/Footer';
import { ReactComponent as About } from './images/about.svg';

// components to add styles
import AnchorStyled from './components/AnchorStyled';
import DividerStyled from './components/DividerStyled';
import ListItemStyled from './components/ListItemStyled';
import UnorderedListStyled from './components/UnorderedListStyled';

// components for each individual route
import Home from './components/Home';
import HtmlPrimer from './components/HtmlPrimer';
import Setup from './components/Setup';
import HelloWorld from './components/HelloWorld';
import DataTypesAndStructures from './components/DataTypesAndStructures';
import ExpressionsAndOperators from './components/ExpressionsAndOperators';
import Branches from './components/Branches';
import Loops from './components/Loops';
import Functions from './components/Functions';
import JsProgrammingTechniques from './components/JsProgrammingTechniques';
import SampleWebApplication from './components/SampleWebApplication';
import Demo from './components/Demo';
import RoadAhead from './components/RoadAhead';
import QuickGuide from './components/QuickGuide';
import Quiz from './components/Quiz';

// global CSS using styled component
import { createGlobalStyle } from 'styled-components';
import background from './images/background.png';
const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    background-image: url(${background});
    font-family: Open-Sans, Helvetica, Sans-Serif;
  }
`;

// main
const App = ( ) => {
  return (
    <>
      <GlobalStyle />
      <Router>
        {/* to enable linked routes to always go to the top of the page */}
        <ScrollToTop />

          {/* upper-div: header */}
          {/* header */}
          <DividerStyled>
            <Header>
              <Logo />
            </Header>
          </DividerStyled>
          {/* header */}
          {/* upper-div: header */}

        {/* middle-div: sidebar (left) & main display (right) */}
        <DividerStyled mainContent>

          {/* side bar */}
          <DividerStyled>
            
            <UnorderedListStyled sidebar>

              {/* color of list item alternates between two colors */}
              <ListItemStyled>


              <ListItemStyled>
                <Link to="/">
                  <AnchorStyled>
                    Home
                  </AnchorStyled>
                </Link>
              </ListItemStyled>

                <Link to="/quick-guide">
                  <AnchorStyled silver>
                    Quick-Guide
                  </AnchorStyled>
                </Link>
              </ListItemStyled>

              <ListItemStyled>
                <Link to="/setup">
                  <AnchorStyled>
                    1. Setup
                  </AnchorStyled>
                </Link>
              </ListItemStyled>

              <ListItemStyled>
                <Link to="/hello-world">
                  <AnchorStyled silver>
                    2. Hello World
                  </AnchorStyled>
                </Link>
              </ListItemStyled>

              <ListItemStyled>
                <Link to="/data-types-and-structures">
                  <AnchorStyled>
                    3. Data Types and Structures
                  </AnchorStyled>
                </Link>
              </ListItemStyled>

              <ListItemStyled>
                <Link to="/expressions-and-operators">
                  <AnchorStyled silver>
                    4. Expressions and Operators
                  </AnchorStyled>
                </Link>
              </ListItemStyled>

              <ListItemStyled>
                <Link to="/branches">
                  <AnchorStyled>
                    5. Branches
                  </AnchorStyled>
                </Link>
              </ListItemStyled>

              <ListItemStyled>
                <Link to="/loops">
                  <AnchorStyled silver>
                    6. Loops
                  </AnchorStyled>
                </Link>
              </ListItemStyled>

              <ListItemStyled>
                <Link to="/functions">
                  <AnchorStyled>
                    7. Functions
                  </AnchorStyled>
                </Link>
              </ListItemStyled>

              <ListItemStyled>
                <Link to="/js-programming-techniques">
                  <AnchorStyled silver>
                    8. JS Programming Techniques
                  </AnchorStyled>
                </Link>
              </ListItemStyled>

              <ListItemStyled>
                <Link to="/sample-web-application">
                  <AnchorStyled>
                    9. Sample Web Application
                  </AnchorStyled>
                </Link>
              </ListItemStyled>

              <ListItemStyled>
                <Link to="/road-ahead">
                  <AnchorStyled silver>
                    10. Road Ahead
                  </AnchorStyled>
                </Link>
              </ListItemStyled>

              <ListItemStyled>
                <Link to="/quiz">
                  <AnchorStyled>
                    Quiz
                  </AnchorStyled>
                </Link>
              </ListItemStyled>
              
            </UnorderedListStyled>

          </DividerStyled>         
          {/* side bar */}

          {/* main display */}
          <DividerStyled>
            {/* switch visible content based on the chosen route */}
            <Switch>

              {/* pass the respective title into each component */}
      

              <Route exact path='/'>
                <Home 
                  title="JavaScript Tutor (JST) Home"
                />
              </Route>          

              <Route exact path='/quick-guide'>
                <QuickGuide 
                  title="Quick Starting Guide for JST"
                />
              </Route>    

              <Route exact path='/html-primer'>
                <HtmlPrimer 
                  title="A Primer on HTML"
                />
              </Route>          

              <Route exact path='/setup'>
                <Setup 
                  title="1. Setup"
                />
              </Route>          

              <Route exact path="/hello-world">
                <HelloWorld
                  title="2. Hello World"
                />
              </Route>          

              <Route exact path='/data-types-and-structures'>
                <DataTypesAndStructures 
                  title="3. Data Types and Structures"
                />
              </Route>          

              <Route exact path='/expressions-and-operators'>
                <ExpressionsAndOperators
                  title="4. Expressions and Operators"
                />
              </Route>          

              <Route exact path='/branches'>
                <Branches
                  title="5. Branches"
                />
              </Route>          

              <Route exact path='/loops'>
                <Loops
                  title="6. Loops"
                />
              </Route>          

              <Route exact path='/functions'>
                <Functions
                  title="7. Functions"
                />
              </Route>          

              <Route exact path='/js-programming-techniques'>
                <JsProgrammingTechniques
                  title="8. JS Programming Techniques"
                />
              </Route>          

              <Route exact path='/sample-web-application'>
                <SampleWebApplication
                  title="9. Sample Web Application"
                />
              </Route>          

                <Route exact path='/demo'>
                <Demo
                  title="Demo of Sample Web Application"
                />
              </Route>          

              <Route exact path='/road-ahead'>
                <RoadAhead
                  title="10. Road Ahead"
                />
              </Route>          

              <Route exact path='/quiz'>
                <Quiz
                  title="Quiz"
                />
              </Route>          
              
            </Switch>

          </DividerStyled>
          {/* main display */}

        </DividerStyled>
        {/* middle-div: sidebar (left) & main display (right) */}
          
        {/* lower-div: footer */}
        {/* footer */}
        <DividerStyled>
          <Footer>
            <About />
          </Footer>
        </DividerStyled>
        {/* footer */}
        {/* lower-div: footer */}

      </Router>
    </>
  );
}
export default App;