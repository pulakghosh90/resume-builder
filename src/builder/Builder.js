import { set } from 'lodash';
import { matchPath } from 'react-router';
import { LOCATION_CHANGE } from 'connected-react-router';
import { matchAction, lookupUnsafe } from '../util/util';
import lookUpModel from '../property-sheet/PropertySheetRegistry';
import { Nothing, Just } from '../util/Maybe';
import { fetchResume } from '../service/DataService';

export const init = () => ({
    selection: Nothing(),
    resume: {
        id: 'none'
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
        if (match) {
            if (match.params.id !== state.resume.id) {
                return Promise.resolve(Action.FetchResume(match.params.id));
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
            sheet: model.onLoad(model.sheet, state)
        });

        const newState = Object.assign({}, state, { loading: false });
        set(newState, 'selection', selection);
        return newState;
    },
    UpdateProperty(state, action) {
        const selection = lookupUnsafe('selection', state);
        const { sheet: prevSheet, model } = selection;
        const newState = model.onUpdate(action, prevSheet, state);
        // TO DO: persist value in state
        return newState;
    },
    REQUEST_START(state, action) {
        return { ...state, loading: true };
    },
    REQUEST_SUCCESSFUL(state, action) {
        return { ...state, loading: false };
    },
    REQUEST_FAILED(state, action) {
        return state;
    }
});

export function* effects() { }
