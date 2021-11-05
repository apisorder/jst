//  /src/components/Header.js

//  to allow props-based custom CSS styling
import styled, { css } from 'styled-components';

//  create appropriate styles for the header
const Header = styled.h1`
    color: Purple;
    margin: 0rem 16rem;

    //  for the source code file
    ${props => props.filenameBegin && css`
        font-size: 30px;
        text-align: center;
        color: Green;
        border-bottom: 2px green solid;
    `}

    //  for the source code file
    ${props => props.filenameEnd && css`
        font-size: 30px;
        text-align: center;
        color: Green;
        border-top: 2px green solid;
    `}

    //  for the most dominant header on the page
    ${props => props.main && css`
        font-size: 35px;
        text-align: center;
    `}

    //  for the result of program execution
    ${props => props.outputBegin && css`
        font-size: 30px;
        text-align: center;
        color: Brown;
        border-bottom: 2px brown solid;
    `}

    //  for the result of program execution
    ${props => props.outputEnd && css`
        font-size: 30px;
        text-align: center;
        color: Brown;
        border-top: 2px brown solid;
    `}

    //  for the subsections on the page
    ${props => props.subsection && css`
        font-size: 33px;
        text-align: center;
        color: Purple;
    `}
`
export default Header;