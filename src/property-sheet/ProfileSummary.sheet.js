import FormModelBuilder from './model-builder/FormModelBuilder';
import SheetMutation from './model-builder/SheetMutation';

const getFieldDefs = () => ([
    {
        id: 'profile_summary.summary',
        label: 'Professional Summary',
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
    .fields(getFieldDefs())
    .build();

export const onUpdate = ({ id, value }, prevSheet, state) => {
    const nextSheet = SheetMutation(prevSheet).setValue(id, value).save();
    const selection = state.selection.map((v) => ({ ...v, sheet: nextSheet }));
    return { selection };
};

export const onLoad = (sheet) => {
    return sheet;
};
