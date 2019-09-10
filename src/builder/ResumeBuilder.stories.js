import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, boolean, text, select } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';
import Builder from './ResumeBuilder';


storiesOf('Builder', module)
    .addDecorator(withKnobs)
    .add('Builder', () => {
        return (
            <Builder />
        );
    });
