module.exports = {
  collectCoverage: true,
  transform: {
    '^.+\\.ts?$': 'ts-jest',
  },
  collectCoverageFrom: ["javascript/*", "typescript/*"],
}
