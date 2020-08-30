'use strict';

module.exports = {
  roots: [
    'test'
  ],
  verbose: false,
  // testEnvironment: 'node',
  testEnvironment: 'jsdom',
  testRegex: 'test/(.*/)*.*test.js$',
  coverageDirectory: './coverage/',
  collectCoverage: true,
  collectCoverageFrom: [
    'src/**/*'
  ],
  transform: {
    '^.+\\.js$': 'babel-jest'
  },
  transformIgnorePatterns: ['/node_modules/'],
  moduleNameMapper: {
    '^celia.object/(.*)$': '<rootDir>/../object/src/$1',
    '^celia.is/(.*)$': '<rootDir>/../is/src/$1'
  }
};
