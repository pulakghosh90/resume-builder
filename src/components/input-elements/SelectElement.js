import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import { ClassNames } from '@emotion/core';
import { formControlStyles } from './formControlStyles';

// TO DO: use react-select
const StyledSelect = styled('select')`
    ${formControlStyles}
    height: calc(2.25rem + 2px);

    &.lg {
        height: calc(2.875rem + 2px);
    }

    &.sm {
        height: calc(1.8125rem + 2px);
    }
`;

export default function SelectElement(props) {
    const {
        id,
        onChange,
        readOnly = false,
        value,
        choices = [],
        className,
        size
    } = props;
    return (
        <ClassNames>
            {
                ({ cx }) => (
                    <StyledSelect
                        value={value}
                        onChange={(e) => onChange({ id, value: e.target.value, e })}
                        className={cx(className, size, { disabled: readOnly })}
                    >
                        {
                            choices.map(({ label, value }, idx) => <option key={idx} value={value}>{label}</option>)
                        }
                    </StyledSelect>
                )
            }
        </ClassNames>
    );
}

SelectElement.propTypes = {
    id: PropTypes.string.isRequired,
    value: PropTypes.string,
    choices: PropTypes.arrayOf(PropTypes.shape({
        label: PropTypes.string,
        value: PropTypes.string
    })).isRequired,
    onChange: PropTypes.func.isRequired,
    readOnly: PropTypes.bool,
    className: PropTypes.string,
    size: PropTypes.oneOf([
        'default',
        'sm',
        'lg'
    ])
};
