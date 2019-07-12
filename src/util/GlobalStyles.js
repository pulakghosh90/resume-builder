import React from 'react';
import { Global, css } from '@emotion/core';
import { black } from '../theme/Color';

const globalStyles = css`
body {
    font-family: SourceSansPro, "Helvetica Neue", Arial, sans-serif;
    font-size: 13px;
    line-height: 1.42857;
    color: ${black};
    box-sizing: border-box;

    h1 {
        margin: 0;
    }
    input, textarea, select, button {
        font-family: inherit;
        font-size: inherit;
    }
}

* {
    box-sizing: border-box;
}
`;

export default () => <Global styles={globalStyles} />;
