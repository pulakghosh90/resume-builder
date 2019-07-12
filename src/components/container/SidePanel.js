import React from 'react';
import styled from '@emotion/styled';
import Heading from '../heading/Heading';

const StyledPanel = styled('div')`
    padding: 30px;
    width: 30%;
    border: 1px dotted black;
    background-color: #bca97e;
    border-left: 1px solid transparent;
    opacity: .5;
    z-index: -1;
`;

export default function SidePanel(props) {
    return (
        <StyledPanel>
            <Heading {...props} />
        </StyledPanel>
    );
}
