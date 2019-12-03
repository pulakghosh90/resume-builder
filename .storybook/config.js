import React from 'react';
import Modal from 'react-modal';
import { configure, addDecorator, addParameters } from '@storybook/react';
import { checkA11y } from '@storybook/addon-a11y';
import { ThemeProvider } from 'emotion-theming';
import { DndProvider } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';
import theme from '../src/theme/Theme';
import GlobalStyles from '../src/util/GlobalStyles';
import { Provider } from 'react-redux';
import create from '../src/store/AppStore';

const componentStoriesReq = require.context('../src', true, /.stories.js$/);

function loadStories() {
    componentStoriesReq.keys().forEach((filename) => componentStoriesReq(filename));
}

const decorator = (story) => (
    <DndProvider backend={HTML5Backend}>
        <ThemeProvider theme={theme}>
            <GlobalStyles />
            {story()}
        </ThemeProvider>
    </DndProvider>
);

addDecorator(decorator);
addDecorator((story) => {
    Modal.setAppElement('#root');
    return story();
})
addDecorator(checkA11y);

addParameters({
    options: {
        panelPosition: 'right'
    }
});

configure(loadStories, module);
