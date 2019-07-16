import React from 'react';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';

const StyledList = styled('ul')`

`;

const StyledItem = styled('li')`

`;

export default function List(props) {
    const { list } = props;
    return (
        <StyledList>
            {
                list.map((item) => <StyledItem key={item}>{item}</StyledItem>)
            }
        </StyledList>
    );
}

List.propTypes = {
    list: PropTypes.arrayOf(PropTypes.string).isRequired
};
