import React from 'react';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';

function DynamicElement({ as, direction, reverse, wrap, ...props }) {
    const Tag = as || 'div';
    return (<Tag {...props} />);
}

const ALIGN = {
    top: 'flex-start',
    right: 'flex-start',
    bottom: 'flex-end',
    left: 'flex-end',
    center: 'center',
    middle: 'center'
};

const addVAAlign = ({ direction, valign }) => (
    valign && (`${direction !== 'horizontal' ? 'align-items' : 'justify-content'} : ${ALIGN[valign]}`)
);

const addHAAlign = (direction, halign) => (
    halign && (`${direction === 'horizontal' ? 'justify-content' : 'align-items'} : ${ALIGN[halign]}`)
);

const setDirection = ({ direction, reverse }) => (
    `${direction === 'horizontal' ? 'row' : 'column'}${reverse ? '-reverse' : ''}`
);

const FlexContainer = styled(DynamicElement)`
    box-sizing: border-box;
    display: flex;
    flex-direction: ${setDirection};
    flex-wrap: ${({ wrap }) => (wrap ? 'wrap' : 'nowrap')};
    ${addHAAlign};
    ${addVAAlign};
`;

FlexContainer.propTypes = {
    direction: PropTypes.oneOf(['horizontal', 'vertical']),
    reverse: PropTypes.bool,
    wrap: PropTypes.bool,
    halign: PropTypes.oneOf(['left', 'right', 'center', null]),
    valign: PropTypes.oneOf(['top', 'bottom', 'middle', null])
};

FlexContainer.defaultProps = {
    direction: 'horizontal',
    reverse: false,
    wrap: false,
    halign: 'center',
    valign: 'middle'
};

export default FlexContainer;
