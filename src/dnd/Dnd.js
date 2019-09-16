import React from 'react';
import { useDrag, useDrop } from 'react-dnd';
import styled from '@emotion/styled';

const StyledDiv = styled('div')`
    color: ${({ color }) => color};
    font-weight: bold;
    opacity: ${(props) => props.opacity};
    font-size: 40px;
`;

const Board = styled('div')`
    width: 500px;
    height 500px;
    border: 1px solid grey;
`;

const Square = styled('div')`
    display: flex;
    flex-wrap: wrap;
    height: 100%;
    width: 100%;
    color: white;
    background-color: white;
`;

const Piece = styled('div')`
    width: 12.5%;
    height 12.5%;
    color: white;
    background-color: ${({ color }) => color};
    text-align: center;
`;

const Type = {
    Draggable: 'Draggable'
};

const noop = () => null;

const If = ({ test, children }) => (test ? children : null);

const chessBoard = () => {
    const board = [];
    for (let x = 0; x < 8; x++) {
        for (let y = 0; y < 8; y++) {
            const color = (x + y) % 2 === 0 ? 'black' : 'white';
            board.push(
                <Piece color={color} key={x * 8 + y}>
                    <If test={x === 0 && y === 1}>
                        <Horse />
                    </If>
                </Piece>
            );
        }
    }
    return board;
};

export const DragTarget = (props) => {
    const [{ isOver, canDrop }, drop] = useDrop({
        accept: Type.Draggable,
        // canDrop: noop,
        drop: () => console.log('dropped'),
        collect: (monitor) => ({
            isOver: !!monitor.isOver(),
            canDrop: !!monitor.canDrop()
        })
    });

    return (
        <Board ref={drop}>
            <Square>
                {
                    chessBoard()
                }
            </Square>
        </Board>
    );
};

export const Horse = () => {
    const [{ opacity, color }, drag] = useDrag({
        item: { type: Type.Draggable },
        collect: (monitor) => {
            return ({
                opacity: monitor.isDragging() ? 0.5 : 1,
                color: monitor.isDragging() ? 'red' : 'black',
            });
        }
    });

    return (
        <div ref={drag}>
            <StyledDiv opacity={opacity} color={color}>♘</StyledDiv>
        </div>
    );
};
