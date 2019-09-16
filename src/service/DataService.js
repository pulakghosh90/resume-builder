import { sections, resume } from './MockData';

export const getSections = () => Promise.resolve(sections);

export const fetchResume = (id) => Promise.resolve(resume);
