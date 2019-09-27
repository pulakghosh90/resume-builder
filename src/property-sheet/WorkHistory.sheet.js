import { get } from 'lodash';
import FormModelBuilder from './model-builder/FormModelBuilder';
import SheetMutation from './model-builder/SheetMutation';
import { replace } from '../util/util';

const getFieldDefs = () => ([
    {
        id: 'histories',
        label: 'Work History',
        controlType: 'WorkHistory',
        value: [],
        visibility: true,
        readOnly: false,
        required: false,
        errors: []
    }
]);

const getEditFormFieldDefs = () => ([
    {
        id: 'designation',
        label: 'Designation',
        controlType: 'String',
        value: '',
        visibility: true,
        readOnly: false,
        required: false,
        errors: []
    },
    {
        id: 'company',
        label: 'Company',
        controlType: 'String',
        value: '',
        visibility: true,
        readOnly: false,
        required: false,
        errors: []
    },
    {
        id: 'city',
        label: 'City',
        controlType: 'String',
        value: '',
        visibility: true,
        readOnly: false,
        required: false,
        errors: []
    },
    {
        id: 'state',
        label: 'State',
        controlType: 'String',
        value: '',
        visibility: true,
        readOnly: false,
        required: false,
        errors: []
    },
    {
        id: 'startDate',
        label: 'Start Date',
        controlType: 'Date',
        value: '',
        visibility: true,
        readOnly: false,
        required: false,
        errors: []
    },
    {
        id: 'endDate',
        label: 'End Date',
        controlType: 'Date',
        value: '',
        visibility: true,
        readOnly: false,
        required: false,
        errors: []
    },
    {
        id: 'currentCompany',
        label: 'Current Company',
        controlType: 'Checkbox',
        value: false,
        visibility: true,
        readOnly: false,
        required: false,
        errors: []
    },
    {
        id: 'descriptions',
        label: 'Description',
        controlType: 'String',
        value: false,
        visibility: true,
        readOnly: false,
        required: false,
        errors: []
    }
]);

export const sheet = FormModelBuilder()
    .action('UpdateProperty')
    .fields(getFieldDefs())
    .build();

export const onUpdate = ({ id, value }, prevSheet, state) => {
    const nextSheet = SheetMutation(prevSheet).setValue(id, value).save();
    const selection = state.selection.map((v) => ({ ...v, sheet: nextSheet }));
    return replace('selection', selection, state);
};

export const onLoad = (sheet_, state, sectionType) => {
    const sectionPath = ['resume', 'sections', sectionType];
    // TODO: implement some card view to show multiple work history
    const workHistory = get(state, sectionPath);
    return SheetMutation(sheet_).loadValues(workHistory).save();
};

export const historyFormSheet = FormModelBuilder()
    .fields(getEditFormFieldDefs())
    .build();
