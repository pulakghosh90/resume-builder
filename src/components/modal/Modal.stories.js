import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, boolean, text, select } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';
import ModalElement from './Modal';

storiesOf('Modal Element', module)
    .addDecorator(withKnobs)
    .add('Modal', () => {

        return (
            <ModalElement
                title="Modal title"
                isOpen
                onClose={() => null}
                onSave={() => null}
                size="lg"
            >
                <div>This is modal body</div>
            </ModalElement>
        );
    });
