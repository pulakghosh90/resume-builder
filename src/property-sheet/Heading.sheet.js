import { get } from 'lodash';
import FormModelBuilder from './model-builder/FormModelBuilder';
import SheetMutation from './model-builder/SheetMutation';
import { replace } from '../util/util';

const getFieldDefs = () => ([
    {
        id: 'firstName',
        label: 'First Name',
        controlType: 'String',
        value: '',
        visibility: true,
        readOnly: false,
        required: true,
        errors: []
    },
    {
        id: 'lastName',
        label: 'Last Name',
        controlType: 'String',
        value: '',
        visibility: true,
        readOnly: false,
        required: true,
        errors: []
    },
    {
        id: 'address',
        label: 'Address',
        controlType: 'String',
        value: '',
        visibility: true,
        readOnly: false,
        required: true,
        errors: []
    },
    {
        id: 'city',
        label: 'City',
        controlType: 'String',
        value: '',
        visibility: true,
        readOnly: false,
        required: true,
        errors: []
    },
    {
        id: 'state',
        label: 'State/Province',
        controlType: 'String',
        value: '',
        visibility: true,
        readOnly: false,
        required: true,
        errors: []
    },
    {
        id: 'pin',
        label: 'Zip Code',
        controlType: 'String',
        value: '',
        visibility: true,
        readOnly: false,
        required: true,
        errors: []
    },
    {
        id: 'country',
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
        id: 'phone',
        label: 'Phone',
        controlType: 'String',
        value: '',
        visibility: true,
        readOnly: false,
        required: true,
        errors: []
    },
    {
        id: 'email',
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
    .heading('heading', 'Resume Heading')
    .sectionHeader('sub-heading', 'We suggest including an email and phone number.')
    .fields(getFieldDefs())
    .build();

// perform sheet updation and validation
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
