import { set, get } from 'lodash';
import { matchPath } from 'react-router';
import { LOCATION_CHANGE, push } from 'connected-react-router';
import { matchAction, lookupUnsafe, getValues } from '../util/util';
import lookUpModel from '../property-sheet/PropertySheetRegistry';
import { Nothing, Just } from '../util/Maybe';
import { fetchResume, saveResume, deleteResume, download } from '../service/DataService';

export const init = () => ({
    selection: Nothing(),
    resume: {
        id: 'none',
        name: ''
    }
});

export const Action = {
    SelectSection(sectionType) {
        return {
            type: 'SelectSection',
            sectionType
        };
    },
    FetchResume(id) {
        return {
            type: 'FetchResume',
            id
        };
    },
    LoadResume(resume) {
        return {
            type: 'LoadResume',
            resume
        };
    },
    ResumeCheck() {
        return {
            type: 'ResumeCheck'
        };
    },
    SpellCheck() {
        return {
            type: 'SpellCheck'
        };
    },
    Download() {
        return {
            type: 'Download'
        };
    },
    AddSection() {
        return {
            type: 'AddSection'
        };
    },
    Duplicate() {
        return {
            type: 'Duplicate'
        };
    },
    Delete() {
        return {
            type: 'Delete'
        };
    },
    Save() {
        return {
            type: 'Save'
        };
    }
};

export const update = matchAction({
    '@initialize': init,
    [LOCATION_CHANGE]: (state, { payload: { location: { pathname } } }) => {
        const match = matchPath(pathname, {
            path: '/',
            exact: true,
            strict: false
        });
        // TODO: get the id from route
        if (match) {
            if (match.params.id !== state.resume.id) {
                return Promise.resolve(Action.FetchResume('abc'));
            }
            return state;
        }
        return state;
    },
    FetchResume(state, { id }) {
        return fetchResume(id).then((resume) => Action.LoadResume(resume));
    },
    LoadResume(state, { resume }) {
        return Object.assign({}, state, { resume, loading: false });
    },
    SelectSection(state, { sectionType }) {
        const model = lookUpModel(sectionType);
        const selection = Just({
            sectionType,
            model,
            sheet: model.onLoad(model.sheet, state, sectionType)
        });

        const newState = Object.assign({}, state);
        set(newState, 'selection', selection);
        return newState;
    },
    UpdateProperty(state, action) {
        const selection = lookupUnsafe('selection', state);
        const { sheet: prevSheet, model, sectionType } = selection;
        const newState = model.onUpdate(action, prevSheet, state);
        // TODO: new function for this task
        const sectionPath = ['resume', 'sections', sectionType];
        const oldValues = get(state, sectionPath);
        const { sheet: newSheet } = lookupUnsafe('selection', newState);
        const newValues = getValues(newSheet);
        set(newState, sectionPath, Object.assign({}, oldValues, newValues));
        return newState;
    },
    ResumeCheck(state, action) {
        return state;
    },
    SpellCheck(state, action) {
        return state;
    },
    Download({ resume }, action) {
        // TODO: implement correctly this function
        return download(resume.id).then((data) => ({ type: 'DownloadSuccess' }));
    },
    AddSection(state, action) {
        return state;
    },
    Duplicate(state, action) {
        return state;
    },
    Delete({ resume }) {
        return deleteResume(resume.id).then(() => push('/'));
    },
    Save({ resume }) {
        return saveResume(resume).then(({ data }) => Action.LoadResume(data.resume));
    },
    '*': (state) => Object.assign({}, state, { loading: false })
});

export function* effects() { }
