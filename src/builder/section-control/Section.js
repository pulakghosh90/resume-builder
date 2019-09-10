import React from 'react';
import styled from '@emotion/styled';

import { getSections } from '../../service.js/DataService';
import { SectionType, ResumeCheckAction, SpellCheckAction, AddSectionAction, DownloadAction } from './Control';

const Container = styled('div')`
    border: dashed grey 1px;
    height: 100%;
    width: 100%;
`;

const Group = styled('div')`
    border-bottom: 2px solid #e8ecf0;
    padding: 0px 0px 8px 0px;
    margin: 0px 0px 16px 0px;
`;

export default class Section extends React.Component {
    constructor(props) {
        super(props);
        this.state = { sections: [] };
    }

    componentDidMount() {
        getSections().then((data) => this.setState({
            sections: data
        }));
    }

    onClick = ({ type }) => {
        console.log(`Clicked- ${type}`);
        const { dispatch } = this.props;
        dispatch({
            type: 'SelectSection',
            sectionType: type
        });
    }

    render() {
        const { sections } = this.state;
        return (
            <Container>
                <Group>
                    <ResumeCheckAction onClick={this.onClick} />
                    <SpellCheckAction onClick={this.onClick} />
                </Group>
                <Group>
                    {
                        sections.map((section) => <SectionType key={section.type} {...section} onClick={this.onClick} />)
                    }
                </Group>
                <Group>
                    <AddSectionAction onClick={this.onClick} />
                </Group>
                <DownloadAction onClick={this.onClick} />
            </Container>
        );
    }
}
