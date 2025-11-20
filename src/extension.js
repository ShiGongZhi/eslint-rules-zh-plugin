const vscode = require('vscode')
const eslintRules = require('../rules')
const RULE_URL = require('./const/rule-urls')
const { translateHeuristic } = require('./utils')

const reactHooksUrlMapping = {
  'react-hooks/exhaustive-deps': '14920',
  'react-hooks/rules-of-hooks': 'rules-of-hooks',
}

// TODO: 代码重构 & 改造成ts
function provideHover(document, position) {
  const diagnostics = vscode.languages
    .getDiagnostics(document.uri)
    .filter((diagnostic) => {
      if (diagnostic.source !== 'eslint') {
        return false
      }

      const range = diagnostic.range

      // 使用更简洁和可靠的范围检查方法
      // 扩展原始范围以提供更好的用户体验
      const leftTolerance = 2
      const rightTolerance = 1

      // 创建扩展后的范围
      const extendedRange = new vscode.Range(
        new vscode.Position(
          range.start.line,
          Math.max(range.start.character - leftTolerance, 0),
        ),
        new vscode.Position(
          range.end.line,
          range.end.character + rightTolerance,
        ),
      )

      // 使用 VS Code 内置的 contains 方法进行范围检查
      return extendedRange.contains(position)
    })
  if (diagnostics && diagnostics.length > 0) {
    const contents = diagnostics
      .map((diagnostic) => {
        // VS Code 的 ESLint 扩展在不同情况下可能给出 string 或 object 形式的 code
        const codeValue =
          typeof diagnostic.code === 'object'
            ? diagnostic.code.value
            : diagnostic.code

        if (codeValue) {
          let ruleId = String(codeValue)
          const rule = eslintRules[ruleId]
          // console.log(
          //   '%c Line:45 🥥 diagnostic.code',
          //   'color:#ea7e5c',
          //   diagnostic.code,
          // )
          let url = diagnostic?.code?.target?._formatted

          if (/typescript-eslint/.test(ruleId)) {
            // typescript-eslint 规则
            // url =
            //   RULE_URL.TYPESCRIPT + ruleId.replace('@typescript-eslint/', '')
          } else if (/react-hooks/.test(ruleId)) {
            // eslint-plugin-react-hooks 规则
            // url = RULE_URL.REACT_HOOKS + reactHooksUrlMapping[ruleId]
          } else if (/react-refresh/.test(ruleId)) {
            // eslint-plugin-react-refresh 规则
            // url = RULE_URL.REACT_REFRESH
          } else if (/react/.test(ruleId)) {
            // eslint-plugin-react 规则
            // url = RULE_URL.REACT + ruleId.replace('react/', '') + '.md'
          } else if (/vue/.test(ruleId)) {
            // eslint-plugin-vue 规则
            // url = RULE_URL.VUE + ruleId.replace('vue/', '')
          } else if (/prettier/.test(ruleId)) {
            // eslint-plugin-prettier 规则
            // url = RULE_URL.PRETTIER
          } else {
            if (ruleId.includes('/')) {
              // 处理类似 scope/rule-name 的规则 ID
            } else {
              // eslint 规则
              url = RULE_URL.BASE + ruleId
              // ruleId = `eslint(${ruleId})`
            }
          }

          // 使用翻译器翻译错误消息
          const originalMessage = diagnostic.message
          const translatedMessage = translateHeuristic(
            String(codeValue),
            originalMessage,
            rule,
          )

          // 若规则词条不存在，使用翻译后的消息或原始消息
          const zh = translatedMessage || (rule && rule.zh) || '查看规则文档'
          // const md = `$(lightbulb) [${ruleId}：${zh}](${url})`
          const md = `<span alt="eslint-rules-translate-chinese-markdown">${zh}<span alt="eslint-rules-translate-chinese-link">eslint([${ruleId}](${url}))</span></span>`
          const markdownString = new vscode.MarkdownString(md, true)
          markdownString.isTrusted = true
          markdownString.supportHtml = true
          return markdownString
        } else {
          return null
        }
      })
      .filter((diagnostic) => !!diagnostic)

    if (contents.length === 0) return null

    // 如果有多个错误，在每个错误之间添加分隔线
    if (contents.length > 1) {
      const separatedContents = []
      for (let i = 0; i < contents.length; i++) {
        separatedContents.push(contents[i])
        // 在非最后一个错误后添加分隔线
        if (i < contents.length - 1) {
          const separator = new vscode.MarkdownString('---')
          separator.isTrusted = true
          separatedContents.push(separator)
        }
      }
      return { contents: separatedContents }
    }

    // 直接返回所有匹配的错误，因为初始过滤已确保鼠标在错误范围内
    return { contents }
  }
  return
}

// 激活插件
function activate(context) {
  const selector = []
  for (const language of [
    'javascript',
    'javascriptreact',
    'typescript',
    'typescriptreact',
    'vue',
  ]) {
    selector.push({ language, scheme: 'file' })
    selector.push({ language, scheme: 'untitled' })
  }

  // 注册鼠标悬停提示
  context.subscriptions.push(
    vscode.languages.registerHoverProvider(selector, {
      provideHover,
    }),
  )
}

module.exports = {
  activate,
}
