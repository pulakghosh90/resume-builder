import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import { getFontSize, getFontWeight, getLineHeight, getAttr } from '../../theme/Theme';

const justify = ({ theme }) => (getAttr(theme, 'summary', 'summary', 'justify') ? 'text-align: justify;' : '');

const Container = styled('div')`
    position: relative;
    top: 40%;
    transform: translateY(-50%);
`;

const Title = styled('div')`
    font-size: ${({ theme }) => getFontSize(theme, 'summary', 'title')};
    line-height: ${({ theme }) => getLineHeight(theme, 'summary', 'title')};
    font-weight: ${({ theme }) => getFontWeight(theme, 'summary', 'title')};
`;

const StyledP = styled('p')`
    font-size: ${({ theme }) => getFontSize(theme, 'summary', 'summary')};
    line-height: ${({ theme }) => getLineHeight(theme, 'summary', 'summary')};
    font-weight: ${({ theme }) => getFontWeight(theme, 'summary', 'summary')};
    ${justify}
`;

export default function Summary(props) {
    const { title, summary } = props;
    return (
        <Container>
            <Title>{title}</Title>
            <StyledP>{summary}</StyledP>
        </Container>
    );
}

Summary.propTypes = {
    summary: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired
};
