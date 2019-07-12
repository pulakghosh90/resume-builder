import React from 'react';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';
import Name from './Name';
import Phone from './Phone';
import Email from './Email';
import { black } from '../../theme/Color';
import Address from './Address';

const StyledHeading = styled('div')`
    padding-left: 20px;
    padding-top: 20px;
`;

const HorizontalLine = styled('div')`
    border-bottom: 1px solid ${black};
    top: 1px;
    width: 80%;
    z-index: 1;
    position: relative;
`;

export default function Heading(props) {
    const {
        firstName,
        lastName,
        phone,
        email,
        address,
        links = ['abc', 'ed']
    } = props;
    return (
        <StyledHeading>
            <Name showInCaps firstName={firstName} lastName={lastName} />
            <HorizontalLine />
            <Phone phone={phone} />
            <Email email={email} />
            <Address address={address} />
        </StyledHeading>
    );
}

Heading.propTypes = {
    firstName: PropTypes.string.isRequired,
    lastName: PropTypes.string.isRequired,
    phone: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    links: PropTypes.arrayOf(PropTypes.string),
    address: PropTypes.string.isRequired
};
