import PropTypes from 'prop-types';

export default {
    id: PropTypes.string.isRequired,
    value: PropTypes.any.isRequired,
    /**
     * onChange({id, value, e})
     */
    onChange: PropTypes.func.isRequired,
    className: PropTypes.string,
    controlType: PropTypes.string.isRequired,
    visibility: PropTypes.bool,
    readOnly: PropTypes.bool,
    required: PropTypes.bool,
    errors: PropTypes.arrayOf(PropTypes.string),
    maxLength: PropTypes.number
};
