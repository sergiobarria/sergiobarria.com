const nextJest = require('next/jest');

const createJestConfig = nextJest({
  // Provide the path to you Next.js app to load next.config.js and .env files in your test environment
  dir: '<rootDir>',
});

const customJestConfig = {
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  moduleNameMapper: {
    '^@/*/(.*)$': '<rootDir>/src/$1',
  },
  // modulePaths: ['<rootDir>'],
  // moduleDirectories: ['node_modules', 'src'],
  modulePathIgnorePatterns: ['test-utils/', '<rootDir>/cypress/'],
  testEnvironment: 'jsdom',
};

// createJestConfig is exported this way to ensure that next/jest can load the Next.js config which is async
module.exports = createJestConfig(customJestConfig);
