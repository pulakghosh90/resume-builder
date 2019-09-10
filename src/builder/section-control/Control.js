import React from 'react';
import styled from '@emotion/styled';
import {
    faBook,
    faTv,
    faHamburger,
    faEdit,
    faPlus,
    faDownload,
    faCheck,
    faSpellCheck
} from '@fortawesome/free-solid-svg-icons';
import { keySwitch } from '../../util/util';
import Icon from '../../components/icon/Icon';

const getIcon = keySwitch('type', {
    education: () => <Icon icon={faBook} />,
    links: () => <Icon icon={faTv} />,
    profile_summary: () => <Icon icon={faHamburger} />,
    _: () => <Icon icon={faEdit} />
});

const StyledSection = styled('div')`
    color: #58585f;
    padding: 6px 7px;
    margin-bottom: 2px;
    width: 100%;
    vertical-align: middle;
`;

export const AddSectionAction = ({ onClick }) => (
    <StyledSection onClick={() => onClick({ type: 'add_section' })}>
        <Icon icon={faPlus} />
        <span>Add Section</span>
    </StyledSection>
);

export const DownloadAction = ({ onClick }) => (
    <StyledSection onClick={() => onClick({ type: 'download' })}>
        <Icon icon={faDownload} />
        <span>Download</span>
    </StyledSection>
);

export const ResumeCheckAction = ({ onClick }) => (
    <StyledSection onClick={() => onClick({ type: 'resume_check' })}>
        <Icon icon={faCheck} />
        <span>Resume Check</span>
    </StyledSection>
);

export const SpellCheckAction = ({ onClick }) => (
    <StyledSection onClick={() => onClick({ type: 'spell_check' })}>
        <Icon icon={faSpellCheck} />
        <span>Spell Check</span>
    </StyledSection>
);

export const SectionType = ({ label, type, onClick }) => (
    <StyledSection onClick={() => onClick({ type })}>
        {
            getIcon({ type })
        }
        <span>{label}</span>
    </StyledSection>
);
