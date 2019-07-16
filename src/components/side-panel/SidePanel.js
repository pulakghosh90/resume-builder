import React from 'react';
import PropTypes from 'prop-types';
import Skill from '../skill/Skill';

export default function SidePanel(props) {
    const { skills } = props;
    return (
        <Skill skills={skills} />
    );
}
