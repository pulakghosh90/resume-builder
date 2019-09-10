

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
