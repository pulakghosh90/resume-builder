import cuid from 'cuid';
import { Nothing } from './Maybe';

export const isNumber = (x) => typeof x === 'number';

const fail = () => { throw new Error('Type is not defined'); };

export const keySwitch = (type, handlers) => {
    const defaultt = handlers['*'] || handlers._;
    return (obj) => {
        const key = obj[type];
        const f = handlers[key] || defaultt;
        return f ? f(obj) : fail();
    };
};

function switchOnKey(state, action) {
    const actionMap = this.actions;
    if (typeof state === 'undefined' && typeof actionMap['@initialize'] === 'function') {
        return actionMap['@initialize']();
    }
    const { type } = action;
    if (typeof actionMap[type] === 'function') {
        return actionMap[type](state, action);
    }
    if (typeof actionMap['*'] === 'function') {
        return actionMap['*'](state, action);
    }
    return state;
}

// perf optimization, bind to this instead of closure
export function matchAction(actions) {
    return switchOnKey.bind({ actions });
}

export const lookupUnsafe = (prop, obj) => {
    const val = obj[prop];
    if (val.isNothing) return Nothing();
    if (val.isJust) return val.getOrElse();
    return val;
};

// TODO: explore immutable.js for functional programming
export const replace = (key, value, kollect) => {
    const copy = Object.assign({}, kollect);
    copy[key] = value;
    return copy;
};

export const mapObject = (f, obj) => {
    const copy = {};
    for (const k in obj) {
        copy[k] = f(k, obj[k]);
    }
    return copy;
};

export const reduceObject = (f, seed, obj) => {
    for (const k in obj) {
        seed = f(seed, k, obj[k]);
    }
    return seed;
};

export const reduce = {
    Object(f, seed, obj) {
        for (const key in obj) {
            seed = f(seed, key, obj[key]);
        }
        return seed;
    },
    Array(f, seed, list) {
        for (let i = 0; i < list.length; i++) {
            seed = f(seed, i, list[i]);
        }
        return seed;
    }
};

export const getValues = (sheet) => {
    const fields = Array.from(sheet.fields.values());
    return fields.reduce((seed, field) => {
        if (field.heading || field.section) {
            return seed;
        }
        seed[field.id] = field.value;
        return seed;
    }, {});
};
