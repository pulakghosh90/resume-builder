import React from 'react';
import { Provider } from 'react-redux';
import { ThemeProvider } from 'emotion-theming';
import { DndProvider } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';
import theme from './theme/Theme';
import GlobalStyles from './util/GlobalStyles';
import create from './store/AppStore';
import AppRoutes from './route/AppRoutes';

export default function App() {
    return (
        <Provider store={create()}>
            <DndProvider backend={HTML5Backend}>
                <ThemeProvider theme={theme}>
                    <GlobalStyles />
                    <AppRoutes />
                </ThemeProvider>
            </DndProvider>
        </Provider>
    );
}
