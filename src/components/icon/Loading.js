import React from 'react';
import styled from '@emotion/styled';
import loading from './loader.svg';

const Center = styled('div')`
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    margin: auto;
    justify-content: center;
`;

export default function Loading() {
    return (
        <Center>
            <img alt="loading" src={loading} />
        </Center>
    );
}
