import React from 'react';
import styled from '@emotion/styled';
import { connect } from 'react-redux';

const Container = styled('div')`
    border-left: 1px solid grey;
    border-right: 1px solid grey;
    height: 100%;
    width: 100%;
    padding: 10px;
`;

class Preview extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <Container>
                This is Preview
            </Container>
        );
    }
}

export default connect((state) => state)(Preview);
