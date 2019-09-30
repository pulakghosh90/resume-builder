import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import { ClassNames } from '@emotion/core';
import { formControlStyles } from './formControlStyles';
import commonProps from './commonProps';

const StyledInput = styled('input')`
    ${formControlStyles}

    &:focus {
        color: #495057;
        background-color: #fff;
        border-color: #80bdff;
        outline: 0;
        box-shadow: 0 0 0 0.2rem rgba(0,123,255,.25);
    }

    &.sm {
        padding: .25rem .5rem;
        font-size: .875rem;
        line-height: 1.5;
        border-radius: .2rem;
    }

    &.lg {
        padding: .5rem 1rem;
        font-size: 1.25rem;
        line-height: 1.5;
        border-radius: .3rem;
    }
`;

export default function StringElement(props) {
    const {
        id,
        onChange,
        value,
        size = 'default',
        readOnly = false,
        placeHolder,
        className
    } = props;
    return (
        <ClassNames>
            {
                ({ cx }) => (
                    <StyledInput
                        type="text"
                        value={value}
                        placeholder={placeHolder}
                        onChange={(e) => onChange({ id, value: e.target.value, e })}
                        size={size}
                        className={cx(className, size, { disabled: readOnly })}
                    />
                )
            }
        </ClassNames>
    );
}

StringElement.propTypes = {
    ...commonProps,
    size: PropTypes.oneOf([
        'sm',
        'lg',
        'default'
    ])
};
