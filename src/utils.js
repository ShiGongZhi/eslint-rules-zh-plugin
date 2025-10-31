/**
 * 尝试对常见 ESLint 提示进行模式化翻译
 * @param {string} ruleId 规则 ID
 * @param {string} message ESLint 原始英文消息
 * @param {{zh?: string}} [ruleEntry] 规则字典项（若有）
 */
function translateHeuristic(ruleId, message, ruleEntry) {
  if (!message || typeof message !== 'string') return ruleEntry?.zh

  // 2) 针对常见插件的典型提示进行特化翻译（优先执行）
  let m

  if (ruleId === 'react-hooks/exhaustive-deps') {
    // 通用语句处理

    // 缺少一个依赖的情况
    m = message.match(
      /^React Hook (\w+) has a missing dependency: '(.+?)'\.(.*)/,
    )
    if (m) {
      const hook = m[1]
      const dep = m[2]
      const rest = m[3].trim()
      // 处理附加说明
      const restZh = exhaustiveDepsAdditionalNotes(rest)

      return `React Hook ${renderCodeBlockFunction(
        hook,
      )} 缺少依赖：${renderCodeBlockVariable(dep)}${restZh}`
    }

    // 缺少多个依赖的情况
    m = message.match(/^React Hook (\w+) has missing dependencies: (.+?)\.(.*)/)
    if (m) {
      const hook = m[1]
      const deps = m[2]
      const rest = m[3].trim()
      // 处理附加说明
      const restZh = exhaustiveDepsAdditionalNotes(rest)

      return multipleDependencyHandling(deps, hook, restZh, '缺少')
    }

    // 一个不必要的依赖
    m = message.match(
      /^React Hook (\w+) has an unnecessary dependency: '(.+?)'\.(.*)/,
    )
    if (m) {
      const hook = m[1]
      const dep = m[2]
      const rest = m[3].trim()
      // 处理附加说明
      const restZh = exhaustiveDepsAdditionalNotes(rest)

      return `React Hook ${renderCodeBlockFunction(
        hook,
      )} 有不必要的依赖：${renderCodeBlockVariable(dep)}${restZh}`
    }

    // 多个不必要的依赖
    m = message.match(
      /^React Hook (\w+) has unnecessary dependencies: (.+?)\.(.*)/,
    )
    if (m) {
      const hook = m[1]
      const deps = m[2]
      const rest = m[3].trim()
      // 处理附加说明
      const restZh = exhaustiveDepsAdditionalNotes(rest)

      return multipleDependencyHandling(deps, hook, restZh, '有不必要的')
    }

    // 没有添加依赖数组的情况
    m = message.match(
      /React Hook (\w+) does nothing when called with only one argument. Did you forget to pass an array of dependencies\?/,
    )
    if (m) {
      const hook = m[1]
      return `React Hook ${renderCodeBlockFunction(
        hook,
      )} 在仅传入一个参数时不会起作用。你是否忘记传入依赖数组？`
    }

    // 字面量依赖（null、数字、字符串等）
    m = message.match(
      /^The (.+?) literal is not a valid dependency because it never changes\.?/,
    )
    if (m) {
      const literal = m[1]
      return `字面量 ${renderCodeBlockVariable(
        literal,
      )} 不是有效的依赖，因为它永远不会变化。可以安全移除`
    }

    // 外部作用域值依赖（如 undefined 等）
    m = message.match(
      /^Outer scope values like '(.+?)' aren't valid dependencies because mutating them doesn't re-render the component\.?/,
    )
    if (m) {
      const value = m[1]
      return exhaustiveDepsOuterScopeValues(value)
    }
  }

  // 通用的 exhaustive-deps 规则描述
  if (ruleId === 'react-hooks/exhaustive-deps' && !message) {
    return '校验 useEffect、useCallback、useMemo 等 Hook 的依赖数组是否完备'
  }

  if (ruleId === 'react-hooks/rules-of-hooks') {
    // Hook 调用位置错误
    // if (/React Hook [\w$]+ is called in function/.test(message)) {
    //   return 'React Hook 的调用位置不合法：Hook 只能在 React 函数组件或自定义 Hook 的顶层调用'
    // }
    m = message.match(
      /^React Hook "(.+?)" cannot be called at the top level. React Hooks must be called in a React function component or a custom React Hook function\.?/,
    )
    if (m) {
      const value = m[1]
      return `React Hook ${renderCodeBlockFunction(
        value,
      )} 不能在顶层调用。React Hook 必须在 React 函数组件或自定义 React Hook 函数中调用`
    }
  }

  // react-refresh/only-export-components 规则特化翻译
  if (ruleId === 'react-refresh/only-export-components') {
    // 场景1: 文件导出了组件和其他内容（常量、函数等）
    if (
      message.includes(
        'Fast refresh only works when a file only exports components',
      )
    ) {
      // namedExport
      if (
        message.includes(
          'Use a new file to share constants or functions between components',
        )
      ) {
        return 'Fast Refresh 仅在文件仅导出组件时有效。使用新文件在组件之间共享常量或函数'
      }
      // localComponents
      if (message.includes('Move your component(s) to a separate file')) {
        return 'Fast Refresh 仅在文件仅导出组件时有效。请将您的组件移动到单独的文件中'
      }
      // reactContext
      if (message.includes('Move your React context(s) to a separate file')) {
        return 'Fast Refresh 仅在文件仅导出组件时有效。请将您的 React context(s) 移动到单独的文件中'
      }
    }

    // 场景2: noExport
    if (
      message.includes(
        'Fast refresh only works when a file has exports. Move your component(s) to a separate file',
      )
    ) {
      return 'Fast Refresh 仅在文件有导出时有效。请将您的组件移动到单独的文件中'
    }

    // 场景3: anonymousExport
    if (
      message.includes(
        "Fast refresh can't handle anonymous components. Add a name to your export",
      )
    ) {
      return 'Fast Refresh 无法处理匿名组件。请为导出添加名称'
    }

    // 场景4: exportAll
    if (
      message.includes(
        "This rule can't verify that `export *` only exports components",
      )
    ) {
      return "This rule can't verify that `export *` only exports components"
    }
  }

  // prefer-const 规则特化翻译
  if (ruleId === 'prefer-const') {
    // 处理 "'变量名' is never reassigned. Use 'const' instead." 格式
    m = message.match(/^'(.+?)' is never reassigned\. Use 'const' instead\.?/)
    if (m) {
      const varName = m[1]
      return `${renderCodeBlockVariable(
        varName,
      )} 从未被重新赋值，应使用 ${renderCodeBlockKeyword('const')} 声明。`
    }
  }

  if (ruleId === 'no-var') {
    // 处理 "Unexpected var, use let or const instead." 格式
    m = message.match(/^Unexpected (.+?), use (.+?) or (.+?) instead\.?/)
    if (m) {
      return `禁止使用 ${renderCodeBlockKeyword(
        m[1],
      )} 应使用 ${renderCodeBlockKeyword(m[2])} 或 ${renderCodeBlockKeyword(
        m[3],
      )} 声明。`
    }
  }

  if (ruleId === 'no-self-assign') {
    return variableXXX(m, message, renderCodeBlock)
  }

  if (ruleId === 'no-unused-labels') {
    return variableXXX(m, message, renderCodeBlock)
  }

  if (ruleId === 'no-useless-escape') {
    // 处理 "Unnecessary escape character: 变量名." 格式
    m = message.match(/Unnecessary escape character: (.*)\./)
    if (m) {
      const varName = m[1]
      return `不必要的转义字符: ${renderCodeBlock(varName)}`
    }
  }

  if (ruleId === 'no-regex-spaces') {
    // 处理 "Spaces are hard to count. Use {2}." 格式
    m = message.match(/Spaces are hard to count. Use \{(\d+)\}\./)
    if (m) {
      const spaceCount = m[1]
      return `空格数量难以计算。请使用 ${renderCodeBlock(
        `&nbsp;{${spaceCount}}`,
      )} 来表示 ${renderCodeBlockNumber(spaceCount)} 个空格`
    }
  }

  // @typescript-eslint 规则特化翻译
  if (ruleId.startsWith('@typescript-eslint/')) {
    if (ruleId === '@typescript-eslint/no-explicit-any') {
      // 显式使用 any 类型
      m = message.match(/^Unexpected any. Specify a different type\.?/)
      if (m) {
        return `禁止使用 ${renderCodeBlockKeyword('any')}。请指定其他的类型。`
      }
    }

    if (ruleId === '@typescript-eslint/no-unused-vars') {
      // 已定义但从未使用
      m = message.match(/^'(.+?)' is defined but never used\.?(.*)/)
      if (m) {
        const varName = m[1]
        const restContent = m[2]
        if (restContent === ' Allowed unused args must match /^_/u.') {
          return `${renderCodeBlockParameter(
            varName,
          )} 已定义但从未使用。允许未使用的参数必须匹配 ${renderCodeBlock(
            '/^_/u',
          )}`
        }
        return `${renderCodeBlockVariable(varName)} 已定义但从未使用。`
      }

      m = message.match(/^'(.+?)' is assigned a value but never used\.?/)
      if (m) {
        const varName = m[1]
        return `${renderCodeBlockVariable(varName)} 被赋值但从未使用。`
      }
    }

    if (ruleId === '@typescript-eslint/triple-slash-reference') {
      m = message.match(
        /Do not use a triple slash reference for (.+?), use `(.+?)` style instead\.?/,
      )
      if (m) {
        return `不允许使用三斜线引用 ${renderCodeBlockString(
          m[1],
        )} 请改用 ${renderCodeBlockKeyword(m[2])} 风格。`
      }
    }

    if (ruleId === '@typescript-eslint/adjacent-overload-signatures') {
      m = message.match(/All (.+?) signatures should be adjacent\.?/)
      if (m) {
        return `所有 ${renderCodeBlockFunction(m[1])} 签名都应相邻。`
      }
    }

    if (ruleId === '@typescript-eslint/prefer-namespace-keyword') {
      m = message.match(
        /Use 'namespace' instead of 'module' to declare custom TypeScript modules\.?/,
      )
      if (m) {
        return `请使用 ${renderCodeBlockKeyword(
          'namespace',
        )} 而不是 ${renderCodeBlockKeyword(
          'module',
        )} 来声明自定义 TypeScript 模块。`
      }
    }

    // 类型相关错误的通用模式
    m = message.match(/^Type '(.+?)' is not assignable to type '(.+?)'\.?/)
    if (m) {
      const fromType = m[1]
      const toType = m[2]
      return `类型 '${fromType}' 不能赋值给类型 '${toType}'`
    }

    // 参数相关错误
    m = message.match(/^Parameter '(.+?)' (.+)\.?/)
    if (m) {
      const paramName = m[1]
      const description = m[2]
      let descZh = description
      if (description.includes('implicitly has an')) {
        descZh = "隐式具有 'any' 类型"
      }
      return `参数 '${paramName}' ${descZh}`
    }
  }

  // 3) 一些通用短语替换，提升可读性（尽量不改变变量名等细节）
  // 注意：这里的替换在特化翻译之后进行，作为兜底处理
  let zh = message
  /** @type {{from: RegExp, to: string}[]} */
  const replacements = [
    // 关键字高亮
    {
      from: /\bany\b/g,
      to:
        ruleId === '@typescript-eslint/no-explicit-any'
          ? renderCodeBlockKeyword('any')
          : 'any',
    },
    {
      from: /\bconst\b/g,
      to:
        ruleId === 'prettier/prettier'
          ? 'const'
          : renderCodeBlockKeyword('const'),
    },

    // 注意：下面这些规则已经在特化处理中处理过了，这里作为兜底
    // { from: /\b(\w+) is not defined/gi, to: '$1 未定义' },
    // { from: /\bmust\b/gi, to: '必须' },
    // { from: /require(s)?/gi, to: '要求' },
  ]
  for (const { from, to } of replacements) {
    zh = zh.replace(from, to)
  }

  // 最后兜底：如果以上翻译都没有明显改善，且规则字典中有中文描述，则使用规则字典
  if (zh === message && ruleEntry && ruleEntry.zh) {
    return ruleEntry.zh
  }

  return zh
}

