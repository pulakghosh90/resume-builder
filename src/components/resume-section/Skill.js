import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import Badge from '../badge/Badge';
import StringElement from '../input-elements/StringElement';
import Button from '../button/Button';

const Pills = styled('div')`
    margin-top: 8px;
`;

const Flex = styled('div')`
    display: inline-flex;
    align-items: middle;
    width: 100%;
`;

export default function Skill(props) {
    const {
        id,
        value,
        onChange
    } = props;
    const [skill, setSkill] = useState('');
    return (
        <div>
            <Flex>
                <StringElement
                    id="skill"
                    placeHolder="type skill to add"
                    value={skill}
                    onChange={({ value: sk }) => setSkill(sk)}
                />
                <Button
                    appeareance="primary"
                    text="Add"
                    onClick={() => {
                        onChange({ id, value: [...value, skill] });
                        setSkill('');
                    }}
                />
            </Flex>
            <Pills>
                {
                    value.map((sk) => (
                        <Badge
                            key={sk}
                            text={sk}
                            appearence="light"
                            pill
                            deletable
                            onDelete={() => onChange({ id, value: value.filter((v) => v !== sk) })}
                        />
                    ))
                }
            </Pills>
        </div>
    );
}

Skill.propTypes = {
    id: PropTypes.string.isRequired,
    value: PropTypes.arrayOf(PropTypes.string).isRequired,
    onChange: PropTypes.func.isRequired
};
