import { get } from 'lodash';
import {
    black,
    white,
    essentialEcruDark,
    essentialEcruLight,
    essentialEcruMedium
} from './Color';

const papers = {
    a1: {
        height: '2384px',
        width: '1684px'
    },
    a2: {
        height: '1684px',
        width: '1191px'
    },
    a3: {
        height: '1191px',
        width: '842px'
    },
    a4: {
        height: '842px',
        width: '595px'
    }
};

const theme = {
    id: 'original',
    name: 'Original',
    fontSize: '12px',
    fontWeight: 'normal',
    lineHeight: '12px',
    color: black,
    backgroundColor: white,
    layout: {
        rows: '2fr 8fr',
        columns: '4fr 6fr',
        viewport: papers.a3
    },
    heading: {
        backgroundColor: essentialEcruDark,
        name: {
            fontSize: '28px',
            fontWeight: 'bold',
            lineHeight: '28px',
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
        backgroundColor: essentialEcruLight,
        title: {
            fontSize: '26px',
            fontWeight: 'bold',
            lineHeight: '26px',
            color: black,
            icon: ''
        },
        summary: {
            fontSize: '12px',
            fontWeight: 'normal',
            lineHeight: '12px',
            color: black,
            justify: true
        }
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

export const getAttr = (t, section, prop, attr) => get(t, [section, prop, attr]);
export const getFontSize = (t, section, prop) => get(t, [section, prop, 'fontSize'], t.fontSize);
export const getFontWeight = (t, section, prop) => get(t, [section, prop, 'fontWeight'], t.fontWeight);
export const getLineHeight = (t, section, prop) => get(t, [section, prop, 'lineHeight'], t.lineHeight);
export const getColor = (t, section, prop) => get(t, [section, prop, 'color'], t.color);
export const getBGColor = (t, section) => get(t, [section, 'backgroundColor'], t.backgroundColor);
export const getLayout = (t) => get(t, 'layout');

export default theme;
