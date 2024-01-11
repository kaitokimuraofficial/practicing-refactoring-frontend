module.exports = {
  clearMocks: true,
  setupFilesAfterEnv: ['<rootDir>/src/setupEnzyme.ts'],

  snapshotSerializers: ['enzyme-to-json/serializer'],

  transform: {
    "^.+\\.tsx?$": "babel-jest"
  }
};