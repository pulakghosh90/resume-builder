import React from 'react';
import { storiesOf } from '@storybook/react';
import StoryRouter from 'storybook-react-router';
import App from './app';

storiesOf('Application', module)
    .addDecorator(StoryRouter())
    .add('Routes', () => <App />);
