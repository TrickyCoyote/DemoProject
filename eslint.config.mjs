import ts from '@typescript-eslint/eslint-plugin';
import tsParser from '@typescript-eslint/parser';
import prettierPlugin from 'eslint-plugin-prettier';
import eslintConfigPrettier from 'eslint-config-prettier';

export default [
    {
        files: ['src/**/*.{ts,tsx}'],
        plugins: {
            '@typescript-eslint': ts,
            ts,
            prettier: prettierPlugin
        },
        languageOptions: {
            parser: tsParser,
            parserOptions: {
                ecmaVersion: 2022,
                ecmaFeatures: {
                    modules: true
                },
                project: './tsconfig.json'
            }
        },
        rules: {
            quotes: ['error', 'single'],
            'ts/no-require-imports': 'error',
            ...eslintConfigPrettier.rules
        }
    }
];
