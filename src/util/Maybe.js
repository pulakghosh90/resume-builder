
function Maybe() { }

function Just(value) {
    if (isJust(value) || isNothing(value)) return value;
    if (!(this instanceof Just)) return new Just(value);

    this.value = value;
}

function Nothing() {
    return Maybe.Nothing;
}

Just.prototype = Object.create(Maybe);
Nothing.prototype = Object.create(Maybe);
Maybe.Nothing = new Nothing();

Object.assign(Just.prototype, {
    isNothing: false,
    isJust: true,
    map(f) {
        return Just(f(this.value));
    },
    getOrElse() {
        return this.value;
    },
    fold({ Just: J }) {
        return J(this.value);
    }
});

Object.assign(Nothing.prototype, {
    isNothing: true,
    isJust: false,
    map() {
        return this;
    },
    getOrElse(value) {
        return value;
    },
    fold({ Nothing: N }) {
        return N();
    }
});

const isNothing = (x) => x instanceof Nothing;
const isJust = (x) => x instanceof Just;

export {
    Maybe,
    Just,
    Nothing,
    isJust,
    isNothing
};
