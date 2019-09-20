import React from 'react';
import styled from '@emotion/styled';
import {
    faBook,
    faTv,
    faHamburger,
    faEdit,
    faCheck,
    faSpellCheck
} from '@fortawesome/free-solid-svg-icons';
import { keySwitch } from '../util/util';
import IconButton from '../components/button/IconButton';

const getIcon = keySwitch('sectionType', {
    education: () => faBook,
    links: () => faTv,
    profileSummary: () => faHamburger,
    _: () => faEdit
});

const StyledSection = styled('div')`
    color: #58585f;
    padding: 6px 7px;
    margin-bottom: 2px;
    width: 100%;
    vertical-align: middle;
`;

export const ResumeCheckAction = ({ onClick }) => (
    <StyledSection>
        <IconButton label="Resume Check" icon={faCheck} onClick={onClick} />
    </StyledSection>
);

export const SpellCheckAction = ({ onClick }) => (
    <StyledSection>
        <IconButton label="Spell Check" icon={faSpellCheck} onClick={onClick} />
    </StyledSection>
);

export const SectionType = ({ label, sectionType, onClick }) => (
    <StyledSection>
        <IconButton label={label} icon={getIcon({ sectionType })} onClick={() => onClick({ sectionType })} />
    </StyledSection>
);
