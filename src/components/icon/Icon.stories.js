import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';
import { faTrashAlt, faTrash } from '@fortawesome/free-solid-svg-icons';
import Icon from './Icon';

storiesOf('Icon', module)
    .addDecorator(withKnobs)
    .add('faTrashAlt', () => {
        return <Icon icon={faTrashAlt} />
    })
    .add('faTrash', () => {
        return <Icon icon={faTrash} />
    });
