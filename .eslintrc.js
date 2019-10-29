module.exports = {
  "env": {
      "browser": true,
      "es6": true,
      "node": true
  },
   "parserOptions": {
       "parser": "babel-eslint"
   },
  "extends": [
      "airbnb-base",
      "plugin:vue/recommended"
  ],
  "rules": {
      'semi': [
          'warn',
          'never',
      ],
      'global-require': 'warn',
      'no-prototype-builtins': 'warn',
      'no-shadow': 'warn',
      'no-cond-assign': ['warn', 'always'],
      'no-undef': ['error', { typeof: true }],
      'radix': 'warn',
      'no-restricted-syntax': [
          'warn',
          {
              selector: 'ForInStatement',
              message: 'for..in loops iterate over the entire prototype chain, which is virtually never what you want. Use Object.{keys,values,entries}, and iterate over the resulting array.',
          },
          {
              selector: 'ForOfStatement',
              message: 'iterators/generators require regenerator-runtime, which is too heavyweight for this guide to allow them. Separately, loops should be avoided in favor of array iterations.',
          },
          {
              selector: 'LabeledStatement',
              message: 'Labels are a form of GOTO; using them makes code confusing and hard to maintain and understand.',
          },
          {
              selector: 'WithStatement',
              message: '`with` is disallowed in strict mode because it makes code impossible to predict and optimize.',
          },
      ],
      'strict': 'warn',
      'lines-around-directive': 'warn',
      'indent': [
          'warn',
          2,
          {
              MemberExpression: 0,
              SwitchCase: 1,
          },
      ],
      'newline-per-chained-call': 'off',
      'comma-dangle': [
          'warn',
          'always-multiline',
      ],
      'import/no-extraneous-dependencies': 'off',
      'import/newline-after-import': 'off',
      'import/no-dynamic-require': 'off',
      'camelcase': 'off',
      'func-names': 'off',
      'arrow-parens': [
          'warn',
          'always',
      ],
      'prefer-const': 'warn',
      'quotes': [
          'warn',
          'single',
          {
              avoidEscape: true,
              allowTemplateLiterals: true,
          },
      ],
      'max-len': [
          'warn',
          {
              code: 200,
          },
      ],
      'arrow-body-style': 'off',
      'new-cap': 'warn',
      'no-param-reassign': [
          'warn',
          { props: false },
      ],
      'no-unused-vars': [
          'warn',
          { args: 'none' },
      ],
      'consistent-return': 'off',
      'no-loop-func': 'warn',
      'default-case': 'warn',
      'no-plusplus': [
          'warn',
          { allowForLoopAfterthoughts: true },
      ],
      'no-underscore-dangle': 'off',
      'no-extend-native': 'off',
      'no-restricted-properties': [
          'warn',
          {
              object: 'arguments',
              property: 'callee',
              message: 'arguments.callee is deprecated',
          },
          {
              property: '__defineGetter__',
              message: 'Please use Object.defineProperty instead.',
          },
          {
              property: '__defineSetter__',
              message: 'Please use Object.defineProperty instead.',
          },
      ],
      'brace-style': 'off',
      'quote-props': [
          'warn',
          'consistent-as-needed',
      ],
      'no-multiple-empty-lines': [
          'warn',
          {
              max: 3,
              maxEOF: 0,
              maxBOF: 0,
          },
      ],
      'no-use-before-define': [
          'error',
          {
              functions: false, // Function declarations are hoisted, so it’s safe
              classes: true,    // Class declarations are not hoisted, so it might be danger
              variables: true,
          },
      ],
      'one-var': [
          'warn',
          'never',
      ],
      "no-console": "off",
      "import/no-unresolved": "off"
  }
}
