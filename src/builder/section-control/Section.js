import React from 'react';
import styled from '@emotion/styled';
import { connect } from 'react-redux';
import { getSections } from '../../service.js/DataService';
import { SectionType, ResumeCheckAction, SpellCheckAction, AddSectionAction, DownloadAction } from './Control';
import { Actions } from '../Builder';

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

class Section extends React.Component {
    constructor(props) {
        super(props);
        this.state = { sections: [] };
    }

    componentDidMount() {
        getSections().then((data) => this.setState({
            sections: data
        }));
    }

    onClick = ({ sectionType }) => {
        const { dispatch } = this.props;
        dispatch(Actions.SelectSection(sectionType));
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
                        sections.map((section) => <SectionType key={section.sectionType} {...section} onClick={this.onClick} />)
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

const mapStateToProps = (state) => state;

export default connect(mapStateToProps)(Section);
