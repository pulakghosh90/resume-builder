import React from 'react';
import PropertySheet from '../property-sheet/PropertySheet';
import Preview from '../preview/PreviewResume';
import Grid from '../components/layout/Grid';
import Section from '../section-control/Section';

function Builder() {
    const columns = '1fr 3fr 2fr';
    const rows = '1fr auto';
    return (
        <Grid debug height="700px" width="100%" columns={columns} rows={rows} gap={3}>
            <Section />
            <Preview />
            <PropertySheet />
        </Grid>
    );
}

export default Builder;
