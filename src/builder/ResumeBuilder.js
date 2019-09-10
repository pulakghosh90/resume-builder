/* eslint-disable no-useless-constructor */
/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import Section from './section-control/Section';
import PropertySheet, { PropertySheetRegistry } from './property-sheet/PropertySheet';
import Preview from './preview/PreviewResume';
import Grid from '../components/layout/Grid';

export default class Builder extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        const columns = '1fr 3fr 2fr';
        const rows = '1fr auto';
        const { sectionType = 'heading' } = this.props;
        const model = PropertySheetRegistry({ sectionType });
        return (
            <Grid debug height="500px" width="100%" columns={columns} rows={rows} gap={3}>
                <Section />
                <Preview />
                <PropertySheet model={model.sheet} />
            </Grid>
        );
    }
}
