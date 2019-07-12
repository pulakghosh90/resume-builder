import React from 'react';
import styled from '@emotion/styled';
import { storiesOf } from '@storybook/react'
import { withKnobs, text, boolean, select, number } from '@storybook/addon-knobs';
import Grid from './Grid';
// import Container from './Container'


const Box = styled('div')`
  border: dashed grey 1px;
  min-height: 50px;
  min-width: 100px;
  margin: 3px;
  padding: 3px;
`;

// const directions = {
//     horizontal: 'horizontal',
//     vertical: 'vertical',
// };

// const vAlign = {
//     top: 'top',
//     center: 'center',
//     bottom: 'bottom',
// };

// const hAlign = {
//     left: 'left',
//     center: 'center',
//     right: 'right',
// };


storiesOf('Layout Components', module)
    .addDecorator(withKnobs)
    // .add('flex container', () => {

    //     const reverse = boolean('Reverse', false);
    //     const direction = select('Direction', directions, 'horizontal')
    //     const vert = select('Vertical', vAlign, 'top')
    //     const horz = select('Horizontal', hAlign, 'center')


    //     return (
    //         <Container debug reverse={reverse} direction={direction} halign={horz} valign={vert} style={{ height: 400 }}>
    //             <Box>a</Box>
    //             <Box>b</Box>
    //             <Box>c</Box>
    //         </Container>
    //     )
    // })
    .add('grid container', () => {
        const columns = text('Columns', '1fr 1fr');
        const rows = text('Rows', '1fr 2fr auto');
        const gap = number('Gap', 0);
        return (
            <Grid debug columns={columns} rows={rows} gap={gap} >
                <Box>not implemented yet</Box>
                <Box>not implemented yet</Box>
                <Box>not implemented yet</Box>
                <Box>not implemented yet</Box>
                <Box>not implemented yet</Box>
                <Box>not implemented yet</Box>
                <Box>not implemented yet</Box>
            </Grid>
        );
    });
