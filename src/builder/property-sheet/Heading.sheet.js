import FormModelBuilder from './model-builder/FormModelBuilder';
import SheetMutation from './model-builder/SheetMutation';

const getFieldDefs = () => ([
    {
        id: 'heading.first_name',
        label: 'First Name',
        controlType: 'String',
        value: '',
        visibility: true,
        readOnly: false,
        required: true,
        errors: []
    },
    {
        id: 'heading.last_name',
        label: 'Last Name',
        controlType: 'String',
        value: '',
        visibility: true,
        readOnly: false,
        required: true,
        errors: []
    },
    {
        id: 'heading.address',
        label: 'Address',
        controlType: 'String',
        value: '',
        visibility: true,
        readOnly: false,
        required: true,
        errors: []
    },
    {
        id: 'heading.city',
        label: 'City',
        controlType: 'String',
        value: '',
        visibility: true,
        readOnly: false,
        required: true,
        errors: []
    },
    {
        id: 'heading.state',
        label: 'State/Province',
        controlType: 'String',
        value: '',
        visibility: true,
        readOnly: false,
        required: true,
        errors: []
    },
    {
        id: 'heading.pin_code',
        label: 'Zip Code',
        controlType: 'Number',
        value: '',
        visibility: true,
        readOnly: false,
        required: true,
        errors: []
    },
    {
        id: 'heading.country',
        label: 'Country',
        controlType: 'Choice',
        value: '',
        visibility: true,
        readOnly: false,
        required: true,
        errors: [],
        choices: [
            {
                label: 'India',
                value: 'india'
            },
            {
                label: 'US',
                value: 'us'
            },
            {
                label: 'Germany',
                value: 'germany'
            }
        ]
    },
    {
        id: 'heading.phone',
        label: 'Phone',
        controlType: 'String',
        value: '',
        visibility: true,
        readOnly: false,
        required: true,
        errors: []
    },
    {
        id: 'heading.email',
        label: 'Email',
        controlType: 'String',
        value: '',
        visibility: true,
        readOnly: false,
        required: true,
        errors: []
    }
]);

export const sheet = FormModelBuilder()
    .action('UpdateProperty')
    .fields(getFieldDefs())
    .build();

// perform sheet updation and validation
export const onUpdate = ({ id, value }, prevSheet, state) => {
    const nextSheet = SheetMutation(prevSheet).setValue(id, value).save();
    const selection = state.selection.map((v) => ({ ...v, sheet: nextSheet }));
    return { selection };
};

export const onLoad = (sheet, state) => {
    return sheet;
};
