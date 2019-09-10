import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, boolean, text, select } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';
import Button from './Button';

storiesOf('Button', module)
    .addDecorator(withKnobs)
    .add('Button', () => {
        const disabled = boolean('Disabled', false);
        const isBorderless = boolean('Borderless', false);
        const t = text('Text', 'Save');
        const appeareance = select('Appeareance', ['default', 'primary', 'destructive'], 'primary');
        const size = select('Size', ['xs', 'sm', 'lg'], 'sm');
        return (
            <Button
                text={t}
                disabled={disabled}
                isBorderless={isBorderless}
                onClick={action('Clicked')}
                appeareance={appeareance}
                size={size}
            />
        );
    });
