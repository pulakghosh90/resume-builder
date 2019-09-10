import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, boolean, text, select } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';
import { DragTarget } from './Dnd';


storiesOf('DNDDemo', module)
    .addDecorator(withKnobs)
    .add('DND', () => {

        return (
            <DragTarget />
        );
    });
