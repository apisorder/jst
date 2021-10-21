//  /src/components/ElementDelimiter.js

import React from 'react';

// create angular brackets the safer way
const ElementDelimiter = ({ children }) => ( <>&lt;{ children }&gt;</> )
export default ElementDelimiter;