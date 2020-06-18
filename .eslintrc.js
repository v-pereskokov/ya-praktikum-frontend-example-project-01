module.exports = {
    root: true,
    plugins: [
        'eslint-plugin',
        'import',
        'eslint-comments',
    ],
    env: {
        es6: true,
        node: true,
    },
    parserOptions: {
        "sourceType": "module",
    },
    settings: {
        'import/internal-regex': '(^__)'
    },
    extends: [
        'eslint:recommended',
    ],
    rules: {
        'arrow-parens': [
            'error',
            'as-needed'
        ],
        camelcase: 0,
        'class-methods-use-this': 0,
        'consistent-return': 0,
        'comma-dangle': [
            'warn',
            {
                arrays: 'always-multiline',
                objects: 'always-multiline',
                imports: 'always-multiline',
                exports: 'always-multiline',
                functions: 'always-multiline'
            }
        ],
        quotes: ['error', 'single'],
        'import/no-extraneous-dependencies': 0,
        'import/order': [
            'warn',
            {
                groups: [
                    ['builtin', 'external'],
                    'internal',
                    ['parent', 'sibling'],
                    'index'
                ],
                pathGroups: [
                    {
                        pattern: '__/**',
                        group: 'internal',
                        position: 'after',
                    },
                    {
                        pattern: 'client/**',
                        group: 'external',
                        position: 'after',
                    },
                    {
                        pattern: 'infrastructure/**',
                        group: 'external',
                        position: 'after',
                    },
                    {
                        pattern: 'entity/**',
                        group: 'external',
                        position: 'after',
                    },
                    {
                        pattern: 'core-store/**',
                        group: 'external',
                        position: 'after',
                    },
                    {
                        pattern: './*.scss',
                        group: 'index',
                        position: 'after',
                    },
                ],
                pathGroupsExcludedImportTypes: ['builtin'],
                alphabetize: {
                    order: 'asc',
                    caseInsensitive: true
                },
                'newlines-between': 'always'
            }
        ],
        'indent': [
            'error',
            4,
            {
                SwitchCase: 1
            }
        ],
        'max-len': [
            'error',
            {
                code: 150,
                tabWidth: 4,
                ignoreComments: true,
                ignoreTrailingComments: true,
                ignoreUrls: true,
                ignoreStrings: true,
                ignoreTemplateLiterals: true
            }
        ],
        'max-params': 0,
        'space-in-parens': ['error', 'never'],
        'array-bracket-spacing': ['error', 'never'],
        'space-before-blocks': ['error', 'always'],
        'keyword-spacing': ['error', { before: true, after: true }],
        semi: ['error', 'always'],
        'eol-last': ['error', 'always'],
        'no-cond-assign': [
            'error',
            'except-parens'
        ],
        'no-implicit-coercion': 0,
        'no-else-return': 0,
        'no-extra-boolean-cast': 0,
        'no-nested-ternary': 0,
        'no-plusplus': 0,
        'no-prototype-builtins': 0,
        'no-return-await': 0,
        'no-underscore-dangle': 0,
        'no-unused-vars': 0,
        'no-use-before-define': 0,
        'no-useless-escape': 0,
        'object-curly-spacing': [
            'error',
            'never'
        ],
        'operator-linebreak': 0,
        'space-before-function-paren': [
            'error',
            {
                anonymous: 'always',
                named: 'never',
                asyncArrow: 'always'
            }
        ],
        'no-console': 'error',
        'no-process-exit': 'error',
    }
};
