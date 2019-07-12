import styled from '@emotion/styled';
import PropTypes from 'prop-types';
import { ALIGN } from '../layout/Grid';

const hAlign = (props) => (props.hAlign ? `text-align: ${ALIGN[props.hAlign]};` : '');

const vAlign = (props) => (props.vAlign ? `vertical-align: ${ALIGN[props.vAlign]};` : '');

const Box = styled('div')`
    padding: 3px;
    background-color: ${({ backgroundColor }) => backgroundColor};
    ${hAlign}
    ${vAlign}
`;

Box.propTypes = {
    hAlign: PropTypes.oneOf(['left', 'middle', 'right']),
    vAlign: PropTypes.oneOf(['left', 'middle', 'right'])
};

Box.defaultProps = {
    hAlign: 'middle',
    vAlign: 'middle'
};

export default Box;
