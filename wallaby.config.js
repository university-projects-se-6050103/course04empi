module.exports = wallaby => {
  return {
    testFramework: 'jest',
    files: [
      'package.json',
    ],
    tests: [
      'src/**/*.js'
    ],
    env: {
      type: 'node',
      runner: 'node'
    },
    setup(wallaby) {
      wallaby.testFramework.configure(require('./package.json').jest);
    }
  };
};
