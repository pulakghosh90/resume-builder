import React from 'react';
import styled from '@emotion/styled';


const StyledContentPanel = styled('div')`
    padding: 30px;
    width: 70%;
    border: 1px dotted black;
`;

export default function ContentPanel() {
    return (
        <StyledContentPanel>This is a content panel</StyledContentPanel>
    );
}
