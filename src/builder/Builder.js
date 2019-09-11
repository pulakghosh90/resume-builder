import { set } from 'lodash';
import { matchAction, lookupUnsafe } from '../util/util';
import lookUpModel from './property-sheet/PropertySheetRegistry';
import { Nothing, Just } from '../util/Maybe';

export const init = () => ({
    selection: Nothing()
});

export const Actions = {
    SelectSection(sectionType) {
        return {
            type: 'SelectSection',
            sectionType
        };
    }
};

export const update = matchAction({
    '@initialize': init,
    SelectSection(state, { sectionType }) {
        const model = lookUpModel(sectionType);
        const selection = Just({
            sectionType,
            model,
            sheet: model.onLoad(model.sheet, state)
        });

        const newState = Object.assign({}, state);
        set(newState, 'selection', selection);
        return newState;
    },
    UpdateProperty(state, action) {
        const selection = lookupUnsafe('selection', state);
        const { sheet: prevSheet, model } = selection;
        const newState = model.onUpdate(action, prevSheet, state);
        // TO DO: persist value in state
        return newState;
    }
});
