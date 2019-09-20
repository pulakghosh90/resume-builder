import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import { ClassNames } from '@emotion/core';

const StyledButton = styled('button')`
    display: inline-block;
    margin-bottom: 0;
    font-weight: 400;
    text-align: center;
    white-space: nowrap;
    vertical-align: middle;
    touch-action: manipulation;
    cursor: pointer;
    background-image: none;
    border: 1px solid transparent;
    padding: 6px 12px;
    font-size: 14px;
    line-height: 1.42857143;
    border-radius: 4px;
    user-select: none;
    margin: 0 5px;

    &:focus {
        outline: 0;
        box-shadow: 0 0 0 0.2rem rgba(0,123,255,.25);
        text-decoration: none;
    }

    &:hover {
        text-decoration: none;
    }

    &.destructive {
        color: #fff;
        background-color: #d9534f;
        border-color: #d43f3a;
    }

    &.destructive:focus {
        background-color: #c9302c;
        border-color: #761c19;
    }

    &.destructive:hover {
        background-color: #c9302c;
        border-color: #ac2925;
    }

    &.primary {
        color: #fff;
        background-color: #337ab7;
        border-color: #2e6da4;
    }

    &.primary:focus {
        background-color: #286090;
        border-color: #122b40;
    }

    &.primary:hover {
        background-color: #0069d9;
        border-color: #0062cc;
    }

    &.default {
        color: #333;
        background-color: #fff;
        border-color: #ccc;
    }

    &.default:focus {
        background-color: #e6e6e6;
        border-color: #8c8c8c;
    }

    &.default:hover {
        background-color: #e6e6e6;
        border-color: #adadad;
    }

    &.borderless {
        border-color: transparent;
        outline: none;
    }

    &.borderless:hover {
        border-color: transparent;
        background-color: transparent;
        box-shadow: none;
        outline: none;
    }

    &.borderless:focus {
        border-color: transparent;
        box-shadow: none;
        background-color: transparent;
    }

    &.borderless:active {
        border-color: transparent;
        background-color: transparent;
        box-shadow: none;
    }

    &.transparent {
        border-color: transparent;
        background-color: transparent;
        box-shadow: none;
    }

    &[disabled] {
        opacity: 0.4;
        cursor: not-allowed;
        pointer-events: none;
        box-shadow: none;
    }

    &.lg {
        font-size: 18px;
        line-height: 1.3333333;
        border-radius: 6px;
        height: 43px;
    }

    &.sm {
        font-size: 12px;
        line-height: 1.5;
        border-radius: 3px;
        height: 32px;
    }

    &.xs {
        font-size: 12px;
        line-height: 1.5;
        border-radius: 3px;
        height: 26px;
    }
`;


export default function Button(props) {
    const {
        onClick,
        text,
        disabled = false,
        appeareance = 'default',
        isBorderless = false,
        size = 'sm',
        children
    } = props;
    return (
        <ClassNames>
            {
                ({ cx }) => (
                    <StyledButton
                        onClick={onClick}
                        disabled={disabled}
                        className={cx(appeareance, size, { borderless: isBorderless })}
                    >
                        {children ? children : text}
                    </StyledButton>
                )
            }
        </ClassNames>
    );
}

Button.propTypes = {
    onClick: PropTypes.func.isRequired,
    text: PropTypes.string,
    children: PropTypes.any,
    appeareance: PropTypes.oneOf([
        'default',
        'primary',
        'destructive',
        'transparent'
    ]),
    size: PropTypes.oneOf([
        'xs',
        'sm',
        'lg'
    ]),
    disabled: PropTypes.bool,
    isBorderless: PropTypes.bool
};
