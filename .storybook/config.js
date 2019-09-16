import React from 'react';
import { configure, addDecorator } from '@storybook/react';
import { checkA11y } from '@storybook/addon-a11y';
import { withOptions } from '@storybook/addon-options';
import { ThemeProvider } from 'emotion-theming';
import { DndProvider } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';
import theme from '../src/theme/Theme';
import GlobalStyles from '../src/util/GlobalStyles';
import { Provider } from 'react-redux';
import create from '../src/store/AppStore';

withOptions({ addonPanelInRight: true });

const componentStoriesReq = require.context('../src', true, /.stories.js$/);

function loadStories() {
    componentStoriesReq.keys().forEach((filename) => componentStoriesReq(filename));
}

const decorator = (story) => (
    <Provider store={create()}>
        <DndProvider backend={HTML5Backend}>
            <ThemeProvider theme={theme}>
                <GlobalStyles />
                {story()}
            </ThemeProvider>
        </DndProvider>
    </Provider>
);

// addDecorator(decorator);
addDecorator(checkA11y);
configure(loadStories, module);
