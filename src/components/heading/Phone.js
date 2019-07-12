import React from 'react';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';
import { faMobileAlt } from '@fortawesome/free-solid-svg-icons';
import Icon from '../icon/Icon';
import { getFontSize, getFontWeight, getLineHeight } from '../../theme/Theme';

const StyledPhone = styled('div')`
    font-size: ${({ theme }) => getFontSize(theme, 'heading', 'phone')};
    line-heightheme: ${({ theme }) => getLineHeight(theme, 'heading', 'phone')};
    font-weight: ${({ theme }) => getFontWeight(theme, 'heading', 'phone')};
    margin-top: 10px;
`;

const StyledText = styled('span')`

`;

export default function Phone(props) {
    const { phone } = props;
    return (
        <StyledPhone>
            <Icon icon={faMobileAlt} />
            <StyledText>{phone}</StyledText>
        </StyledPhone>
    );
}

Phone.propTypes = {
    phone: PropTypes.string.isRequired
};
