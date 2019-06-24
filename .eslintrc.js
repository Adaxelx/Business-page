module.exports = {
  globals: {
    __PATH_PREFIX__: true,
    document: true,
  },
  extends: ['airbnb', 'prettier', 'prettier/react'],
  rules: {
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }],
  },
  env: {
    jest: true,
  },
}
