module.exports = {
  globals: {
    __PATH_PREFIX__: true,
    document: true,
    window: true,
  },
  parser: 'babel-eslint',
  extends: ['airbnb', 'prettier', 'prettier/react'],
  rules: {
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }],
  },
  env: {
    jest: true,
  },
}
