import cuid from 'cuid';
import { sections, resume } from './MockData';

const delay = (ms) => (fn, args) => setTimeout(fn, ms, args);

const delay1s = delay(1000);

// TO DO: implement proper service
export const getSections = () => Promise.resolve(sections);

export const fetchResume = (rid) => (
    new Promise((resolve) => {
        const args = resume.filter(({ id }) => id === rid)[0];
        delay1s(resolve, args);
    })
);

const newResume = (res) => ({
    ...res,
    id: cuid()
});

export const saveResume = (resum) => (
    new Promise((resolve) => {
        const res = newResume(resum);
        delay1s(resolve, { status: 'success', data: { resume: res } });
        delay1s(console.log, res);
    })
);

export const deleteResume = (id) => (
    new Promise((resolve) => {
        delay1s(resolve, { status: 'success' });
        delay1s(console.log, id);
    })
);

export const download = (id) => (
    new Promise((resolve) => {
        delay1s(resolve, { status: 'success', data: {} });
        delay1s(console.log, id);
    })
);
