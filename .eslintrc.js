module.exports = {
    env: {
        browser: true,
        es6: true,
    },
    extends: 'airbnb',
    parser: 'babel-eslint',
    globals: {
        Atomics: 'readonly',
        SharedArrayBuffer: 'readonly',
    },
    parserOptions: {
        ecmaFeatures: {
            jsx: true,
        },
        ecmaVersion: 2018,
        sourceType: 'module',
    },
    plugins: [
        'react',
        'react-hooks'
    ],
    rules: {
        'strict': 0,
        'comma-style': ['error', 'last'],
        'comma-dangle': [
            'error', {
                arrays: 'never',
                objects: 'ignore',
                imports: 'never',
                exports: 'never',
                functions: 'never'
            }
        ],
        'max-len': 0,
        'indent': ['error', 4, { SwitchCase: 1 }],
        'arrow-parens': ['error', 'always'],
        'arrow-body-style': ['error', 'as-needed'],
        'object-curly-newline': ["warn", {
            multiline: true,
            minProperties: 10,
            consistent: true
        }],
        'object-curly-spacing': ['warn', 'always', { 'objectsInObjects': false }],
        'react/jsx-filename-extension': [
            'error',
            {
                extensions: ['.jsx', '.js']
            }
        ],
        'react/prop-types': [2, { skipUndeclared: true }],
        'react/forbid-prop-types': 0,
        'react/jsx-indent': ['warn', 4],
        'react/jsx-indent-props': ['warn', 4],
        'react/jsx-tag-spacing': [
            'warn',
            {
                closingSlash: 'never',
                beforeSelfClosing: 'allow',
                afterOpening: 'allow-multiline'
            }
        ],
        'react/require-default-props': 'off',
        'react-hooks/rules-of-hooks': 'error',
        'react-hooks/exhaustive-deps': 'warn'
    },
};
