import React from 'react';

import { storiesOf } from '@storybook/react';
import { actions, configureActions } from '@storybook/addon-actions';
import { withKnobs, text, select, boolean, array } from '@storybook/addon-knobs';

import StringElement from './StringElement';
import RadioGroupElement from './RadioElement';
import CheckboxElement, { CheckboxGroup } from './CheckboxElement';
import SelectElement from './SelectElement';

configureActions({
    clearOnStoryChange: true
});

storiesOf('Input Elements', module)
    .addDecorator(withKnobs)
    .add('StringElement', () => {
        const readOnly = boolean('Readonly', false);
        const placeHolder = text('PlaceHolder', 'This is a String Element');
        const size = select('Size', ['default', 'sm', 'lg'], 'default');
        const { onChange } = actions('onChange');
        return (
            <StringElement
                id="string-el"
                value=""
                onChange={onChange}
                size={size}
                readOnly={readOnly}
                placeHolder={placeHolder}
            />
        );
    })
    .add('RadioGroup', () => {
        const inline = boolean('Inline', true);
        const value = select('Value', ['option1', 'option2', 'option3'], 'option1');
        const choices = [
            {
                label: 'Option1',
                value: 'option1'
            },
            {
                label: 'Option2',
                value: 'option2'
            },
            {
                label: 'Option3',
                value: 'option3',
                readOnly: true
            }
        ];
        const { onChange } = actions('onChange');
        return (
            <RadioGroupElement
                id="radio-group"
                value={value}
                onChange={onChange}
                choices={choices}
                inline={inline}
            />
        );
    })
    .add('CheckboxElement', () => {
        const readOnly = boolean('Readonly', false);
        const { onChange } = actions('onChange');
        return (
            <CheckboxElement
                id="checkbox-el"
                value="option1"
                onChange={onChange}
                readOnly={readOnly}
            />
        );
    })
    .add('CheckboxGroup', () => {
        const inline = boolean('Inline', false);
        // const value = text('Value', ['select1', 'select2', 'select3'], 'select1');
        const value = ['select1', 'select2', 'select3'];
        const choices = [
            {
                label: 'Select1',
                value: 'select1'
            },
            {
                label: 'Select2',
                value: 'select2'
            },
            {
                label: 'Select3',
                value: 'select3'
            }
        ];
        const { onChange } = actions('onChange');
        return (
            <CheckboxGroup
                id="checkbox-group"
                value={value}
                onChange={onChange}
                choices={choices}
                inline={inline}
            />
        );
    })
    .add('SelectElement', () => {
        const value = select('Value', ['option1', 'option2', 'option3'], 'option1');
        const choices = [
            {
                label: 'Option1',
                value: 'option1'
            },
            {
                label: 'Option2',
                value: 'option2'
            },
            {
                label: 'Option3',
                value: 'option3',
                readOnly: true
            }
        ];
        const size = select('Size', ['default', 'sm', 'lg'], 'default');
        const { onChange } = actions('onChange');
        return (
            <SelectElement
                id="select-el"
                value={value}
                choices={choices}
                onChange={onChange}
                size={size}
            />
        );
    });
