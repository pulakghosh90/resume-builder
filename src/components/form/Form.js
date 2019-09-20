/* eslint-disable no-nested-ternary */
import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import { faAsterisk } from '@fortawesome/free-solid-svg-icons'
import StringElement from '../input-elements/StringElement';
import FlexContainer from '../layout/Container';
import CheckboxElement from '../input-elements/CheckboxElement';
import RadioGroupElement from '../input-elements/RadioElement';
import SelectElement from '../input-elements/SelectElement';
import Icon from '../icon/Icon';
import WorkHistory from '../resume-section/WorkHistory';

const ControlComponents = {
    String: StringElement,
    Checkbox: CheckboxElement,
    Raddio: RadioGroupElement,
    Choice: SelectElement,
    // TODO: implement specific control
    Date: StringElement,
    WorkHistory
};

const StyledLabel = styled('label')`
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

const RequiredMarker = ({ hasValue }) => {
    const color = hasValue ? '#666666' : '#C83C36';
    return <Icon icon={faAsterisk} color={color} fontSize="8px" />;
};

const Label = ({ hasValue, text, required }) => (
    <StyledLabel>
        {required && <RequiredMarker hasValue={hasValue} />}
        <span>{text}</span>
    </StyledLabel>
);

const FormControl = ({ field, onChange }) => {
    if (!field.visibility) return null;

    const Control = ControlComponents[field.controlType];
    const hasError = field.errors.length > 0;
    const hasValue = !!field.value;
    return (
        <ControlContainer>
            <Label hasValue={hasValue} text={field.label} required={field.required} />
            {Control && <Control {...field} onChange={onChange} />}
            {
                hasError && field.errors.map((err) => (<FieldError key={err}>{err}</FieldError>))
            }
        </ControlContainer>
    );
};

const SectionContainer = styled('div')`
    color: #666;
    font-size: 16px;
    line-height: 1.25;
    font-weight: 400;
    margin-bottom: 5px;
`;

const HeadingContainer = styled('div')`
    font-size: 26px;
    color: #277fd9;
    line-height: 1.5;
    margin-bottom: 5px;
    font-weight: 300;
`;

const Section = ({ title, visibility }) => (visibility ? <SectionContainer>{title}</SectionContainer> : null);
const Heading = ({ title, visibility }) => (visibility ? <HeadingContainer>{title}</HeadingContainer> : null);
const isSection = ({ section }) => section === true;
const isHeading = ({ heading }) => heading === true;
const preventSubmit = (e) => e.preventDefault();

export default function Form({ model, onChange }) {
    const fields = Array.from(model.fields.values());
    return (
        <form onSubmit={preventSubmit}>
            {
                fields.map((field) => (
                    isHeading(field) ? <Heading key={field.id} {...field} />
                        : isSection(field)
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
