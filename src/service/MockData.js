/* eslint-disable import/prefer-default-export */


export const sections = [
    {
        label: 'Heading',
        sectionType: 'heading',
        firstName: 'Pulak',
        lastName: 'Ghosh',
        address: 'Kondapur, Hyderabad',
        city: 'Hyderabad',
        state: 'Ghosh',
        pin: '500084',
        country: 'India',
        phone: '9007065606',
        email: 'pulak.ghosh90@gmail.com',
    },
    {
        label: 'Links',
        sectionType: 'link',
        linkedin: 'https://www.linkedin.com/in/pulakendu-ghosh-1062693a/',
        github: 'https://github.com/pulakghosh90',
        personal: ''
    },
    {
        label: 'Professional Summary',
        sectionType: 'profile_summary',
        summary: 'This is summary'
    },
    {
        label: 'Skill',
        sectionType: 'skill',
        skills: ['Java', 'JavaScript', 'react', 'GraphQL', 'Redux']
    },
    {
        label: 'Work History',
        sectionType: 'work_history',
        histories: [
            {
                workId: 1,
                jobTitle: 'Software Engineer',
                employer: 'Servicenow',
                city: 'Hyderabad',
                state: 'Telangana',
                startDate: '22/01/2018',
                endDate: '',
                currentEmployer: true
            }
        ]
    },
    { label: 'Education', sectionType: 'education' },
    { label: 'Certification', sectionType: 'certification' },
    { label: 'Awards', sectionType: 'award' },
    { label: 'Interest', sectionType: 'interest' },
    { label: 'Language', sectionType: 'language' }
];

const sectionObj = () => sections.reduce((obj, val) => {
    const key = val.sectionType;
    obj[key] = val;
    return obj;
}, {});

export const resume = [
    {
        id: 'abc',
        userid: 'pulak',
        sections: sectionObj(),
        template: 'default'
    }
];
