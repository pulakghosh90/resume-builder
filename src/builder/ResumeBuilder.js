import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import PropertySheet from '../property-sheet/PropertySheet';
import Preview from '../preview/PreviewResume';
import Grid from '../components/layout/Grid';
import Section from '../section-control/Section';
import Loading from '../components/icon/Loading';

function Builder(props) {
    const columns = '1fr 3fr 2fr';
    const rows = '1fr';
    const { builder, dispatch } = props;
    const { selection, resume, loading } = builder;
    return (
        <Fragment>
            <Loading loading={loading} />
            <Grid height="700px" width="100%" columns={columns} rows={rows} gap={5}>
                <Section dispatch={dispatch} sections={resume.sections} />
                <Preview />
                <PropertySheet selection={selection} dispatch={dispatch} />
            </Grid>
        </Fragment>
    );
}

const mapStateToProps = ({ builder }) => ({ builder });

export default connect(mapStateToProps)(Builder);
