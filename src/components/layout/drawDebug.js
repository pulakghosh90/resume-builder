import { css } from '@emotion/core';

export const debugStyles = css`
    background: rgba(0, 255, 255, 0.1);
    border: 1px dashed rgba(255, 0, 255, 1);
`;

export const drawDebug = (props) => (props.debug ? debugStyles : '');
