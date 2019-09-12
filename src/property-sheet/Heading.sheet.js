import FormModelBuilder from './model-builder/FormModelBuilder';
import SheetMutation from './model-builder/SheetMutation';
import { replace } from '../util/util';

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
        controlType: 'String',
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
    .heading('heading.heading', 'Resume Heading')
    .sectionHeader('heading.sub-heading', 'We suggest including an email and phone number.')
    .fields(getFieldDefs())
    .build();

// perform sheet updation and validation
export const onUpdate = ({ id, value }, prevSheet, state) => {
    const nextSheet = SheetMutation(prevSheet).setValue(id, value).save();
    const selection = state.selection.map((v) => ({ ...v, sheet: nextSheet }));
    return replace('selection', selection, state);
};

export const onLoad = (sheet, state) => {
    return sheet;
};
