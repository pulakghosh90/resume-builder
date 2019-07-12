import React from 'react';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';
import { faAddressCard } from '@fortawesome/free-solid-svg-icons';
import Icon from '../icon/Icon';
import { getFontSize, getFontWeight, getLineHeight } from '../../theme/Theme';

const StyledText = styled('span')`

`;

const StyledAddress = styled('div')`
    font-size: ${({ theme }) => getFontSize(theme, 'heading', 'address')};
    line-height: ${({ theme }) => getLineHeight(theme, 'heading', 'address')};
    font-weight: ${({ theme }) => getFontWeight(theme, 'heading', 'address')};
    margin-top: 10px;
`;

export default function Address(props) {
    const { address } = props;
    return (
        <StyledAddress>
            <Icon icon={faAddressCard} />
            <StyledText>{address}</StyledText>
        </StyledAddress>
    );
}

Address.propTypes = {
    address: PropTypes.string.isRequired
};
