import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import styled from '@emotion/styled';
import PropertySheet from '../property-sheet/PropertySheet';
import Preview from '../preview/PreviewResume';
import Grid from '../components/layout/Grid';
import Section from '../section-control/Section';
import Loading from '../components/icon/Loading';
import Button from '../components/button/Button';
import Container from '../components/layout/Container';
import { Action } from './Builder';

const CustomGrid = styled(Grid)`
    border: solid #f7f7f9;
    grid-template-columns: repeat(12, 1fr);
    grid-auto-rows: minmax(50px, auto);
    grid-template-areas:
      'hd hd hd hd hd hd hd hd hd hd hd hd'
      'lt lt main main main main main main rt rt rt rt';
`;

const FlexContainer = styled(Container)`
    grid-area: hd;
    border-bottom: solid #f7f7f9;
    height: 50px;
    justify-content: space-between;
    align-items: center;
    padding: 5px 15px;
`;

function Toolbar({ name, dispatch }) {
    return (
        <FlexContainer>
            <div>
                <span>{name}</span>
            </div>
            <div>
                <Button text="Download" onClick={() => dispatch(Action.Download())} />
                <Button text="Add Section" onClick={() => dispatch(Action.AddSection())} />
                <Button text="Duplicate" onClick={() => dispatch(Action.Duplicate())} />
                <Button text="Delete" appeareance="destructive" onClick={() => dispatch(Action.Delete())} />
                <Button text="Save" appeareance="primary" onClick={() => dispatch(Action.Save())} />
            </div>
        </FlexContainer>
    );
}

function Builder(props) {
    const { builder, dispatch } = props;
    const { selection, resume, loading } = builder;
    return (
        <Fragment>
            <Loading loading={loading} />
            <CustomGrid height="100%" width="100%" gap={5}>
                <Toolbar dispatch={dispatch} name={resume.name} />
                <Section dispatch={dispatch} sections={resume.sections} />
                <Preview />
                <PropertySheet selection={selection} dispatch={dispatch} />
            </CustomGrid>
        </Fragment>
    );
}

const mapStateToProps = ({ builder }) => ({ builder });

export default connect(mapStateToProps)(Builder);
