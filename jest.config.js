module.exports = {
  preset: 'jest-preset-angular',
  setupFilesAfterEnv: [
    '<rootDir>/setup-jest.ts',
  ],
  testMatch: [
    '**/?(*.)+(spec).+(ts)?(x)',
  ],
  globals: {
    'ts-jest': {
      tsconfig: '<rootDir>/tsconfig.spec.json',
      stringifyContentPathRegex: '\\.html$',
    },
  },
  coverageDirectory: '<rootDir>/src/coverage/jest',
  coverageReporters: [
    'html',
    'lcovonly',
  ],
};
