import { set } from 'lodash';
import { matchAction } from '../util/util';


export const init = () => ({
    name: 'resume'
});

export const Actions = {
    SelectPage(sectionType) {
        return {
            type: 'SelectSection',
            sectionType
        };
    }
};

export const update = matchAction({
    '@initialize': init,
    SelectPage(state, action) {
        return state;
    }
});
