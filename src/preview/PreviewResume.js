import React from 'react';
import styled from '@emotion/styled';
import { connect } from 'react-redux';
import Loading from '../components/icon/Loading';
import { If } from '../components/If';

const Container = styled('div')`
    border: dashed grey 1px;
    height: 100%;
    width: 100%;
`;

class Preview extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        const { builder } = this.props;
        const { loading } = builder;
        return (
            <Container>
                <If test={loading}>
                    <Loading />
                </If>
                <If test={!loading}>
                    This is Preview
                </If>
            </Container>
        );
    }
}

export default connect((state) => state)(Preview);
