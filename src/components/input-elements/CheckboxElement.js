/* eslint-disable no-nested-ternary */
import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import { ClassNames } from '@emotion/core';

const toSet = (list) => new Set(list);
const toArray = (set) => Array.from(set);
const coerceBoolean = (value) => (typeof value === 'boolean' ? value : (value === 'false' ? false : !!value));

const StyledCheckbox = styled('input')`
`;

export default function CheckboxElement(props) {
    const {
        id,
        onChange,
        readOnly = false,
        value,
        className
    } = props;
    return (
        <ClassNames>
            {
                ({ cx }) => (
                    <StyledCheckbox
                        type="checkbox"
                        checked={coerceBoolean(value)}
                        onChange={(e) => !readOnly && onChange({ id, value: e.target.checked, e })}
                        className={cx(className, { disabled: readOnly })}
                    />
                )
            }
        </ClassNames>
    );
}

CheckboxElement.propTypes = {
    id: PropTypes.string.isRequired,
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
    onChange: PropTypes.func.isRequired,
    readOnly: PropTypes.bool,
    className: PropTypes.string
};

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
    top: 2px;
`;

export class CheckboxGroup extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: toSet(props.value)
        };
    }

    onChange = ({ id: nid, value: checked }) => {
        const { value } = this.state;
        if (checked) value.add(nid);
        else value.delete(nid);
        this.setState({ value });

        const { id, onChange } = this.props;
        onChange({ id, value: toArray(value) });
    }

    render() {
        const {
            choices = [],
            className,
            inline = false
        } = this.props;
        const { value } = this.state;
        return (
            <GroupContainer className={inline && 'inline'}>
                {
                    choices.map((choice) => (
                        <Container key={choice.value}>
                            <CheckboxElement
                                name={choice.value}
                                value={value.has(choice.value)}
                                readOnly={choice.readOnly}
                                className={className}
                                onChange={this.onChange}
                            />
                            <StyledLabel>{choice.label}</StyledLabel>
                        </Container>
                    ))
                }
            </GroupContainer>
        );
    }
}

CheckboxGroup.propTypes = {
    id: PropTypes.string.isRequired,
    value: PropTypes.arrayOf(PropTypes.string).isRequired,
    choices: PropTypes.arrayOf(PropTypes.shape({
        label: PropTypes.string,
        value: PropTypes.string,
        readOnly: PropTypes.bool
    })).isRequired,
    onChange: PropTypes.func.isRequired,
    className: PropTypes.string,
    inline: PropTypes.bool
};
