module.exports = {
    extends: '@it-incubator/eslint-config',
    rules: {'no-console': ['warn', {allow: ['warn', 'error']}], "no-undef": "off"},
    globals: {
        "__IS_DEV__": true
    }
}
