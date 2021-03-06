import React from 'react';
import styled from '@emotion/styled';
import { SectionType, ResumeCheckAction, SpellCheckAction } from './Control';
import { Action } from '../builder/Builder';
import { reduceObject } from '../util/util';

const Container = styled('div')`
    grid-area: lt;
    height: 100%;
    width: 100%;
`;

const Group = styled('div')`
    border-bottom: 3px solid rgb(230,232,234);
    padding: 0px 0px 8px 0px;
    margin: 0px 0px 16px 0px;
`;

class Section extends React.Component {
    onClick = ({ sectionType }) => {
        const { dispatch } = this.props;
        dispatch(Action.SelectSection(sectionType));
    }

    render() {
        const { sections = {}, dispatch } = this.props;
        return (
            <Container>
                <Group>
                    <ResumeCheckAction onClick={() => dispatch(Action.ResumeCheck())} />
                    <SpellCheckAction onClick={() => dispatch(Action.SpellCheck())} />
                </Group>
                <Group>
                    {
                        reduceObject(
                            (acc, key, section) => {
                                acc.push(<SectionType key={key} {...section} onClick={this.onClick} />);
                                return acc;
                            },
                            [],
                            sections
                        )
                    }
                </Group>
            </Container>
        );
    }
}

export default Section;
