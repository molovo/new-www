module.exports = {
  globals: {
    __PATH_PREFIX__: true,
  },
  extends: ['react-app', 'airbnb-typescript', 'airbnb/hooks', 'prettier'],
  parserOptions: {
    project: './tsconfig.json',
  },
}
