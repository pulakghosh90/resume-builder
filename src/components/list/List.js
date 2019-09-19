import React from 'react';
import PropTypes from 'prop-types';

export default function List(props) {
    const { value } = props;
    return (
        <ul>
            {
                value.map((v) => (<li key={v}>{v}</li>))
            }
        </ul>
    );
}

List.propTypes = {
    value: PropTypes.arrayOf(PropTypes.string).isRequired
};
