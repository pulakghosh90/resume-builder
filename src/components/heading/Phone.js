import React from 'react';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';
import { faMobileAlt } from '@fortawesome/free-solid-svg-icons';
import Icon from '../icon/Icon';

const StyledPhone = styled('div')`
    font-size: ${(props) => props.fontSize};
    line-height: ${(props) => props.lineHeight};
    font-weight: ${(props) => props.fontWeight};
`;

const StyledText = styled('span')`
    padding-left: 5px;
`;

export default function Phone(props) {
    const { phone, style } = props;
    return (
        <StyledPhone style={style}>
            <Icon icon={faMobileAlt} />
            <StyledText>{phone}</StyledText>
        </StyledPhone>
    );
}

Phone.propTypes = {
    phone: PropTypes.string.isRequired,
    style: PropTypes.object
};
