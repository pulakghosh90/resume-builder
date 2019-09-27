import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import { ClassNames } from '@emotion/core';
import {
    faEdit,
    faTrash,
    faPlusCircle
} from '@fortawesome/free-solid-svg-icons';
import Button from '../button/Button';
import List from '../list/List';
import IconButton from '../button/IconButton';
import Modal from '../modal/Modal';
import { addId, getValues } from '../../util/util';
import StringElement from '../input-elements/StringElement';
import { historyFormSheet } from '../../property-sheet/WorkHistory.sheet';
import SheetMutation from '../../property-sheet/model-builder/SheetMutation';
import Grid from '../layout/Grid';
import CheckboxElement from '../input-elements/CheckboxElement';
import Icon from '../icon/Icon';

const formatTitle = ({ designation, company, city, state, startDate, endDate, currentCompany }) => (
    `${designation}, ${company} ${city}, ${state}
    ${startDate} - ${currentCompany ? 'Current' : endDate}`
);

const TitleContainer = styled('div')`
    margin-bottom: 10px;
    display: flex;
    justify-content: space-between;
    position: relative;
`;

const Toolbar = styled('div')`
    position: absolute;
    right: 5px;
`;

const Description = styled('div')`
    overflow: hidden;
    position: relative;

    &::after {
        content: '';
        position: absolute;
        width: 100%;
        left: 0;
        margin: 0;
        top: 43px;
        background-image: linear-gradient(to bottom, rgba(252,252,252,0) 0%, #fcfcfc 60%);
        height: 50px;
    }
`;

const Box = styled('div')`
    width: 100%;
    height: 150px;
    border: 1px solid grey;
    overflow: hidden;
    margin-bottom: 15px;
    padding: 10px;
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
`;

const Title = ({ onEdit, onDelete, ...rest }) => (
    <TitleContainer>
        <h4>{formatTitle(rest)}</h4>
        <Toolbar>
            <IconButton icon={faEdit} onClick={onEdit} />
            <IconButton icon={faTrash} onClick={onDelete} />
        </Toolbar>
    </TitleContainer>
);

function WorkCard({ work, onEdit, onDelete }) {
    return (
        <Box>
            <Title {...work} onEdit={onEdit} onDelete={onDelete} />
            <Description >
                <List value={work.descriptions} />
            </Description>
        </Box>
    );
}

const Controls = {
    String: StringElement,
    Date: StringElement,
    Checkbox: CheckboxElement
};

const Field = ({ controlType, label, value, id, onChange }) => {
    const Component = Controls[controlType];
    return (
        <div>
            <label htmlFor={id}>{label}</label>
            <Component id={id} value={value} onChange={onChange} />
        </div>
    );
};

const preventSubmit = (e) => e.preventDefault();
// TODO: need to do it in better way, dont replicate the same form logic here
function WorkEditForm({ work, onSave, onClose, isOpen }) {
    const [sheet, setSheet] = useState(() => SheetMutation(historyFormSheet).loadValues(work).save());
    const fields = Array.from(sheet.fields.values());
    const onChange = ({ id, value }) => setSheet(SheetMutation(sheet).setValue(id, value).save());
    return (
        <Modal
            isOpen={isOpen}
            onClose={onClose}
            onSave={() => onSave(getValues(sheet))}
            title="Work History"
        >
            <form onSubmit={preventSubmit}>
                <Grid gap={8}>
                    {
                        fields.map((field) => (
                            <Field key={field.id} {...field} onChange={onChange} />
                        ))
                    }
                </Grid>
            </form>
        </Modal>
    );
}

const Flex = styled('div')`
    display: inline-flex;
    align-items: center;
`;

const Text = styled('span')`
    margin-left: 5px;
    font-size: 18px;
`;

const AddButton = ({ onAdd }) => (
    <ClassNames>
        {
            ({ css }) => (
                <Button
                    appeareance="primary"
                    onClick={onAdd}
                    className={css({ width: '100%' })}
                    size="lg"
                >
                    <Flex>
                        <Icon icon={faPlusCircle} fontSize="18px" />
                        <Text>Add Work</Text>
                    </Flex>
                </Button>
            )
        }
    </ClassNames>
);

export default class WorkHistory extends React.Component {
    static propTypes = {
        id: PropTypes.string.isRequired,
        onChange: PropTypes.func.isRequired,
        value: PropTypes.arrayOf(PropTypes.object).isRequired
    }

    static getDerivedStateFromProps(props, state) {
        if (!state.history) {
            return {
                isOpen: false,
                workInEdit: {},
                history: addId(props.value)
            };
        }
        return null;
    }

    constructor() {
        super();
        this.state = {};
    }

    toggleOpen = () => this.setState(({ isOpen }) => ({ isOpen: !isOpen }))

    onEdit = (work) => this.setState({ workInEdit: work, isOpen: true })

    onDelete = (work) => {
        const { history } = this.state;
        const { onChange, id } = this.props;
        onChange({ id, value: history.filter((h) => h.id !== work.id) });
        this.setState({ workInEdit: {}, isOpen: false });
    };

    onSave = (work) => {
        const { history } = this.state;
        const { onChange, id } = this.props;
        onChange({ id, value: history.map((h) => (h.id === work.id ? work : h)) });
        this.setState({ workInEdit: {}, isOpen: false });
    };

    onAdd = () => this.setState({ workInEdit: {}, isOpen: true })

    render() {
        const { history, isOpen, workInEdit } = this.state;
        return (
            <div>
                {
                    history.map((work) => (
                        <WorkCard
                            key={work.company}
                            work={work}
                            onEdit={() => this.onEdit(work)}
                            onDelete={() => this.onDelete(work)}
                        />
                    ))
                }
                <AddButton onAdd={this.onAdd} />
                {
                    isOpen && (
                        <WorkEditForm
                            isOpen={isOpen}
                            work={workInEdit}
                            onSave={this.onSave}
                            onClose={this.toggleOpen}
                        />
                    )
                }
            </div >
        );
    }
}
