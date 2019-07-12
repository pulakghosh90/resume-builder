import React from 'react';
import Grid from '../components/layout/Grid';
import Heading from '../components/heading/Heading';
import Box from '../components/container/Box';
import theme, { getBackgroundColor } from '../theme/Theme';

const Colors = {
    essentialEcru: '#bca97e',
    essentialEcruLight: 'rgba(188, 169, 126, 0.1)',
    essentialEcruDark: 'rgba(188, 169, 126, 0.5)',
    essentialEcruMedium: 'rgba(188, 169, 126, 0.2)',
    white: '##ffffff'
};

const Layout = ({ children }) => {
    const columns = '2fr 5fr';
    const rows = '1fr 2fr';
    return (
        <Grid columns={columns} rows={rows}>
            {children}
        </Grid>
    );
};

export default function Resume(props) {
    return (
        <Layout>
            <Box hAlign="left" backgroundColor={getBackgroundColor(theme, 'heading')}>
                <Heading {...props} theme={theme} />
            </Box>
            <Box backgroundColor={getBackgroundColor(theme, 'summary')}>This is summary</Box>
            <Box hAlign="left" backgroundColor={getBackgroundColor(theme, 'leftPanel')}>This is left side</Box>
            <Box hAlign="left" backgroundColor={getBackgroundColor(theme, 'content')}>This is content</Box>
        </Layout>
    );
}
