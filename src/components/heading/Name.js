import React from 'react';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';

const StyledField = styled('div')`
`;

const StyledName = styled('div')`
    font-size: ${(props) => props.fontSize};
    line-height: ${(props) => props.lineHeight};
    font-weight: ${(props) => props.fontWeight};
    padding: 0 0 28px 0;
    letter-spacing: .5px;
    text-transform: uppercase;
`;

export default function Name(props) {
    const {
        firstName,
        lastName,
        style
    } = props;
    return (
        <StyledName style={style}>
            <StyledField>{firstName}</StyledField>
            <StyledField>{lastName}</StyledField>
        </StyledName>
    );
}

Name.propTypes = {
    firstName: PropTypes.string.isRequired,
    lastName: PropTypes.string.isRequired,
    style: PropTypes.object
};
