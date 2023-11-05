module.exports = {
    extends: ['@it-incubator/eslint-config', "plugin:i18next/recommended"],
    rules: {
        'no-console': ['warn', {allow: ['warn', 'error']}],
        "no-undef": "off",
        "i18next/no-literal-string": ["error", {markupOnly: true}]
    },
    globals: {
        "__IS_DEV__": true
    },
    plugins: ["i18next"]
}
