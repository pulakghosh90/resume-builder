import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import StringElement from '../input-elements/StringElement';
import FlexContainer from '../layout/Container';
import CheckboxElement from '../input-elements/CheckboxElement';
import RadioGroupElement from '../input-elements/RadioElement';
import SelectElement from '../input-elements/SelectElement';

const ControlComponents = {
    String: StringElement,
    Checkbox: CheckboxElement,
    Raddio: RadioGroupElement,
    Choice: SelectElement
};

const Label = styled('label')`
    flex-grow: 1;
    flex-basis: auto;
    width: 10%;
    text-align: right;
`;

const FormControlContainer = styled(FlexContainer)`
    margin: 10px 0;
`;

const FieldError = styled('div')`
    color: red;
    margin: 5px 0;
`;

const ControlContainer = styled('div')`
    flex-grow: 1;
    flex-basis: auto;
    width: 90%;
    text-align: left;
    margin: 0 15px;
`;

const FormControl = ({ field, onChange }) => {
    if (!field.visibility) return null;

    const Control = ControlComponents[field.controlType];
    const hasError = field.errors.length > 0;
    return (
        <ControlContainer>
            <Label>{field.label}</Label>
            {Control && <Control {...field} onChange={onChange} />}
            {
                hasError && field.errors.map((err) => (<FieldError key={err}>{err}</FieldError>))
            }
        </ControlContainer>
    );
};

const SectionContainer = styled('div')`
`;

const Section = ({ title, visible }) => (visible ? <SectionContainer>{title}</SectionContainer> : null);
const isSection = ({ section }) => section === true;
const preventSubmit = (e) => e.preventDefault();

export default function Form({ model, onChange }) {
    const fields = Array.from(model.fields.values());
    return (
        <form onSubmit={preventSubmit}>
            {
                fields.map((field) => (isSection(field)
                    ? <Section key={field.id} {...field} />
                    : (
                        <FormControlContainer key={field.id}>
                            <FormControl field={field} onChange={onChange} />
                        </FormControlContainer>
                    )
                ))
            }
        </form>
    );
}

Form.propsType = {
    model: PropTypes.array.isRequired,
    onChange: PropTypes.func.isRequired
};
