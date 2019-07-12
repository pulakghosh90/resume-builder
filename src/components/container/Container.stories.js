import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, boolean, text, select } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';
import Container from './Container';


storiesOf('Container', module)
    .addDecorator(withKnobs)
    .add('Container', () => {

        const props = {
            firstName: 'Pulakendu',
            lastName: 'Ghosh',
            phone: '9007065606',
            email: 'pulak.ghosh90@gmail.com'
        };

        return (
            <Container className="topsection" {...props} />
        );
    });
