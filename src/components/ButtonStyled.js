//  /src/components/ButtonStyled.js

//  to allow props-based custom CSS styling
import styled, { css } from 'styled-components';

const ButtonStyled = styled.button`
display: inline-block;
font-size: 29px;
border: 7px solid white;
border-radius: 3px;
margin: 0rem 7rem;
padding: 1.5rem 7rem;
color: MidnightBlue;
background: Thistle;

//  button for answer choices on quiz page
${props => props.answerChoices && css`
    border-radius: 50px;
    font-size: 25px;
    margin: 0rem 7rem 0rem 17rem;
`}

`

export default ButtonStyled;