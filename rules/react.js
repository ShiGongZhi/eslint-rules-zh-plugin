module.exports = {
  'react/boolean-prop-naming': {
    en: 'Enforces consistent naming for boolean props',
    zh: '为布尔型道具执行一致的命名'
  },
  'react/button-has-type': {
    en: 'Forbid "button" element without an explicit "type" attribute',
    zh: "禁止没有明确'type'属性的 'button'元素"
  },
  'react/default-props-match-prop-types': {
    en: 'Enforce all defaultProps are defined and not "required" in propTypes.',
    zh: '执行所有defaultProps的定义，并且在propTypes中没有required'
  },
  'react/destructuring-assignment': {
    en: 'Enforce consistent usage of destructuring assignment of props, state, and context',
    zh: '强制执行道具、状态和上下文的解构分配的一致用法'
  },
  'react/display-name': {
    en: 'Prevent missing displayName in a React component definition',
    zh: '防止React组件定义中丢失displayName'
  },
  'react/forbid-component-props': {
    en: 'Forbid certain props on components',
    zh: '禁止组件上的某些道具'
  },
  'react/forbid-dom-props': {
    en: 'Forbid certain props on DOM Nodes',
    zh: '禁止DOM节点上的某些道具'
  },
  'react/forbid-elements': {
    en: 'Forbid certain elements',
    zh: '禁止某些元素'
  },
  'react/forbid-foreign-prop-types': {
    en: "Forbid using another component's propTypes",
    zh: '禁止使用其他组件的propTypes'
  },
  'react/forbid-prop-types': {
    en: 'Forbid certain propTypes',
    zh: '禁止某些propTypes'
  },
  'react/function-component-definition': {
    en: 'Standardize the way function component get defined',
    zh: '使功能组件的定义方式标准化'
  },
  'react/hook-use-state': {
    en: 'Ensure symmetric naming of useState hook value and setter variables',
    zh: '确保useState钩值和setter变量的对称命名'
  },
  'react/iframe-missing-sandbox': {
    en: 'Enforce sandbox attribute on iframe elements',
    zh: '在iframe元素上强制执行沙盒属性'
  },
  'react/no-access-state-in-setstate': {
    en: 'Reports when this.state is accessed within setState',
    zh: '在setState内访问this.state时报告'
  },
  'react/no-adjacent-inline-elements': {
    en: 'Prevent adjacent inline elements not separated by whitespace.',
    zh: '防止相邻的内联元素没有用空格隔开,'
  },
  'react/no-array-index-key': {
    en: 'Prevent usage of Array index in keys',
    zh: '防止在键中使用阵列索引'
  },
  'react/no-arrow-function-lifecycle': {
    en: 'Lifecycle methods should be methods on the prototype, not class fields',
    zh: '生命周期方法应该是原型上的方法，而不是类字段'
  },
  'react/no-children-prop': {
    en: 'Prevent passing of children as props.',
    zh: '防止将儿童作为道具传递,'
  },
  'react/no-danger': {
    en: 'Prevent usage of dangerous JSX props',
    zh: '防止使用危险的JSX道具'
  },
  'react/no-danger-with-children': {
    en: 'Report when a DOM element is using both children and dangerouslySetInnerHTML',
    zh: '当一个DOM元素同时使用children和dangerouslySetInnerHTML时报告'
  },
  'react/no-deprecated': {
    en: 'Prevent usage of deprecated methods',
    zh: '防止使用废弃的方法'
  },
  'react/no-did-mount-set-state': {
    en: 'Prevent usage of setState in componentDidMount',
    zh: '防止在componentDidMount中使用setState'
  },
  'react/no-did-update-set-state': {
    en: 'Prevent usage of setState in componentDidUpdate',
    zh: '防止在componentDidUpdate中使用setState'
  },
  'react/no-direct-mutation-state': {
    en: 'Prevent direct mutation of this.state',
    zh: '防止这个.状态的直接突变'
  },
  'react/no-find-dom-node': {
    en: 'Prevent usage of findDOMNode',
    zh: '防止使用findDOMNode'
  },
  'react/no-invalid-html-attribute': {
    en: 'Forbid attribute with an invalid values`',
    zh: '禁止具有无效值的属性`'
  },
  'react/no-is-mounted': {
    en: 'Prevent usage of isMounted',
    zh: '防止使用isMounted'
  },
  'react/no-multi-comp': {
    en: 'Prevent multiple component definition per file',
    zh: '防止每个文件有多个组件定义'
  },
  'react/no-namespace': {
    en: 'Enforce that namespaces are not used in React elements',
    zh: '执行命名空间不在React元素中使用'
  },
  'react/no-redundant-should-component-update': {
    en: 'Flag shouldComponentUpdate when extending PureComponent',
    zh: '在扩展PureComponent时标记shouldComponentUpdate'
  },
  'react/no-render-return-value': {
    en: 'Prevent usage of the return value of React.render',
    zh: '防止使用React.render的返回值'
  },
  'react/no-set-state': {
    en: 'Prevent usage of setState',
    zh: '防止使用setState'
  },
  'react/no-string-refs': {
    en: 'Prevent string definitions for references and prevent referencing this.refs',
    zh: '防止引用的字符串定义，防止引用this.refs'
  },
  'react/no-this-in-sfc': {
    en: 'Report "this" being used in stateless components',
    zh: "报告'this'被用于无状态组件中"
  },
  'react/no-typos': { en: 'Prevent common typos', zh: '防止常见的错别字' },
  'react/no-unescaped-entities': {
    en: 'Detect unescaped HTML entities, which might represent malformed tags',
    zh: '检测未转义的HTML实体，这可能代表畸形的标签'
  },
  'react/no-unknown-property': {
    en: 'Prevent usage of unknown DOM property',
    zh: '防止使用未知的DOM属性'
  },
  'react/no-unsafe': {
    en: 'Prevent usage of unsafe lifecycle methods',
    zh: '防止使用不安全的生命周期方法'
  },
  'react/no-unstable-nested-components': {
    en: 'Prevent creating unstable components inside components',
    zh: '防止在组件内创建不稳定的组件'
  },
  'react/no-unused-class-component-methods': {
    en: 'Prevent declaring unused methods of component class',
    zh: '防止声明组件类的未使用方法'
  },
  'react/no-unused-prop-types': {
    en: 'Prevent definitions of unused prop types',
    zh: '防止对未使用的道具类型进行定义'
  },
  'react/no-unused-state': {
    en: 'Prevent definition of unused state fields',
    zh: '防止定义未使用的状态字段'
  },
  'react/no-will-update-set-state': {
    en: 'Prevent usage of setState in componentWillUpdate',
    zh: '防止在componentWillUpdate中使用setState'
  },
  'react/prefer-es6-class': {
    en: 'Enforce ES5 or ES6 class for React Components',
    zh: '为React组件强制执行ES5或ES6类'
  },
  'react/prefer-exact-props': {
    en: 'Prefer exact proptype definitions',
    zh: '倾向于准确的道具类型定义'
  },
  'react/prefer-read-only-props': {
    en: 'Require read-only props.',
    zh: '要求只读的道具,'
  },
  'react/prefer-stateless-function': {
    en: 'Enforce stateless components to be written as a pure function',
    zh: '强制无状态组件被写成纯函数'
  },
  'react/prop-types': {
    en: 'Prevent missing props validation in a React component definition',
    zh: '防止在React组件定义中丢失道具验证'
  },
  'react/react-in-jsx-scope': {
    en: 'Prevent missing React when using JSX',
    zh: '防止在使用JSX时丢失React'
  },
  'react/require-default-props': {
    en: 'Enforce a defaultProps definition for every prop that is not a required prop.',
    zh: '为每一个不是必需道具的道具强制执行defaultProps定义,'
  },
  'react/require-optimization': {
    en: 'Enforce React components to have a shouldComponentUpdate method',
    zh: '强制要求React组件有一个shouldComponentUpdate方法'
  },
  'react/require-render-return': {
    en: 'Enforce ES5 or ES6 class for returning value in render function',
    zh: '在渲染函数中执行ES5或ES6类的返回值'
  },
  'react/self-closing-comp': {
    en: 'Prevent extra closing tags for components without children',
    zh: '防止没有子代的组件出现额外的关闭标签'
  },
  'react/sort-comp': {
    en: 'Enforce component methods order',
    zh: '执行组件方法顺序'
  },
  'react/sort-prop-types': {
    en: 'Enforce propTypes declarations alphabetical sorting',
    zh: '强制执行propTypes声明的字母排序'
  },
  'react/state-in-constructor': {
    en: 'State initialization in an ES6 class component should be in a constructor',
    zh: 'ES6类组件中的状态初始化应该在构造函数中进行'
  },
  'react/static-property-placement': {
    en: 'Defines where React component static properties should be positioned.',
    zh: '定义React组件静态属性的位置,'
  },
  'react/style-prop-object': {
    en: 'Enforce style prop value is an object',
    zh: '强制执行样式道具值是一个对象'
  },
  'react/void-dom-elements-no-children': {
    en: 'Prevent passing of children to void DOM elements (e.g. <br />).',
    zh: '防止将子女传递给无效的DOM元素（例如：<br />）,'
  },
  'react/jsx-boolean-value': {
    en: 'Enforce boolean attributes notation in JSX',
    zh: '在JSX中强制执行布尔属性符号'
  },
  'react/jsx-child-element-spacing': {
    en: 'Ensures inline tags are not rendered without spaces between them',
    zh: '确保内联标签之间没有空格就不会被渲染'
  },
  'react/jsx-closing-bracket-location': {
    en: 'Validate closing bracket location in JSX',
    zh: '验证JSX中收尾括号的位置'
  },
  'react/jsx-closing-tag-location': {
    en: 'Validate closing tag location for multiline JSX',
    zh: '验证多行JSX的关闭标签位置'
  },
  'react/jsx-curly-brace-presence': {
    en: 'Disallow unnecessary JSX expressions when literals alone are sufficient or enfore JSX expressions on literals in JSX children or attributes',
    zh: '当仅有字面意义就足够时，不允许不必要的JSX表达，或在JSX子项或属性中的字面意义上禁止JSX表达'
  },
  'react/jsx-curly-newline': {
    en: 'Enforce consistent line breaks inside jsx curly',
    zh: '在jsx大写字母内执行一致的换行'
  },
  'react/jsx-curly-spacing': {
    en: 'Enforce or disallow spaces inside of curly braces in JSX attributes',
    zh: '强制或禁止JSX属性中的大括号内的空格'
  },
  'react/jsx-equals-spacing': {
    en: 'Disallow or enforce spaces around equal signs in JSX attributes',
    zh: '不允许或强制执行JSX属性中等号周围的空格'
  },
  'react/jsx-filename-extension': {
    en: 'Restrict file extensions that may contain JSX',
    zh: '限制可能包含JSX的文件扩展'
  },
  'react/jsx-first-prop-new-line': {
    en: 'Ensure proper position of the first property in JSX',
    zh: '确保JSX中第一个属性的正确位置'
  },
  'react/jsx-fragments': {
    en: 'Enforce shorthand or standard form for React fragments',
    zh: '执行React片段的速记或标准形式'
  },
  'react/jsx-handler-names': {
    en: 'Enforce event handler naming conventions in JSX',
    zh: '在JSX中强制执行事件处理程序的命名规则'
  },
  'react/jsx-indent': { en: 'Validate JSX indentation', zh: '验证JSX缩进' },
  'react/jsx-indent-props': {
    en: 'Validate props indentation in JSX',
    zh: '验证JSX中的道具缩进'
  },
  'react/jsx-key': {
    en: 'Report missing key props in iterators/collection literals',
    zh: '报告迭代器/集合字句中缺失的关键道具'
  },
  'react/jsx-max-depth': {
    en: 'Validate JSX maximum depth',
    zh: '验证JSX最大深度'
  },
  'react/jsx-max-props-per-line': {
    en: 'Limit maximum of props on a single line in JSX',
    zh: '限制JSX中单行的最大道具'
  },
  'react/jsx-newline': {
    en: 'Require or prevent a new line after jsx elements and expressions.',
    zh: '要求或防止在jsx元素和表达式之后出现新的一行,'
  },
  'react/jsx-no-bind': {
    en: 'Prevents usage of Function.prototype.bind and arrow functions in React component props',
    zh: '防止在React组件道具中使用Function.prototype.bind和箭头函数'
  },
  'react/jsx-no-comment-textnodes': {
    en: 'Comments inside children section of tag should be placed inside braces',
    zh: '标签的儿童部分内的评论应放在大括号内'
  },
  'react/jsx-no-constructed-context-values': {
    en: 'Prevents JSX context provider values from taking values that will cause needless rerenders.',
    zh: '防止JSX上下文提供者的值会导致不必要的重新提交'
  },
  'react/jsx-no-duplicate-props': {
    en: 'Enforce no duplicate props',
    zh: '执行没有重复的道具'
  },
  'react/jsx-no-leaked-render': {
    en: 'Prevent problematic leaked values from being rendered',
    zh: '防止有问题的泄漏值被呈现出来'
  },
  'react/jsx-no-literals': {
    en: 'Prevent using string literals in React component definition',
    zh: '防止在React组件定义中使用字符串字面'
  },
  'react/jsx-no-script-url': {
    en: 'Forbid javascript: URLs',
    zh: '禁止javascript,URLs'
  },
  'react/jsx-no-target-blank': {
    en: 'Forbid target="_blank" attribute without rel="noreferrer"\n',
    zh: "禁止没有rel='noreferrer'的target='_blank'属性"
  },
  'react/jsx-no-undef': {
    en: 'Disallow undeclared variables in JSX',
    zh: '不允许JSX中的未声明变量'
  },
  'react/jsx-no-useless-fragment': {
    en: 'Disallow unnecessary fragments',
    zh: '不允许不必要的片段'
  },
  'react/jsx-one-expression-per-line': {
    en: 'Limit to one expression per line in JSX',
    zh: '在JSX中每行限制一个表达式'
  },
  'react/jsx-pascal-case': {
    en: 'Enforce PascalCase for user-defined JSX components',
    zh: '为用户定义的JSX组件强制执行PascalCase'
  },
  'react/jsx-props-no-multi-spaces': {
    en: 'Disallow multiple spaces between inline JSX props',
    zh: '不允许内联JSX道具之间有多个空格'
  },
  'react/jsx-props-no-spreading': {
    en: 'Prevent JSX prop spreading',
    zh: '防止JSX道具的传播'
  },
  'react/jsx-sort-default-props': {
    en: 'Enforce default props alphabetical sorting',
    zh: '执行默认道具的字母排序'
  },
  'react/jsx-sort-props': {
    en: 'Enforce props alphabetical sorting',
    zh: '强制执行道具的字母排序'
  },
  'react/jsx-space-before-closing': {
    en: 'Validate spacing before closing bracket in JSX',
    zh: '在JSX中验证闭合括号前的间距'
  },
  'react/jsx-tag-spacing': {
    en: 'Validate whitespace in and around the JSX opening and closing brackets',
    zh: '验证JSX开头和结尾括号内和周围的空白'
  },
  'react/jsx-uses-react': {
    en: 'Prevent React to be marked as unused',
    zh: '防止React被标记为未使用'
  },
  'react/jsx-uses-vars': {
    en: 'Prevent variables used in JSX to be marked as unused',
    zh: '防止JSX中使用的变量被标记为未使用'
  },
  'react/jsx-wrap-multilines': {
    en: 'Prevent missing parentheses around multilines JSX',
    zh: '防止多行JSX周围的小括号丢失'
  }
}
