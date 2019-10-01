/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';
import Form from '../components/form/Form';

const Container = styled('div')`
    grid-area: rt;
    height: 100%;
    width: 100%;
`;

const Title = styled('h2')`
    background-color: rgb(250, 250, 250);
    line-height: 32px;
    font-size: 16px;
    margin: 0px;
    padding: 0px 5px;
    color: rgb(115, 115, 115);
    border: 1px solid rgb(240, 242, 243);
`;

const Para = styled('p')`
    width: 75%;
    margin: 35px auto;
    color: rgb(115, 115, 115);
    font-weight: 400;
    font-size: 14px;
`;

class PropertySheet extends React.Component {
    static propTypes = {
        dispatch: PropTypes.func.isRequired,
        model: PropTypes.shape({
            action: PropTypes.string,
            fields: PropTypes.objectOf(Map)
        }).isRequired
    }

    onChange = ({ id, value }) => {
        const { dispatch, model } = this.props;
        dispatch({
            type: model.action,
            id,
            value
        });
    }

    render() {
        const { model } = this.props;
        return (
            <Form model={model} onChange={this.onChange} />
        );
    }
}

const Properties = ({ selection, dispatch }) => (
    selection.fold({
        Nothing: () => (
            <Container>
                <Title>Please select section to update</Title>
                <Para>Please select an item from the canvas to view its properties</Para>
            </Container>
        ),
        Just: ({ sheet }) => (
            <Container>
                <Title>{sheet.heading}</Title>
                <PropertySheet model={sheet} dispatch={dispatch} />
            </Container>
        )
    })
);

export default Properties;
