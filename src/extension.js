const vscode = require('vscode')
const eslintRules = require('../rules')
const RULE_URL = require('./const/rule-urls')

const reactHooksUrlMapping = {
  'react-hooks/exhaustive-deps': '14920',
  'react-hooks/rules-of-hooks': 'rules-of-hooks'
}

// TODO: 代码重构 & 改造成ts
function provideHover(document, position) {
  const diagnostics = vscode.languages
    .getDiagnostics(document.uri)
    .filter((diagnostic) => {
      if (diagnostic.source !== 'eslint') {
        return false
      }
      if (
        position.line === diagnostic.range.start.line &&
        position.line === diagnostic.range.end.line &&
        position.character >= diagnostic.range.start.character &&
        position.character <= diagnostic.range.end.character
      ) {
        // 单行
        return true
      } else if (
        position.line >= diagnostic.range.start.line &&
        position.line <= diagnostic.range.end.line
      ) {
        // 多行
        return true
      }
      return false
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
          let url = RULE_URL.BASE + ruleId

          if (/typescript-eslint/.test(ruleId)) {
            // typescript-eslint 规则
            url =
              RULE_URL.TYPESCRIPT + ruleId.replace('@typescript-eslint/', '')
          } else if (/react-hooks/.test(ruleId)) {
            // eslint-plugin-react-hooks 规则
            url = RULE_URL.REACT_HOOKS + reactHooksUrlMapping[ruleId]
          } else if (/react/.test(ruleId)) {
            // eslint-plugin-react 规则
            url = RULE_URL.REACT + ruleId.replace('react/', '') + '.md'
          } else if (/vue/.test(ruleId)) {
            // eslint-plugin-vue 规则
            url = RULE_URL.VUE + ruleId.replace('vue/', '')
          } else {
            // eslint 规则
            ruleId = `eslint(${ruleId})`
          }

          // 若规则词条不存在，仍然展示原始 ruleId 和可用链接
          const zh = rule && rule.zh ? rule.zh : '查看规则文档'
          const md = url
            ? `$(lightbulb) [${ruleId}：${zh}](${url})`
            : `$(lightbulb) ${ruleId}：${zh}`
          return new vscode.MarkdownString(md, true)
        } else {
          return null
        }
      })
      .filter((diagnostic) => !!diagnostic)
    return contents.length
      ? {
          contents
        }
      : null
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
    'vue'
  ]) {
    selector.push({ language, scheme: 'file' })
    selector.push({ language, scheme: 'untitled' })
  }

  // 注册鼠标悬停提示
  context.subscriptions.push(
    vscode.languages.registerHoverProvider(selector, {
      provideHover
    })
  )
}

module.exports = {
  activate
}
