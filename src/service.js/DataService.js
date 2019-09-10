import { sections } from './MockData';

/* eslint-disable import/prefer-default-export */


export const getSections = () => (
    new Promise((resolve, reject) => {
        resolve(sections);
    })
);
