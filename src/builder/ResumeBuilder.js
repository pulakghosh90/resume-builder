/* eslint-disable no-useless-constructor */
/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import { connect } from 'react-redux';
import Section from './section-control/Section';
import PropertySheet from './property-sheet/PropertySheet';
import Preview from './preview/PreviewResume';
import Grid from '../components/layout/Grid';

class Builder extends React.Component {
    render() {
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
}

const mapStateToProps = ((state) => state);

export default connect(mapStateToProps)(Builder);
