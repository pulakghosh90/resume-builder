import React from 'react';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';
import { getFontSize, getFontWeight, getLineHeight } from '../../theme/Theme';

const StyledField = styled('div')`
`;

const StyledName = styled('div')`
    font-size: ${({ theme }) => getFontSize(theme, 'heading', 'name')};
    line-height: ${({ theme }) => getLineHeight(theme, 'heading', 'name')};
    font-weight: ${({ theme }) => getFontWeight(theme, 'heading', 'name')};
`;

export default function Name(props) {
    const {
        firstName,
        lastName,
        showInCaps = false
    } = props;
    return (
        <StyledName>
            <StyledField>{showInCaps ? firstName.toUpperCase() : firstName}</StyledField>
            <StyledField>{showInCaps ? lastName.toUpperCase() : lastName}</StyledField>
        </StyledName>
    );
}

Name.propTypes = {
    firstName: PropTypes.string.isRequired,
    lastName: PropTypes.string.isRequired,
    showInCaps: PropTypes.bool
};
