import FormModelBuilder from './model-builder/FormModelBuilder';

const getFieldDefs = () => ([
    {
        id: 'first_name',
        label: 'First Name',
        controlType: 'String',
        value: '',
        visibility: true,
        readOnly: false,
        required: true,
        errors: []
    },
    {
        id: 'last_name',
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
        id: 'pin_code',
        label: 'Zip Code',
        controlType: 'Number',
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
        errors: []
    },
    {
        id: 'phone',
        label: 'Phone',
        controlType: 'Number',
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
    .fields(getFieldDefs())
    .build();

export const onUpdate = () => {

};

export const onLoad = () => {

};
