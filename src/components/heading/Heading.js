import React from 'react';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';
import Name from './Name';
import Phone from './Phone';
import Email from './Email';
import { getFontSize, getFontWeight, getLineHeight } from '../../theme/Theme';

const StyledHeading = styled('div')`
    padding-top: 30px;
    padding-left: 40px;
`;

const getNameStyle = (t) => ({
    fontSize: getFontSize(t, 'heading', 'name'),
    fontWeight: getFontWeight(t, 'heading', 'name'),
    lineHeight: getLineHeight(t, 'heading', 'name')
});

const getEmailStyle = (t) => ({
    fontSize: getFontSize(t, 'heading', 'email'),
    fontWeight: getFontWeight(t, 'heading', 'email'),
    lineHeight: getLineHeight(t, 'heading', 'name')
});

const getPhoneStyle = (t) => ({
    fontSize: getFontSize(t, 'heading', 'phone'),
    fontWeight: getFontWeight(t, 'heading', 'phone'),
    lineHeight: getLineHeight(t, 'heading', 'name')
});

export default function Heading(props) {
    const {
        firstName,
        lastName,
        phone,
        email,
        links = ['abc', 'ed'],
        theme
    } = props;
    return (
        <StyledHeading>
            <Name firstName={firstName} lastName={lastName} style={getNameStyle(theme)} />
            <Phone phone={phone} style={getPhoneStyle(theme)} />
            <Email email={email} style={getEmailStyle(theme)} />
        </StyledHeading>
    );
}

Heading.propTypes = {
    firstName: PropTypes.string.isRequired,
    lastName: PropTypes.string.isRequired,
    phone: PropTypes.number.isRequired,
    email: PropTypes.string.isRequired,
    links: PropTypes.arrayOf(PropTypes.string),
    theme: PropTypes.object
};
