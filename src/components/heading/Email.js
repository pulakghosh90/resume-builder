import React from 'react';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import Icon from '../icon/Icon';

const StyledText = styled('span')`
    padding-left: 5px;
`;

const StyledEmail = styled('div')`
    font-size: ${(props) => props.fontSize};
    line-height: ${(props) => props.lineHeight};
    font-weight: ${(props) => props.fontWeight};
    margin-bottom: 10px;
    min-height: 15px;
`;

export default function Email(props) {
    const { email, style } = props;
    return (
        <StyledEmail style={style}>
            <Icon icon={faEnvelope} />
            <StyledText>{email}</StyledText>
        </StyledEmail>
    );
}

Email.propTypes = {
    email: PropTypes.string.isRequired,
    style: PropTypes.object
};
