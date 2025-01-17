'use strict';

module.exports = {
    cache: false,
    extension: ['.ts', '.tsx'],
    exclude: [
        '**/*.d.ts',
        'coverage/**',
        'packages/*/test/**',
        'test/**',
        'test{,-*}.ts',
        '**/*{.,-}{test,spec}.ts',
        '**/__tests__/**',
        '**/node_modules/**'
    ]
};
