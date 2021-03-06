import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import Button from './Button';
import Icon from '../icon/Icon';

const Flex = styled('div')`
    display: inline-flex;
    align-items: center;
`;

const Text = styled('span')`
    padding-left: 5px;
`;

export default function IconButton(props) {
    const {
        icon,
        onClick,
        fontSize,
        label,
        children,
        ...rest
    } = props;
    return (
        <Button onClick={onClick} appeareance="icon" {...rest}>
            <Flex>
                <Icon className="btn-icon" icon={icon} fontSize={fontSize} color="#666" />
                {label && <Text>{label}</Text>}
                {children}
            </Flex>
        </Button>
    );
}

IconButton.propTypes = {
    icon: PropTypes.object.isRequired,
    onClick: PropTypes.func.isRequired,
    fontSize: PropTypes.string,
    label: PropTypes.string,
    children: PropTypes.object
};
