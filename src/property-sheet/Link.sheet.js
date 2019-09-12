import FormModelBuilder from './model-builder/FormModelBuilder';
import SheetMutation from './model-builder/SheetMutation';

const getFieldDefs = () => ([
    {
        id: 'link.linkedin',
        label: 'LinkedIn Profile',
        controlType: 'String',
        value: '',
        visibility: true,
        readOnly: false,
        required: false,
        errors: []
    },
    {
        id: 'link.github',
        label: 'GitHub Profile',
        controlType: 'String',
        value: '',
        visibility: true,
        readOnly: false,
        required: false,
        errors: []
    },
    {
        id: 'link.personal',
        label: 'Personal Website',
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
