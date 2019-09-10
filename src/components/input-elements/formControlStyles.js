import { css } from '@emotion/core';

export const disabledClass = css`
    &.disabled {
        opacity: 1;
        background-color: #e9ecef;
        cursor: not-allowed;
        pointer-events: none;
        box-shadow: none;
    }
`;

export const formControlStyles = css`
    display: block;
    width: 100%;
    padding: .375rem .75rem;
    font-size: 1rem;
    line-height: 1.5;
    color: #495057;
    background-color: #fff;
    background-clip: padding-box;
    border: 1px solid #ced4da;
    border-radius: .25rem;
    transition: border-color .15s ease-in-out,box-shadow .15s ease-in-out;
    box-sizing: border-box;

    ${disabledClass}
`;
