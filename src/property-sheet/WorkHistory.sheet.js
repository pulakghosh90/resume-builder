import { get } from 'lodash';
import FormModelBuilder from './model-builder/FormModelBuilder';
import SheetMutation from './model-builder/SheetMutation';
import { replace } from '../util/util';

const getFieldDefs = () => ([
    {
        id: 'jobTitle',
        label: 'Job Title',
        controlType: 'String',
        value: '',
        visibility: true,
        readOnly: false,
        required: false,
        errors: []
    },
    {
        id: 'employer',
        label: 'Employer',
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
        id: 'currentEmployer',
        label: 'Working Now',
        controlType: 'Checkbox',
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
    // TO DO: implement some card view to show multiple work history
    const { histories } = get(state, sectionPath);
    return SheetMutation(sheet_).loadValues(histories[0]).save();
};
