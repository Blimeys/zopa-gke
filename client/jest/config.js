module.exports = {
  moduleDirectories: ['node_modules', 'src'],
  moduleFileExtensions: ['js', 'jsx', 'ts', 'tsx'],
  testMatch: ['<rootDir>/**/__tests__/**/**.test.(js|jsx|tsx|ts)'],
  cacheDirectory: '.jest/cache',
  collectCoverage: false,
  collectCoverageFrom: [
    '<rootDir>/**/*.{ts,tsx}',
    '!<rootDir>/**/*.{js}',
    '!**/@types/**',
    '!**/node_modules/**',
    '!**/dist/**',
    '!**/*/__tests__/**',
  ],
  setupFiles: ['<rootDir>/jest/setup.js'],
  testPathIgnorePatterns: [
    '<rootDir>/build/',
    '<rootDir>/node_modules/',
    '<rootDir>/etc/',
  ],
  transform: {
    ['^.+\\.(js|jsx|ts|tsx)$']: '<rootDir>/jest/transformer.js',
  },
  moduleNameMapper: {
    '.+\\.(png)$': '<rootDir>/jest/fileMock.js',
    '^@libs(.*)$': '<rootDir>/packages/libs$1',
  },
  snapshotSerializers: ['enzyme-to-json/serializer'],
  rootDir: '../',
  clearMocks: true,
};
