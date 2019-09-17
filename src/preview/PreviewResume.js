import React from 'react';
import styled from '@emotion/styled';
import { connect } from 'react-redux';
import Grid from '../components/layout/Grid';

const Container = styled('div')`
    border-left: 1px solid grey;
    border-right: 1px solid grey;
    height: 100%;
    width: 100%;
    padding: 10px;
`;

const Box = styled('div')`
    border: 1px dashed grey;
    padding: 10px;
`;

const PersonalDetail = ({ heading, link }) => {
    const { firstName, lastName, email, phone, address, } = heading;
    return (
        <div>
            <h1>{`${firstName} ${lastName}`}</h1>
            <h3>{email}</h3>
            <h3>{phone}</h3>
            <h3>{address}</h3>
        </div>
    );
};

class Preview extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        const columns = '1fr 2fr';
        const rows = '3fr 5fr';
        const { resume } = this.props;
        const { sections } = resume;
        return (
            <Container>
                This is Preview
                <Grid height="100%" width="100%" columns={columns} rows={rows} gap={0}>
                    <Box>
                        {sections && <PersonalDetail {...sections} />}
                    </Box>
                    <Box>Professional Summary</Box>
                    <Box>More Info</Box>
                    <Box>Work History</Box>
                </Grid>
            </Container>
        );
    }
}

export default connect(({ builder }) => builder)(Preview);
