import React from 'react';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import Icon from '../icon/Icon';
import { getFontSize, getFontWeight, getLineHeight } from '../../theme/Theme';

const StyledText = styled('span')`

`;

const StyledEmail = styled('div')`
    font-size: ${({ theme }) => getFontSize(theme, 'heading', 'email')};
    line-height: ${({ theme }) => getLineHeight(theme, 'heading', 'email')};
    font-weight: ${({ theme }) => getFontWeight(theme, 'heading', 'email')};
    margin-top: 10px;
`;

export default function Email(props) {
    const { email } = props;
    return (
        <StyledEmail>
            <Icon icon={faEnvelope} />
            <StyledText>{email}</StyledText>
        </StyledEmail>
    );
}

Email.propTypes = {
    email: PropTypes.string.isRequired
};
