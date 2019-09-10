import React from 'react';
import styled from '@emotion/styled';

const Container = styled('div')`
    border: dashed grey 1px;
    height: 100%;
    width: 100%;
`;

export default class Preview extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return <Container>This is Preview</Container>
    }
}
