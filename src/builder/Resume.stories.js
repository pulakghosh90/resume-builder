import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, boolean, text, select } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';
import Resume from './Resume';


storiesOf('Resume', module)
    .addDecorator(withKnobs)
    .add('Resume', () => {

        const props = {
            heading: {
                firstName: 'asfs',
                lastName: 'asfsef',
                phone: 'sfs',
                email: 'asdff.sfsfsf@gmail.com',
                address: "asdfsfdsfsfsfdsf"
            },
            summary: {
                title: 'What is Lorem Ipsum?',
                summary: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`
            }
        };

        return (
            <Resume className="topsection" {...props} />
        );
    });
