module.exports = {
  // 制表符宽度
  tabWidth: 2,
  // jsx 是否使用双引号
  jsxSingleQuote: true,
  // jsx 标签的反尖括号需要换行
  jsxBracketSameLine: true,
  // 是否使用单引号
  singleQuote: true,
  // 是否自动补全分号
  semicolons: false,
  // 行尾是否需要有分号
  semi: false,
  // 覆写默认配置
  overrides: [
    {
      files: '*.json',
      options: {
        printWidth: 200,
      },
    },
  ],
  // 箭头函数，只有一个参数时，也需要括号
  arrowParens: 'always',
}
