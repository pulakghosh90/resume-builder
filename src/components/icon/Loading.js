import React from 'react';
import styled from '@emotion/styled';
import spinner from './loader.svg';
import { If } from '../If';

const Center = styled('div')`
    // width: 100%;
    // height: 100%;
    // display: flex;
    // align-items: center;
    // margin: auto;
    // justify-content: center;

    position: fixed;
    top: 50%;
    left: 50%;
`;

export default function Loading({ loading = true }) {
    return (
        <If test={loading}>
            <Center>
                <img alt="loading" src={spinner} />
            </Center>
        </If>
    );
}
