module.exports = {
    "env": {
        "browser": true,
        "es6": true
    },
    "extends": "eslint:recommended",
    "installedESLint": true,
    "parserOptions": {
        "ecmaFeatures": {
            "experimentalObjectRestSpread": true,
            "jsx": true
        },
        "sourceType": "module"
    },
    "plugins": [
        "react"
    ],

    "parser": "babel-eslint",
    "rules": {

        "react/jsx-uses-react": "error",
        "react/jsx-uses-vars": "error",

        "semi": "off",//分号
        "quotes": "off",//引号
        'no-console': 'off',
        "indent": "off",//tab


        "no-unused-vars": ["error", { "vars": "all", "args": "after-used" }],//没有使用过的变量

        "no-extra-boolean-cast":'off'


    }
};