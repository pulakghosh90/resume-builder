import React from 'react';
import styled from '@emotion/styled';
import { SectionType, ResumeCheckAction, SpellCheckAction, AddSectionAction, DownloadAction } from './Control';
import { Action } from '../builder/Builder';

const Container = styled('div')`
    height: 100%;
    width: 100%;
    padding-left: 10px;
`;

const Group = styled('div')`
    border-bottom: 2px solid #e8ecf0;
    padding: 0px 0px 8px 0px;
    margin: 0px 0px 16px 0px;
`;

class Section extends React.Component {
    onClick = ({ sectionType }) => {
        const { dispatch } = this.props;
        dispatch(Action.SelectSection(sectionType));
    }

    render() {
        const { sections = [], dispatch } = this.props;
        return (
            <Container>
                <Group>
                    <ResumeCheckAction onClick={() => dispatch(Action.ResumeCheck())} />
                    <SpellCheckAction onClick={() => dispatch(Action.SpellCheck())} />
                </Group>
                <Group>
                    {
                        sections.map((section) => <SectionType key={section.sectionType} {...section} onClick={this.onClick} />)
                    }
                </Group>
                <Group>
                    <AddSectionAction onClick={this.onClick} />
                </Group>
                <DownloadAction onClick={() => dispatch(Action.Download())} />
            </Container>
        );
    }
}

export default Section;
