import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import { ClassNames } from '@emotion/core';
import { disabledClass } from './formControlStyles';

const StyledRadio = styled('input')`
    cursor: pointer;

    ${disabledClass}
`;

const GroupContainer = styled('div')`
    &.inline {
        display: flex;
    }
`;

const Container = styled('div')`
    padding: 5px;
`;

const StyledLabel = styled('label')`
    padding-left: 5px;
    position: relative;
    top: 1px;
`;

export default function RadioGroupElement(props) {
    const {
        id,
        onChange,
        value,
        choices = [],
        className,
        inline = false
    } = props;
    return (
        <ClassNames>
            {
                ({ cx }) => (
                    <GroupContainer className={inline && 'inline'}>
                        {
                            choices.map((choice) => (
                                <Container key={choice.value}>
                                    <StyledRadio
                                        type="radio"
                                        value={choice.value}
                                        checked={choice.value === value}
                                        onChange={(e) => onChange({ id, value: choice.value, e })}
                                        className={cx(className, { disabled: choice.readOnly })}
                                    />
                                    <StyledLabel>{choice.label}</StyledLabel>
                                </Container>
                            ))
                        }
                    </GroupContainer>
                )
            }
        </ClassNames>
    );
}

RadioGroupElement.propTypes = {
    id: PropTypes.string.isRequired,
    value: PropTypes.string,
    choices: PropTypes.arrayOf(PropTypes.shape({
        label: PropTypes.string,
        value: PropTypes.string,
        readOnly: PropTypes.bool
    })),
    onChange: PropTypes.func.isRequired,
    className: PropTypes.string,
    inline: PropTypes.bool
};
