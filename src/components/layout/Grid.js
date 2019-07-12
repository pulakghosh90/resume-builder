import styled from '@emotion/styled';
import { css } from '@emotion/core';
import PropTypes from 'prop-types';
import DynamicElement from './DynamicElement';
import { debugStyles } from './drawDebug';
import { isNumber } from '../../util/util';

const childDebugStyles = css`
    ${debugStyles}
    & > * {
        ${debugStyles}
    }
`;

export const ALIGN = {
    left: 'start',
    middle: 'center',
    right: 'end',
    stretch: 'stretch'
};

const formatLen = (length) => (isNumber(length) ? `${length}px` : String(length));

const formatRC = (rc) => (Array.isArray(rc) ? rc.map(formatLen).join(' ') : rc);

const formatColumns = ({ columns }) => formatRC(columns);

const formatRows = ({ rows }) => formatRC(rows);

const hAlign = (props) => (props.hAlign ? `justify-items: ${ALIGN[props.hAlign]};` : '');

const vAlign = (props) => (props.vAlign ? `align-items: ${ALIGN[props.vAlign]};` : '');

const Grid = styled(DynamicElement)`
    display: grid;
    grid-template-columns: ${formatColumns};
    grid-template-rows: ${formatRows};
    gap: ${(props) => `${formatLen(props.gap)};`}
    ${(props) => props.autoRows && `grid-auto-rows: ${props.autoRows};`}
    ${(props) => props.autoColumns && `grid-auto-columns: ${props.autoColumns};`}
    ${(props) => props.debug && childDebugStyles}
    ${hAlign}
    ${vAlign}
`;

Grid.propTypes = {
    debug: PropTypes.bool,
    gap: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number
    ]),
    columns: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.arrayOf(PropTypes.oneOfType([
            PropTypes.string,
            PropTypes.number
        ]))
    ]),
    autoRows: PropTypes.string,
    autoColumns: PropTypes.string,
    hAlign: PropTypes.oneOf(['left', 'middle', 'right', 'stretch']),
    vAlign: PropTypes.oneOf(['left', 'middle', 'right', 'stretch'])
};

Grid.defaultProps = {
    debug: false,
    gap: 0,
    columns: '1fr 1fr'.split(' '),
    autoRows: '',
    autoColumns: '',
    hAlign: 'stretch',
    vAlign: 'stretch'
};

export default Grid;