function renderCodeBlock(content) {
  return `<code>${content}</code>`
}

function renderCodeBlockVariable(content) {
  return `<code alt="eslint-rules-translate-chinese-code-variable">${content}</code>`
}

function renderCodeBlockFunction(content) {
  return `<code alt="eslint-rules-translate-chinese-code-function">${content}</code>`
}

function renderCodeBlockParameter(content) {
  return `<code alt="eslint-rules-translate-chinese-code-parameter">${content}</code>`
}

function renderCodeBlockKeyword(content) {
  return `<code alt="eslint-rules-translate-chinese-code-keyword">${content}</code>`
}

function renderCodeBlockString(content) {
  return `<code alt="eslint-rules-translate-chinese-code-string">${content}</code>`
}

function renderCodeBlockNumber(content) {
  return `<code alt="eslint-rules-translate-chinese-code-number">${content}</code>`
}

// 附加说明
function exhaustiveDepsAdditionalNotes(rest) {
  let restZh = ''
  if (rest.includes('Either include it or remove the dependency array')) {
    restZh = '。请将其加入依赖数组，或移除依赖数组'
  }
  if (rest.includes('Either exclude it or remove the dependency array')) {
    restZh = '。请将其移出依赖数组，或移除依赖数组'
  }
  if (rest.includes('Either include them or remove the dependency array')) {
    restZh = '。请将它们加入依赖数组，或移除依赖数组'
  }
  if (rest.includes('Either exclude them or remove the dependency array')) {
    restZh = '。请将它们移出依赖数组，或移除依赖数组'
  }

  if (
    rest.includes('Outer scope values like') &&
    rest.includes("aren't valid dependencies")
  ) {
    const outerScopeMatch = rest.match(
      /Outer scope values like '(.+?)' aren't valid dependencies because mutating them doesn't re-render the component\.?/,
    )
    if (outerScopeMatch) {
      const outerValue = outerScopeMatch[1]
      restZh = restZh + '。' + exhaustiveDepsOuterScopeValues(outerValue)
    }
  }
  return restZh || rest
}

