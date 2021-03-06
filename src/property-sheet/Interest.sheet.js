import { get } from 'lodash';
import FormModelBuilder from './model-builder/FormModelBuilder';
import SheetMutation from './model-builder/SheetMutation';

const getFieldDefs = () => ([
    {
        id: 'interest',
        label: 'Interest',
        controlType: 'String',
        value: '',
        visibility: true,
        readOnly: false,
        required: false,
        errors: []
    }
]);

export const sheet = FormModelBuilder()
    .action('UpdateProperty')
    .heading('Interests')
    .fields(getFieldDefs())
    .build();

export const onUpdate = ({ id, value }, prevSheet, state) => {
    const nextSheet = SheetMutation(prevSheet).setValue(id, value).save();
    const selection = state.selection.map((v) => ({ ...v, sheet: nextSheet }));
    return { selection };
};

export const onLoad = (sheet_, state, sectionType) => {
    const sectionPath = ['resume', 'sections', sectionType];
    const section = get(state, sectionPath);
    return SheetMutation(sheet_).loadValues(section).save();
};
