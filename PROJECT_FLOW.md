# VS Code 插件运行流程（ESLint Chinese Rules）

## 目标清单

- 用 Markdown 简述项目运行流程
- 依据 README 与源码梳理激活、触发与悬停提示链路
- 列出关键文件与数据来源

## 项目概览

- 名称与定位：ESLint Chinese Rules（ESLint 规则中文提示），在代码问题上悬停时展示中文说明并跳转到对应规则文档。
- 入口文件：`src/extension.js`
- 规则数据：`rules/` 下合并的规则字典（`base.js`、`vue.js`、`react.js`、`ts.js`）
- 文档链接常量：`src/const/rule-urls.js`
- 插件清单与激活：`package.json`

## 激活与依赖

- 激活条件（activationEvents）：当打开以下语言的文件时激活插件
  - javascript, javascriptreact, typescript, typescriptreact, vue
- 依赖建议：依赖 VS Code 官方 ESLint 扩展（已在 `extensionPack` 中声明），需要项目里实际启用 ESLint 才会产生诊断信息。

## 运行主线（悬停提示链路）

1. 激活
   - 打开上述任一语言的文件时，VS Code 激活扩展并注册悬停提供器（HoverProvider）到以下文档选择器：
     - scheme: file 与 untitled；language: js/jsx/ts/tsx/vue
2. 触发
   - 用户将鼠标悬停在存在 ESLint 诊断的代码位置上（行/列位于诊断范围内）。
3. 诊断筛选
   - 扩展调用 `vscode.languages.getDiagnostics(document.uri)` 获取当前文档的全部诊断。
   - 仅保留 `diagnostic.source === 'eslint'` 且覆盖当前悬停位置的诊断项。
4. 规则识别
   - 对每个诊断项，读取 `diagnostic.code`（期望是对象，取 `code.value` 作为 ruleId）。
   - 在合并后的规则字典 `rules/index.js` 中查找该 `ruleId`，获得中文描述 `rule.zh`。
5. 链接构建
   - 不同规则前缀映射到不同中文/官方文档站点（`src/const/rule-urls.js`）：
     - `@typescript-eslint/*` → https://typescript-eslint.io/rules/
     - `vue/*` → https://eslint.vuejs.org/rules/
     - `react/*` → https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/<rule>.md
     - 其他（ESLint 核心） → https://zh-hans.eslint.org/docs/latest/rules/<rule>
6. 悬停内容返回
   - 为每条匹配的诊断构造一条带图标与链接的 Markdown（`$(lightbulb) [提示：<中文描述>](<URL>)`）。
   - 返回包含多条 MarkdownString 的 Hover，VS Code 在悬停面板中展示，可点击跳转文档。

## 关键文件与职责

- `src/extension.js`
  - 注册 HoverProvider（file/untitled + js/jsx/ts/tsx/vue）
  - 按位置与来源过滤 ESLint 诊断
  - 规则匹配与 Markdown 构建、返回 Hover
- `rules/index.js`
  - 合并 `base.js`（ESLint 核心）、`vue.js`、`react.js`、`ts.js` 四类规则映射为一个字典
- `src/const/rule-urls.js`
  - 不同生态的规则文档基地址常量
- `package.json`
  - `activationEvents`、`main`、`extensionPack`（依赖 ESLint 扩展）与 VS Code 引擎版本

## 时序简图（文字版）

- VS Code 打开文件 → 激活扩展并注册 HoverProvider
- ESLint 扩展产生诊断 → 用户在诊断处悬停
- 获取并过滤 ESLint 诊断 → 提取 ruleId → 查表获取中文描述 → 生成规则链接
- 返回 Hover（多条 Markdown 可并列显示）→ 用户点击跳转到中文/官方文档

## 注意与边界

- 仅当 ESLint 扩展实际产出诊断且 `diagnostic.code` 为对象（含 `value`）时才生成提示。
- 规则字典未包含的 ruleId 将无法展示中文提示与链接（当前实现未做缺省兜底）。
- 支持多条诊断同时展示多条提示内容。
