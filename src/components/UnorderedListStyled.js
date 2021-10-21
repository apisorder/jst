//  /src/components/UnorderedListStyled.js

import styled, { css } from 'styled-components';

//  CSS styling for the HTML ul (unorder list) element
const UnorderedListStyled = styled.ul`

    ${props => props.sidebar && css`
        padding: 0.5rem;
    `}
`
export default UnorderedListStyled;