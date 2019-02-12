module.exports = {
  moduleFileExtensions: [
    'js',
    'jsx',
    'json',
    'vue',
    'ts',
    'tsx'
  ],
  transform: {
    '^.+\\.vue$': 'vue-jest',
    '.+\\.(css|styl|less|sass|scss|svg|png|jpg|ttf|woff|woff2)$': 'jest-transform-stub',
    '^.+\\.tsx?$': 'ts-jest'
  },
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1'
  },
  snapshotSerializers: [
    'jest-serializer-vue'
  ],
  testMatch: [
    "**/__tests__/**/*.[jt]s?(x)", "**/?(*.)+(spec).[jt]s?(x)"
  ],
  collectCoverage: true,
  collectCoverageFrom: [
    'src/services/*.{ts,vue}',
    'src/components/**/*.{ts,vue}',
    'src/root/*.{ts,vue}',
    '!src/main.ts', // No need to cover bootstrap file
  ],
  coveragePathIgnorePatterns: [
    "/node_modules/",
    "/.*\\.vue$"
  ],
  testURL: 'http://localhost/',
  globals: {
    'ts-jest': {
      babelConfig: true
    }
  }
}