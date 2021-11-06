//  /src/components/ParagraphStyled.js
//  reference:  https://scalablecss.com/styled-components-quickstart-guide/

import styled, { css } from 'styled-components';

//  CSS styling for HTML p (paragraph)
const ParagraphStyled = styled.p`
    line-height: 1.8;
    font-size: 25px;
    font-weight: 500;
    margin-left: 10rem;
    margin-right: 10rem;
    margin-bottom: 47px;
    text-align: justify;   

    ${props => props.code && css`
    text-align: left;
    `}

    //  prompting the user with a question
    ${props => props.questionProgress && css`
        font-size: 35px;
        border: 2px solid black;
        margin-top: 30px;
        margin-bottom: 30px;
        text-align: center;
        padding: 2rem 10rem 2rem 10rem;
    `}

    //  displaying the question text
    ${props => props.questionText && css`
        font-size: 35px;
        border: 2px solid green;
        margin-top: 30px;
        margin-bottom: 30px;
        text-align: center;
        padding: 2rem 10rem 2rem 10rem;
    `}

    //  result of the quiz
    ${props => props.questionResult && css`
        font-size: 35px;
        border: 2px solid green;
        margin-top: 30px;
        margin-left: 110px;
        margin-bottom: 30px;
        margin-right: 150px;
        text-align: center;
        padding: 2rem 10rem 2rem 10rem;
    `}

    // CSS styling for lesson recap
    ${props => props.review && css`
        border: 2px solid green;
        margin-top: 30px;
        margin-left: 150px;
        margin-bottom: 30px;
        margin-right: 150px;
        padding: 2rem 10rem 2rem 10rem;
    `}

    //  showing the todo item
    ${props => props.todoitem && css`
        border: 2px solid green;
        margin-top: 30px;
        margin-left: 150px;
        margin-bottom: 30px;
        margin-right: 150px;
        text-align: center;
        padding: 2rem 10rem 2rem 10rem;
    `}

    //  marking the todo item as completed
    ${props => props.todoitemCompleted && css`
        border: 2px solid red;
        margin-top: 30px;
        margin-left: 150px;
        margin-bottom: 30px;
        margin-right: 150px;
        text-align: center;
        text-decoration: line-through;
        padding: 2rem 10rem 2rem 10rem;
    `}
`
export default ParagraphStyled;