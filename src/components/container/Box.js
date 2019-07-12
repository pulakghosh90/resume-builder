import styled from '@emotion/styled';
import PropTypes from 'prop-types';
import { ALIGN } from '../layout/Grid';
import { getBGColor } from '../../theme/Theme';

const hAlign = (props) => (props.hAlign ? `text-align: ${ALIGN[props.hAlign]};` : '');

// const vAlign = (props) => (props.vAlign ? `vertical-align: ${ALIGN[props.vAlign]};` : '');

const Box = styled('div')`
    padding: 20px;
    background-color: ${({ theme, section }) => getBGColor(theme, section)};
    ${hAlign}
`;

Box.propTypes = {
    hAlign: PropTypes.oneOf(['left', 'middle', 'right']),
    vAlign: PropTypes.oneOf(['left', 'middle', 'right']),
    section: PropTypes.string.isRequired
};

Box.defaultProps = {
    hAlign: 'middle',
    // vAlign: 'middle'
};

export default Box;
