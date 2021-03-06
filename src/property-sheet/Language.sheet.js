import { get } from 'lodash';
import FormModelBuilder from './model-builder/FormModelBuilder';
import SheetMutation from './model-builder/SheetMutation';
import { replace } from '../util/util';

const getFieldDefs = () => ([
    {
        id: 'language',
        label: 'Language',
        controlType: 'Badge',
        value: [],
        visibility: true,
        readOnly: false,
        required: false,
        errors: [],
        placeHolder: 'Enter language'
    }
]);

export const sheet = FormModelBuilder()
    .action('UpdateProperty')
    .heading('Languages')
    .fields(getFieldDefs())
    .build();

export const onUpdate = ({ id, value }, prevSheet, state) => {
    const nextSheet = SheetMutation(prevSheet).setValue(id, value).save();
    const selection = state.selection.map((v) => ({ ...v, sheet: nextSheet }));
    return replace('selection', selection, state);
};

export const onLoad = (sheet_, state, sectionType) => {
    const sectionPath = ['resume', 'sections', sectionType];
    const section = get(state, sectionPath);
    return SheetMutation(sheet_).loadValues(section).save();
};
