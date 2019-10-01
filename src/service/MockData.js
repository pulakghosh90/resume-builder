import cuid from 'cuid';

/* eslint-disable import/prefer-default-export */
export const sections = [
    {
        id: cuid(),
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
        id: cuid(),
        label: 'Links',
        sectionType: 'link',
        links: [
            {
                name: 'github',
                label: 'Github',
                url: 'https://github.com/pulakghosh90'
            },
            {
                name: 'linkedin',
                label: 'LinkedIn',
                url: 'https://www.linkedin.com/in/pulakendu-ghosh-1062693a/'
            }
        ]
    },
    {
        id: cuid(),
        label: 'Professional Summary',
        sectionType: 'profileSummary',
        summary: "Creative Software Developer offering 8 years of experience. Enthusiastic about developing forward-thinking solutions to tomorrow's productivity problems. Resourceful and adaptable approach to challenges."
    },
    {
        id: cuid(),
        label: 'Skill',
        sectionType: 'skill',
        skills: ['Java', 'JavaScript', 'react', 'GraphQL', 'Redux']
    },
    {
        id: cuid(),
        label: 'Work History',
        sectionType: 'workHistory',
        histories: [
            {
                designation: 'Software Engineer',
                company: 'ServiceNow India',
                city: 'Hyderabad',
                state: 'Telangana',
                startDate: '22/01/2018',
                endDate: '',
                currentCompany: true,
                descriptions: [
                    'Working in ServiceNow Virtual Agent product. Virtual Agent is an NLU enabled conversational bot platform for providing user assistance through conversations within a messaging interface. Use Virtual Agent to build automated agents also called bots, and design the conversations that your users can have with these bots to obtain information, make decisions and perform common work tasks. During these conversations, your users can transfer to a live agent at any time for help, providing them a seamless support experience.',
                    'Was responsible for developing NLU modeler interface for Virtual Agent. Using this UI customer can author NLU model, they can create intent, add utterances, entities and test train and publish the model.',
                    'Was responsible for setting basic project structure, build core React component, integrating with GraphQL API for use in React component, integration with existing Dev Studio environment and handle scope for NLU modeler.',
                    'Performed code review for the team on a regular basis. Build a unit testing framework using Jest.',
                    'Build Rest API for import intents, clone model from cross scope application.'
                ]
            },
            {
                designation: 'Senior Member Technical',
                company: 'ADP India',
                city: 'Hyderabad',
                state: 'Telangana',
                startDate: '01/02/2016',
                endDate: '19/01/2018',
                currentCompany: false,
                descriptions: [
                    'Worked on different HCM product(WorkforceNow) module like Time and Labour Management(TLM), Benefits, HR. WFN is a multi-tenant HCM application used by thousands of enterprises across the world.',
                    'Responsible for implementing shift swap features in TLM product. Developed backend rest services in Java as well as a front end using ReactJS, Webpack, Babel, etc.',
                    'Developed Unit testing framework using JUnit and also develop a UI unit testing framework using Jest for React components',
                    'Was part of the code reviewer group for the project and helped teams members to maintain coding standard and unit test case coverage for both Java and Javascript code',
                    'Created different POC on metadata-driven customizable UI framework using React NodeJS and developed a prototype of the application and verified its functionality for a business use case'
                ]
            },
            {
                designation: 'Senior Software Engineer',
                company: 'Atos India',
                city: 'Kolkata',
                state: 'West Bengal',
                startDate: '20/08/2011',
                endDate: '28/01/2016',
                currentCompany: false,
                descriptions: [
                    'Worked in a team which was developing a reporting platform which measures some key performance indicator and extracts analytical data out of Incident, Problem and Change management system.',
                    'Trained and mentored junior developers and engineers, teaching skills in Java, JS and working to improve overall team performance.',
                    'Gathered and defined customer requirements to develop clear specifications for creating organized project plans.',
                    'Developed unit testing framework to uncover bugs and troubleshoot issues before application launches.',
                    'Understanding customer requirements and provides solutions and estimation for requirements.'
                ]
            }
        ]
    },
    {
        id: cuid(),
        label: 'Education',
        sectionType: 'education',
        educations: [
            {
                school: 'Kalyani Governament Engineering College',
                city: 'Kalyani',
                state: 'West Bengal',
                degree: 'Bachelor of Technology',
                specialization: 'Information Technology',
                year: '2011'
            },
            {
                school: 'Kandi Raj High School',
                city: 'Kandi',
                state: 'West Bengal',
                degree: '12th',
                specialization: 'Science',
                year: '2007'
            },
            {
                school: 'Kandi Raj High School',
                city: 'Kandi',
                state: 'West Bengal',
                degree: '10th',
                specialization: 'Science',
                year: '2005'
            }
        ]
    },
    {
        id: cuid(),
        label: 'Certification',
        sectionType: 'certification',
        certifications: [
            {
                name: 'Machine Learning',
                label: 'Machine Learning',
                date: '2017/08',
                description: 'Successfully completed an online course on Machine Learning provided by Stanford University through Coursera Inc'
            }
        ]
    },
    {
        id: cuid(),
        label: 'Awards',
        sectionType: 'award',
        awards: [
            {
                name: 'MAS Star of the month',
                label: 'Star of the month',
                date: '2017/08',
                description: 'Received this award for outstanding performance in Shift Swap feature in TLM product in ADP'
            },
            {
                name: 'Star of the month',
                label: 'Star of the month',
                date: '2017/08',
                description: 'Received this for successful development and implementation of Reporting platform for client E-Plus in Atos'
            }
        ]
    },
    {
        id: cuid(),
        label: 'Interest',
        sectionType: 'interest',
        interests: ['Volley', 'Table Tenis', 'Cricket']
    },
    {
        id: cuid(),
        label: 'Language',
        sectionType: 'language',
        language: ['Bengali', 'English']
    }
];

const sectionObj = () => sections.reduce((obj, val) => {
    const key = val.sectionType;
    obj[key] = val;
    return obj;
}, {});

export const resume = [
    {
        id: 'abc',
        name: 'pulakendu_ghosh_1',
        userid: 'pulak',
        sections: sectionObj(),
        template: 'default'
    }
];
