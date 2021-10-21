//  /src/components/IndentStyled.js

//  to allow props-based custom CSS styling
import styled, { css } from 'styled-components';

//  create appropriate indentation
const IndentStyled = styled.span` 
  margin: 0rem 0rem 0rem 3rem;

  ${props => props.two && css`
    margin: 0rem 0rem 0rem 5rem;
  `}

  ${props => props.three && css`
    margin: 0rem 0rem 0rem 7rem;
  `}

  ${props => props.four && css`
    margin: 0rem 0rem 0rem 9rem;
  `}

  ${props => props.five && css`
    margin: 0rem 0rem 0rem 11rem;
  `}

  ${props => props.six && css`
    margin: 0rem 0rem 0rem 13rem;
  `}

  ${props => props.seven && css`
    margin: 0rem 0rem 0rem 15rem;
  `}

  ${props => props.eight && css`
    margin: 0rem 0rem 0rem 17rem;
  `}

  ${props => props.nine && css`
    margin: 0rem 0rem 0rem 19rem;
    `}

  ${props => props.ten && css`
    margin: 0rem 0rem 0rem 21rem;
    `}

  ${props => props.eleven && css`
    margin: 0rem 0rem 0rem 23rem;
    `}

  ${props => props.seven && css`
    margin: 0rem 0rem 0rem 15rem;
    `}
`
export default IndentStyled;