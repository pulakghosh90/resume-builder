import { sections, resume } from './MockData';


// TO DO: implement proper service
export const getSections = () => Promise.resolve(sections);

export const fetchResume = (rid) => (
    new Promise((resolve) => {
        setTimeout(resolve, 1000, resume.filter(({ id }) => id === rid)[0]);
    })
);
