//  /src/components/DividerStyled.js

//  to allow props-based custom CSS styling
import styled, { css } from 'styled-components';

// CSS styling for the HTML div (content divider) element
const DividerStyled = styled.div`
    //  CSS styling for container that houses both the nav bar and the main window
    ${props => props.mainContent && css`
        display: flex;
        padding: 2rem 10rem 2rem 10rem;
    `}

    //  CSS styling for the most dominant image on the page
    ${props => props.mainImage && css`
        height: 400px;
        width: 500px;
        display: block;
        margin: auto;
    `}

    //  CSS styling for the navigation links near the bottom of the page, 
    //  used to navigate to the module before and the module after
    ${props => props.pageLinker && css`
        display: flex;
        padding: 0rem 10rem 0rem 30rem;
        text-align: center;
    `}
    
    //  CSS styling for application code
    ${props => props.programCode && css`
        margin-top: 30px;
        margin-left: 150px;
        margin-bottom: 30px;
        margin-right: 150px;
        padding: 2rem 0rem 2rem 0rem;
        display: inline-block;
        border: 2px solid green;
    `}

    //  CSS styling for the program execution
    ${props => props.programOutput && css`
        margin-top: 30px;
        margin-left: 150px;
        margin-bottom: 30px;
        margin-right: 150px;
        padding: 2rem 0rem 2rem 0rem;
        display: inline-block;
        border: 2px solid Brown;
    `}

    //  CSS styling for the images on the quick starting guide
    ${props => props.quickGuideImage && css`
        height: 300px;
        width: 500px;
        display: block;
        margin: auto;
    `}

    ${props => props.table && css`
        margin-top: 30px;
        margin-left: 380px;
        margin-bottom: 30px;
        margin-right: 150px;
        padding: 2rem 0rem 2rem 0rem;
        display: inline-block;
        border: 10px solid Purple;
    `}
`
export default DividerStyled;