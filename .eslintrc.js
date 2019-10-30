module.exports = {
    root: true,
    env: {
        node: true
    },
    'extends': [
        'plugin:vue/essential',
        '@vue/standard'
    ],
    rules: {
        'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
        'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
        // reset/ config is defind but never used。想要关闭这个提示需要在.eslintrc.js文件中修改配置：

        "no-unused-vars": 'off',
        //  去掉此项警告
        "indent": ["off", 2],
        'space-before-function-paren': [
            'error',
            {
              anonymous: 'always',
              named: 'always',
              asyncArrow: 'always',
            },
          ]


    },
    parserOptions: {
        parser: 'babel-eslint'
    },

}