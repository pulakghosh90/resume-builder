import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, boolean, text, select } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';
import Resume from './Resume';


storiesOf('Resume', module)
    .addDecorator(withKnobs)
    .add('Resume', () => {

        const props = {
            firstName: 'Pulakendu',
            lastName: 'Ghosh',
            phone: '9007065606',
            email: 'pulak.ghosh90@gmail.com'
        };

        return (
            <Resume className="topsection" {...props} />
        );
    });
