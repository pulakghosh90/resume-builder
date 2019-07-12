import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function Icon(props) {
    const { color, fontSize, className, icon, ariaHidden } = props;
    const style = { fontSize, color, lineHeight: fontSize, verticalAlign: 'bottom' };
    return <FontAwesomeIcon className={className} style={style} icon={icon} aria-hidden={ariaHidden} />;
}

Icon.defaultProps = {
    fontSize: '16px',
    className: '',
    ariaHidden: true
};

Icon.propTypes = {
    className: PropTypes.string,
    icon: PropTypes.shape({
        prefix: PropTypes.string,
        iconName: PropTypes.string,
        icon: PropTypes.array
    }).isRequired,
    color: PropTypes.string,
    fontSize: PropTypes.string,
    ariaHidden: PropTypes.bool
};
