import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import List from '../list/List';

const Title = styled('span')`
    font-size: 22px;
    line-height: 22px;
    font-weight: regular;
    padding-left: 25px;
`;

export default function Skill(props) {
    const { skills } = props;
    return (
        <div>
            <Title>SKILL</Title>
            <List list={skills} />
        </div>
    );
}

List.propTypes = {
    skills: PropTypes.arrayOf(PropTypes.string).isRequired
};
