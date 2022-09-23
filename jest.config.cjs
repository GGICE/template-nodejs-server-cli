module.exports = {
  testPathIgnorePatterns: ['/node_modules/', '/dist/'],
  preset: 'ts-jest/presets/default-esm', // or other ESM presets
  moduleNameMapper: {
    '^(\\.{1,2}/.*)\\.js$': '$1',
  },
  transform: {
    '<regex_match_files': [
      'ts-jest',
      {
        useESM: true,
      },
    ],
  },
};
