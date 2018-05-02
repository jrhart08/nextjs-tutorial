module.exports = {
  extends: ['airbnb'],
  rules: {
    "react/react-in-jsx-scope": "off", // next.js doesn't need this
    'react/forbid-prop-types': 'off',
  },
  globals: {
    'React': false,
  },
};
