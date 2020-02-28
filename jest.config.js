module.exports = {
  clearMocks: true,
  coverageDirectory: 'coverage',
  testEnvironment: 'node',
  moduleFileExtensions: ['ts', 'js'],
  transformIgnorePatterns: ['<rootDir>/node_modules/'],
  transform: {
    '^.+\\.(ts|tsx)$': 'ts-jest'
  },
  moduleNameMapper: {
    '@root/(.*)': '<rootDir>/src/$1',
    '@router/(.*)': '<rootDir>/src/router/$1',
    '@methods/(.*)': '<rootDir>/src/methods/$1',
    '@structures/(.*)': '<rootDir>/src/structures/$1',
    '@utils/(.*)': '<rootDir>/src/utils/$1'
  }
};
