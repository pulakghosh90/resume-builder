
export const Just = (value) => ({
    isNothing: false,
    isJust: true,
    map(f) {
        return Maybe(f(value));
    },
    getOrElse: () => value,
    fold: ({ Just: J }) => J(value)
});

export const Nothing = () => ({
    isNothing: true,
    isJust: false,
    map() {
        return this;
    },
    getOrElse: (value) => value,
    fold: ({ Nothing: N }) => N()
});

export const Maybe = (value) => (value ? Just(value) : Nothing());
