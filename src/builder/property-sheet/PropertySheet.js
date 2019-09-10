/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';
import { keySwitch } from '../../util/util';
import * as heading from './Heading.sheet';
import Form from '../../components/form/Form';
import SheetMutation from './model-builder/SheetMutation';

const Container = styled('div')`
    border: dashed grey 1px;
    height: 100%;
    width: 100%;
`;

export const PropertySheetRegistry = keySwitch('sectionType', {
    heading: () => heading
});

export default class PropertySheet extends React.Component {
    static propTypes = {
        dispatch: PropTypes.func.isRequired,
        model: PropTypes.shape({
            action: PropTypes.string,
            fields: PropTypes.array
        }).isRequired
    }

    onChange = ({ id, value }) => {
        const { dispatch, model } = this.props;
        const newModel = SheetMutation(model).setValue(id, value).save();
        dispatch({
            type: model.action,
            propertySheet: newModel
        });
    }

    render() {
        const { model } = this.props;
        return (
            <Container>
                This is PropertySheet
                <Form model={model} onChange={this.onChange} />
            </Container>
        );
    }
}