function exhaustiveDepsOuterScopeValues(content) {
  return `外部作用域的值如 ${renderCodeBlockVariable(
    content,
  )} 不是有效的依赖，因为改变它们不会重新渲染组件`
}

function multipleDependencyHandling(deps, hook, restZh, diffContent) {
  // 处理多个依赖的高亮，分别对每个变量名进行高亮
  let depsZh = deps
  // 匹配形如 "'var1' and 'var2'" 或 "'var1', 'var2', and 'var3'" 的模式
  const singleQuoteVars = deps.match(/'([^']+)'/g)
  if (singleQuoteVars) {
    singleQuoteVars.forEach((quotedVar) => {
      const varName = quotedVar.slice(1, -1) // 去掉引号
      depsZh = depsZh.replace(quotedVar, renderCodeBlockVariable(varName))
    })

    // 将 "and" 翻译为 "和"，并删除 "和" 前面多余的逗号
    depsZh = depsZh.replace(/,\s+and\s+/g, ' 和 ').replace(/\s+and\s+/g, ' 和 ')

    // 统计依赖数量
    const depCount = singleQuoteVars.length
    return `React Hook ${renderCodeBlockFunction(
      hook,
    )} ${diffContent}${renderCodeBlockNumber(
      depCount,
    )}个依赖：${depsZh}${restZh}`
  }

  return `React Hook ${renderCodeBlockFunction(
    hook,
  )} ${diffContent}依赖：${depsZh}${restZh}`
}

function variableXXX(m, message, render, restContent) {
  // 处理 "'变量名' is assigned to itself." 格式
  m = message.match(/'(.+?)'(.*)/)
  if (m) {
    const varName = m[1]
    const localRestContent = m[2]
    return `${render(varName)}${restContent || localRestContent}`
  }
  return message
}

// function xxxVariable(m, message, render, restContent) {
//   m = message.match(/(.*)'(.+?)'/)
//   console.log('%c Line:420 🥥 m', 'color:#ea7e5c', m)
//   if (m) {
//     const varName = m[2]
//     const localRestContent = m[1]
//     return `${restContent || localRestContent}${render(varName)}`
//   }
//   return message
// }

module.exports = {
  translateHeuristic,
}
