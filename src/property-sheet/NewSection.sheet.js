import FormModelBuilder from './model-builder/FormModelBuilder';
import SheetMutation from './model-builder/SheetMutation';

const getFieldDefs = () => ([
    {
        id: 'new_section.name',
        label: 'Section Name',
        controlType: 'String',
        value: '',
        visibility: true,
        readOnly: false,
        required: false,
        errors: []
    },
    {
        id: 'new_section.type',
        label: 'Affiliations',
        controlType: 'Checkbox',
        value: '',
        visibility: true,
        readOnly: false,
        required: false,
        errors: []
    }
]);

export const sheet = FormModelBuilder()
    .action('UpdateProperty')
    .heading('New Section')
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
