import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';
import Button from '../button/Button';
import List from '../list/List';
import Icon from '../icon/Icon';
import IconButton from '../button/IconButton';

const formatTitle = ({ designation, company, city, state, startDate, endDate, currentCompany }) => (
    `${designation}, ${company} ${city}, ${state}
    ${startDate} - ${currentCompany ? 'Current' : endDate}`
);

const TitleContainer = styled('div')`
    margin-bottom: 10px;
    display: flex;
    justify-content: space-between;
    position: relative;
`;

const Toolbar = styled('div')`
    position: absolute;
    right: 5px;
`;

const Title = (props) => (
    <TitleContainer>
        <h4>{formatTitle(props)}</h4>
        <Toolbar>
            <IconButton icon={faEdit} />
            <IconButton icon={faTrash} />
        </Toolbar>
    </TitleContainer>
);

const Description = styled('div')`
    overflow: hidden;
    position: relative;

    &::after {
        content: '';
        position: absolute;
        width: 100%;
        left: 0;
        margin: 0;
        top: 43px;
        background-image: linear-gradient(to bottom, rgba(252,252,252,0) 0%, #fcfcfc 60%);
        height: 50px;
    }
`;

const Box = styled('div')`
    width: 100%;
    height: 150px;
    border: 1px solid grey;
    overflow: hidden;
    margin-bottom: 15px;
    padding: 10px;
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
`;

function WorkCard({ work }) {
    return (
        <Box>
            <Title {...work} />
            <Description >
                <List value={work.descriptions} />
            </Description>
        </Box>
    );
}

export default function WorkHistory(props) {
    const {
        id,
        onChange,
        value
    } = props;
    return (
        <div>
            WorkHistory
            {
                value.map((work) => (
                    <WorkCard key={work.company} work={work} />
                ))
            }
            <Button text="Add Work" appeareance="primary" />
        </div>
    );
}

WorkHistory.propTypes = {
    id: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    value: PropTypes.arrayOf(PropTypes.object).isRequired
};
