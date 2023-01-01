module.exports = {
  env: {
    browser: true,
    es2023: true,
    node: true
  },
  parserOptions: {
    project: './tsconfig.json'
  },
  overrides: [
    {
      files: ['./src/vite-env.d.ts'],
      rules: {
        '@typescript-eslint/triple-slash-reference': 'off'
      }
    }
  ]
}
