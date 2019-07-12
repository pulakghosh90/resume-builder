import React from 'react';
import styled from '@emotion/styled';
import SidePanel from './SidePanel';
import ContentPanel from './ContentPanel';


const StyledContainer = styled('div')`
    align-content: stretch;
    flex-wrap: wrap;
    display: flex;

    &.topsection {
        margin-left: -12px;
        margin-right: -12px;
    }
`;

export default function Container(props) {
    const { clasName } = props;
    return (
        <StyledContainer className={clasName}>
            <SidePanel {...props} />
            <ContentPanel {...props} />
        </StyledContainer>
    );
}
