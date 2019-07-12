import { get } from 'lodash';
import {
    black,
    white,
    essentialEcruDark,
    essentialEcruLight,
    essentialEcruMedium
} from './Color';

const theme = {
    id: 'original',
    name: 'Original',
    fontSize: '12px',
    fontWeight: 'normal',
    lineHeight: '12px',
    color: black,
    backgroundColor: white,
    heading: {
        backgroundColor: essentialEcruDark,
        name: {
            fontSize: '22px',
            fontWeight: 'bold',
            lineHeight: '22px',
            color: black,
            icon: ''
        },
        email: {
            color: black,
            icon: ''
        },
        phone: {
            color: black,
            icon: ''
        },
        address: {
            color: black,
            icon: ''
        },
        links: {
            color: black,
            icon: ''
        }
    },
    summary: {
        backgroundColor: essentialEcruLight
    },
    content: {
        backgroundColor: white,
        workHistory: {

        }
    },
    leftPanel: {
        backgroundColor: essentialEcruMedium,
        skill: {

        },
        education: {

        },
        certification: {

        },
        interest: {

        },
        award: {

        },
        language: {

        }
    }
};

export const getFontSize = (t, section, prop) => get(t, [section, prop, 'fontSize'], t.fontSize);
export const getFontWeight = (t, section, prop) => get(t, [section, prop, 'fontWeight'], t.fontWeight);
export const getLineHeight = (t, section, prop) => get(t, [section, prop, 'lineHeight'], t.lineHeight);
export const getColor = (t, section, prop) => get(t, [section, prop, 'color'], t.color);
export const getBackgroundColor = (t, section) => get(t, [section, 'backgroundColor'], t.backgroundColor);

export default theme;
