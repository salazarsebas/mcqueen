module.exports = {
    testEnvironment: 'node',
    roots: ['<rootDir>/src', '<rootDir>/tests'],
    transform: {
      '^.+\\.tsx?$': 'ts-jest',
    },
    moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
    coverageDirectory: './coverage',
    transformIgnorePatterns: ['/node_modules/'],
    collectCoverage: true,
    collectCoverageFrom: [
      'frontend/src/**/*.{js,ts}',
      '!frontend/src/**/*.d.ts',
      '!frontend/src/**/index.{js,ts}',
    ],
  };
