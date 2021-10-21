//  /src/components/AnchorStyled.js
//  reference:  https://scalablecss.com/styled-components-quickstart-guide/

//  to allow props-based custom CSS styling
import styled, { css } from 'styled-components';

// CSS styling for the HTML anchor element
const AnchorStyled = styled.a`
  background: Thistle;
  border: 7px solid white;
  border-radius: 3px;
  color: MidnightBlue;
  display: inline-block;
  font-size: 29px;
  margin: 0rem 7rem;
  
  :hover {
    border-color: green;
  }
  
  @media (min-width: 768px) { 
    padding: 1rem 2rem;
    width: 11rem;
  }
  
  @media (min-width: 1024px) { 
    padding: 1.5rem 2.5rem;
    width: 13rem;
  }

  //  sample web application demo
  ${props => props.demo && css`
    margin: 0rem 0rem 3rem 43rem;
  `}

  //  lesson review
  ${props => props.recap && css`
    margin: 0rem 0rem 3rem 43rem;
  `}

  //  lesson review finished
  ${props => props.recapDone && css`
    background: Silver;
    margin: 0rem 0rem 3rem 43rem;
  `}

  //  lesson review finished on home page
  ${props => props.recapDoneHome && css`
    background: Silver;
    margin: 0rem 0rem 3rem 50rem;
  `}

  //  lesson review on home page
  ${props => props.recapHome && css`
    margin: 0rem 0rem 3rem 50rem;
  `}

  //  reset quiz
  ${props => props.restartQuiz && css`
    background: Silver;
    margin: 0rem 0rem 3rem 43rem;
  `}

  //  alternating color for the sidebar
  ${props => props.silver && css`
    background: Silver;
  `}

  //  todo item clear selected
  ${props => props.todoClearSelected && css`
  background: Silver;
  margin: 0rem 0rem 3rem 40rem;
`}
`
export default AnchorStyled;