import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import styled from '@emotion/styled';
import PropertySheet from '../property-sheet/PropertySheet';
import Preview from '../preview/PreviewResume';
import Grid from '../components/layout/Grid';
import Section from '../section-control/Section';
import Loading from '../components/icon/Loading';
import Button from '../components/button/Button';
import { Action } from './Builder';

const CustomGrid = styled(Grid)`
    border: solid #f7f7f9;
    grid-template-columns: repeat(12, 1fr);
    grid-auto-rows: minmax(50px, auto);
    grid-template-areas:
      'hd hd hd hd hd hd hd hd hd hd hd hd'
      'lt lt main main main main main main rt rt rt rt';
`;

const FlexContainer = styled('header')`
    grid-area: hd;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 5px 15px;
    line-height: 32px;
    background-color: rgb(230, 232, 234);
    border-bottom: 1px solid rgb(189, 192, 196);
    box-shadow: rgba(0, 0, 0, 0.08) 0px 1px 2px;
`;

function Toolbar({ name, dispatch }) {
    return (
        <FlexContainer>
            <div>
                <span>{`Resume: ${name}`}</span>
            </div>
            <div>
                <Button text="Download" size="sm" onClick={() => dispatch(Action.Download())} />
                <Button text="Add Section" size="sm" onClick={() => dispatch(Action.AddSection())} />
                <Button text="Duplicate" size="sm" onClick={() => dispatch(Action.Duplicate())} />
                <Button text="Delete" size="sm" onClick={() => dispatch(Action.Delete())} />
                <Button text="Save" size="sm" onClick={() => dispatch(Action.Save())} />
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
            <CustomGrid height="100%" width="100%">
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
