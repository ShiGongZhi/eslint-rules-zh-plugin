module.exports = {
  /* 不好翻译 */
  // '@typescript-eslint/ban-ts-comment': {
  //   en: 'Disallow @ts-<directive> comments or require descriptions after directive',
  //   zh: '不允许@ts-<指令>评论或要求指令后的描述'
  // },

  '@typescript-eslint/adjacent-overload-signatures': {
    en: 'Require that member overloads be consecutive',
    zh: '要求成员重载是连续的',
  },
  '@typescript-eslint/array-type': {
    en: 'Require using either T[] or Array<T> for arrays',
    zh: '要求对数组使用T[]或Array<T>',
  },
  '@typescript-eslint/await-thenable': {
    en: 'Disallow awaiting a value that is not a Thenable',
    zh: '不允许等待一个不是Thenable的值',
  },
  '@typescript-eslint/ban-tslint-comment': {
    en: 'Disallow // tslint:<rule-flag> comments',
    zh: '不允许//tslint:<规则-标志>评论',
  },
  '@typescript-eslint/ban-types': {
    en: 'Disallow certain types',
    zh: '不允许某些类型',
  },
  '@typescript-eslint/class-literal-property-style': {
    en: 'Enforce that literals on classes are exposed in a consistent style',
    zh: '强制要求类上的字词以一致的风格暴露',
  },
  '@typescript-eslint/consistent-generic-constructors': {
    en: 'Enforce specifying generic type arguments on type annotation or constructor name of a constructor call',
    zh: '强制在类型注释或构造函数调用的构造函数名称上指定通用类型参数',
  },
  '@typescript-eslint/consistent-indexed-object-style': {
    en: 'Require or disallow the Record type',
    zh: '要求或不允许记录类型',
  },
  '@typescript-eslint/consistent-type-assertions': {
    en: 'Enforce consistent usage of type assertions',
    zh: '强制执行类型断言的一致使用',
  },
  '@typescript-eslint/consistent-type-definitions': {
    en: 'Enforce type definitions to consistently use either interface or type',
    zh: '强制类型定义一致地使用接口或类型',
  },
  '@typescript-eslint/consistent-type-exports': {
    en: 'Enforce consistent usage of type exports',
    zh: '强制执行类型导出的一致用法',
  },
  '@typescript-eslint/consistent-type-imports': {
    en: 'Enforce consistent usage of type imports',
    zh: '强制执行类型导入的一致用法',
  },
  '@typescript-eslint/explicit-function-return-type': {
    en: 'Require explicit return types on functions and class methods',
    zh: '要求在函数和类方法上明确返回类型',
  },
  '@typescript-eslint/explicit-member-accessibility': {
    en: 'Require explicit accessibility modifiers on class properties and methods',
    zh: '要求在类的属性和方法上有明确的可访问性修改器',
  },
  '@typescript-eslint/explicit-module-boundary-types': {
    en: "Require explicit return and argument types on exported functions' and classes' public class methods",
    zh: '要求在导出的函数和类的公共类方法上明确返回和参数类型',
  },
  '@typescript-eslint/member-delimiter-style': {
    en: 'Require a specific member delimiter style for interfaces and type literals',
    zh: '要求为接口和类型字提供特定的成员定界符样式',
  },
  '@typescript-eslint/member-ordering': {
    en: 'Require a consistent member declaration order',
    zh: '要求成员申报顺序一致',
  },
  '@typescript-eslint/method-signature-style': {
    en: 'Enforce using a particular method signature syntax',
    zh: '强制使用一个特定的方法签名语法',
  },
  '@typescript-eslint/naming-convention': {
    en: 'Enforce naming conventions for everything across a codebase',
    zh: '为整个代码库中的所有东西执行命名惯例',
  },
  '@typescript-eslint/no-base-to-string': {
    en: 'Require .toString() to only be called on objects which provide useful information when stringified',
    zh: '要求.toString()只对那些在字符串化时提供有用信息的对象进行调用',
  },
  '@typescript-eslint/no-confusing-non-null-assertion': {
    en: 'Disallow non-null assertion in locations that may be confusing',
    zh: '不允许在可能产生混淆的地方出现非空的断言',
  },
  '@typescript-eslint/no-confusing-void-expression': {
    en: 'Require expressions of type void to appear in statement position',
    zh: '要求void类型的表达式出现在语句位置',
  },
  '@typescript-eslint/no-duplicate-enum-values': {
    en: 'Disallow duplicate enum member values',
    zh: '不允许重复的枚举成员值',
  },
  '@typescript-eslint/no-dynamic-delete': {
    en: 'Disallow using the delete operator on computed key expressions',
    zh: '不允许在计算的关键表达式上使用删除操作符',
  },
  '@typescript-eslint/no-empty-interface': {
    en: 'Disallow the declaration of empty interfaces',
    zh: '不允许声明空接口',
  },
  '@typescript-eslint/no-explicit-any': {
    en: 'Disallow the any type',
    zh: '不允许any类型',
  },
  '@typescript-eslint/no-extra-non-null-assertion': {
    en: 'Disallow extra non-null assertion',
    zh: '不允许额外的非空值断言',
  },
  '@typescript-eslint/no-extraneous-class': {
    en: 'Disallow classes used as namespaces',
    zh: '不允许作为命名空间的类',
  },
  '@typescript-eslint/no-floating-promises': {
    en: 'Require Promise-like statements to be handled appropriately',
    zh: '要求对类似承诺的语句进行适当处理',
  },
  '@typescript-eslint/no-for-in-array': {
    en: 'Disallow iterating over an array with a for-in loop',
    zh: '不允许用for-in循环对数组进行迭代',
  },
  '@typescript-eslint/no-implicit-any-catch': {
    en: 'Disallow usage of the implicit any type in catch clauses',
    zh: '不允许在catch子句中使用隐含的any类型',
  },
  '@typescript-eslint/no-inferrable-types': {
    en: 'Disallow explicit type declarations for variables or parameters initialized to a number, string, or boolean',
    zh: '不允许对初始化为数字、字符串或布尔值的变量或参数进行明确的类型声明',
  },
  '@typescript-eslint/no-invalid-void-type': {
    en: 'Disallow void type outside of generic or return types',
    zh: '不允许在通用类型或返回类型之外的无效类型',
  },
  '@typescript-eslint/no-meaningless-void-operator': {
    en: 'Disallow the void operator except when used to discard a value',
    zh: '不允许使用void操作符，除非是用于丢弃一个值',
  },
  '@typescript-eslint/no-misused-new': {
    en: 'Enforce valid definition of new and constructor',
    zh: '强制执行new和constructor的有效定义',
  },
  '@typescript-eslint/no-misused-promises': {
    en: 'Disallow Promises in places not designed to handle them',
    zh: '不允许在不是为处理承诺而设计的地方使用承诺',
  },
  '@typescript-eslint/no-namespace': {
    en: 'Disallow custom TypeScript modules and namespaces',
    zh: '不允许自定义TypeScript模块和命名空间',
  },
  '@typescript-eslint/no-non-null-asserted-nullish-coalescing': {
    en: 'Disallow non-null assertions in the left operand of a nullish coalescing operator',
    zh: '不允许在空值凝聚运算符的左操作数中出现非空值断言',
  },
  '@typescript-eslint/no-non-null-asserted-optional-chain': {
    en: 'Optional chain expressions can return undefined by design - using a non-null assertion is unsafe and wrong.',
    zh: '可选链表达式可以通过设计返回undefined - 使用non-null断言是不安全和错误的',
  },
  '@typescript-eslint/no-non-null-assertion': {
    en: 'Disallow non-null assertions using the ! postfix operator',
    zh: '不允许使用！后缀操作符的非空断言',
  },
  '@typescript-eslint/no-parameter-properties': {
    en: 'Disallow the use of parameter properties in class constructors',
    zh: '不允许在类构造函数中使用参数属性',
  },
  '@typescript-eslint/no-redundant-type-constituents': {
    en: 'Disallow members of unions and intersections that do nothing or override type information',
    zh: '不允许联盟和交叉点的成员不做任何事情或覆盖类型信息',
  },
  '@typescript-eslint/no-require-imports': {
    en: 'Disallow invocation of require()',
    zh: '不允许调用require()',
  },
  '@typescript-eslint/no-this-alias': {
    en: 'Disallow aliasing this',
    zh: '不允许对这个进行别名',
  },
  '@typescript-eslint/no-type-alias': {
    en: 'Disallow type aliases',
    zh: '不允许类型别名',
  },
  '@typescript-eslint/no-unnecessary-boolean-literal-compare': {
    en: 'Disallow unnecessary equality comparisons against boolean literals',
    zh: '不允许对布尔字词进行不必要的平等比较',
  },
  '@typescript-eslint/no-unnecessary-condition': {
    en: 'Disallow conditionals where the type is always truthy or always falsy',
    zh: '不允许类型总是真实的或总是虚假的条件式',
  },
  '@typescript-eslint/no-unnecessary-qualifier': {
    en: 'Disallow unnecessary namespace qualifiers',
    zh: '不允许不必要的命名空间限定符',
  },
  '@typescript-eslint/no-unnecessary-type-arguments': {
    en: 'Disallow type arguments that are equal to the default',
    zh: '不允许与默认值相同的类型参数',
  },
  '@typescript-eslint/no-unnecessary-type-assertion': {
    en: 'Disallow type assertions that do not change the type of an expression',
    zh: '不允许不改变表达式类型的类型断言',
  },
  '@typescript-eslint/no-unnecessary-type-constraint': {
    en: 'Disallow unnecessary constraints on generic types',
    zh: '不允许对通用类型的不必要的约束',
  },
  '@typescript-eslint/no-unsafe-argument': {
    en: 'Disallow calling a function with a value with type any',
    zh: '不允许用any类型的值调用一个函数',
  },
  '@typescript-eslint/no-unsafe-assignment': {
    en: 'Disallow assigning a value with type any to variables and properties',
    zh: '不允许给变量和属性分配any类型的值',
  },
  '@typescript-eslint/no-unsafe-call': {
    en: 'Disallow calling a value with type any',
    zh: '不允许调用any类型的值',
  },
  '@typescript-eslint/no-unsafe-member-access': {
    en: 'Disallow member access on a value with type any',
    zh: '不允许对类型为any的值进行成员访问',
  },
  '@typescript-eslint/no-unsafe-return': {
    en: 'Disallow returning a value with type any from a function',
    zh: '不允许从一个函数中返回一个类型为any的值',
  },
  '@typescript-eslint/no-useless-empty-export': {
    en: "Disallow empty exports that don't change anything in a module file",
    zh: '不允许在模块文件中不改变any东西的空导出',
  },
  '@typescript-eslint/no-var-requires': {
    en: 'Disallow require statements except in import statements',
    zh: '除了在导入语句中，不允许require语句',
  },
  '@typescript-eslint/non-nullable-type-assertion-style': {
    en: 'Enforce non-null assertions over explicit type casts',
    zh: '在明确的类型转换中强制执行非空的断言',
  },
  '@typescript-eslint/parameter-properties': {
    en: 'Require or disallow parameter properties in class constructors',
    zh: '要求或不允许类构造函数中的参数属性',
  },
  '@typescript-eslint/prefer-as-const': {
    en: 'Enforce the use of as const over literal type',
    zh: '强制使用常数而不是字面类型',
  },
  '@typescript-eslint/prefer-enum-initializers': {
    en: 'Require each enum member value to be explicitly initialized',
    zh: '要求每个枚举成员的值都明确地被初始化',
  },
  '@typescript-eslint/prefer-for-of': {
    en: 'Enforce the use of for-of loop over the standard for loop where possible',
    zh: '在可能的情况下，强制使用for-of循环而不是标准for循环',
  },
  '@typescript-eslint/prefer-function-type': {
    en: 'Enforce using function types instead of interfaces with call signatures',
    zh: '强制使用函数类型而不是带有调用签名的接口',
  },
  '@typescript-eslint/prefer-includes': {
    en: 'Enforce includes method over indexOf method',
    zh: '在indexOf方法之上强制执行包括方法',
  },
  '@typescript-eslint/prefer-literal-enum-member': {
    en: 'Require all enum members to be literal values',
    zh: '要求所有枚举成员都是字面价值',
  },
  '@typescript-eslint/prefer-namespace-keyword': {
    en: 'Require using namespace keyword over module keyword to declare custom TypeScript modules',
    zh: '要求使用命名空间关键字而不是模块关键字来声明自定义TypeScript模块',
  },
  '@typescript-eslint/prefer-nullish-coalescing': {
    en: 'Enforce using the nullish coalescing operator instead of logical chaining',
    zh: '强制使用nullish凝聚运算符而不是逻辑链',
  },
  '@typescript-eslint/prefer-optional-chain': {
    en: 'Enforce using concise optional chain expressions instead of chained logical ands',
    zh: '强制使用简洁的可选链式表达，而不是链式逻辑和',
  },
  '@typescript-eslint/prefer-readonly': {
    en: "Require private members to be marked as readonly if they're never modified outside of the constructor",
    zh: '如果私有成员在构造函数之外从未被修改，则要求将其标记为只读',
  },
  '@typescript-eslint/prefer-readonly-parameter-types': {
    en: 'Require function parameters to be typed as readonly to prevent accidental mutation of inputs',
    zh: '要求函数参数被打成只读，以防止输入的意外变异',
  },
  '@typescript-eslint/prefer-reduce-type-parameter': {
    en: 'Enforce using type parameter when calling Array#reduce instead of casting',
    zh: '在调用Array#reduce时强制使用类型参数，而不是铸造',
  },
  '@typescript-eslint/prefer-regexp-exec': {
    en: 'Enforce RegExp#exec over String#match if no global flag is provided',
    zh: '如果没有提供全局标志，强制执行RegExp#exec而不是String#match',
  },
  '@typescript-eslint/prefer-return-this-type': {
    en: 'Enforce that this is used when only this type is returned',
    zh: '当只返回这种类型时，强制使用这个',
  },
  '@typescript-eslint/prefer-string-starts-ends-with': {
    en: 'Enforce using String#startsWith and String#endsWith over other equivalent methods of checking substrings',
    zh: '强制使用String#startsWith和String#endsWith而不是其他检查子字符串的同等方法',
  },
  '@typescript-eslint/prefer-ts-expect-error': {
    en: 'Enforce using @ts-expect-error over @ts-ignore',
    zh: '强制使用@ts-expect-error而不是@ts-ignore',
  },
  '@typescript-eslint/promise-function-async': {
    en: 'Require any function or method that returns a Promise to be marked async',
    zh: '要求任何返回Promise的函数或方法都被标记为异步',
  },
  '@typescript-eslint/require-array-sort-compare': {
    en: 'Require Array#sort calls to always provide a compareFunction',
    zh: '要求Array#sort调用总是提供一个compareFunction',
  },
  '@typescript-eslint/restrict-plus-operands': {
    en: 'Require both operands of addition to have type number or string',
    zh: '要求加法的两个操作数都具有数字或字符串类型',
  },
  '@typescript-eslint/restrict-template-expressions': {
    en: 'Enforce template literal expressions to be of string type',
    zh: '强制执行模板字面表达式为字符串类型',
  },
  '@typescript-eslint/sort-type-union-intersection-members': {
    en: 'Enforce members of a type union/intersection to be sorted alphabetically',
    zh: '强制要求类型联盟/交叉的成员按字母顺序排序',
  },
  '@typescript-eslint/strict-boolean-expressions': {
    en: 'Disallow certain types in boolean expressions',
    zh: '在布尔表达式中不允许某些类型',
  },
  '@typescript-eslint/switch-exhaustiveness-check': {
    en: 'Require switch-case statements to be exhaustive with union type',
    zh: '要求switch-case语句用union类型穷举',
  },
  '@typescript-eslint/triple-slash-reference': {
    en: 'Disallow certain triple slash directives in favor of ES6-style import declarations',
    zh: '不允许某些三斜线指令，而采用ES6风格的导入声明',
  },
  '@typescript-eslint/type-annotation-spacing': {
    en: 'Require consistent spacing around type annotations',
    zh: '要求字体注释周围的间距一致',
  },
  '@typescript-eslint/typedef': {
    en: 'Require type annotations in certain places',
    zh: '要求在某些地方进行类型注释',
  },
  '@typescript-eslint/unbound-method': {
    en: 'Enforce unbound methods are called with their expected scope',
    zh: '强制非绑定方法以其预期范围被调用',
  },
  '@typescript-eslint/unified-signatures': {
    en: 'Disallow two overloads that could be unified into one with a union or an optional/rest parameter',
    zh: '不允许两个可以用联合或可选/休息参数统一为一个的重载',
  },
  '@typescript-eslint/brace-style': {
    en: 'Enforce consistent brace style for blocks',
    zh: '为块执行一致的括号样式',
  },
  '@typescript-eslint/comma-dangle': {
    en: 'Require or disallow trailing commas',
    zh: '要求或不允许使用尾部逗号',
  },
  '@typescript-eslint/comma-spacing': {
    en: 'Enforce consistent spacing before and after commas',
    zh: '执行统一的逗号前后的间距',
  },
  '@typescript-eslint/default-param-last': {
    en: 'Enforce default parameters to be last',
    zh: '强制执行默认参数为最后一个',
  },
  '@typescript-eslint/dot-notation': {
    en: 'Enforce dot notation whenever possible',
    zh: '尽可能地执行点符号',
  },
  '@typescript-eslint/func-call-spacing': {
    en: 'Require or disallow spacing between function identifiers and their invocations',
    zh: '要求或不允许在函数标识符和其调用之间有间隔',
  },
  '@typescript-eslint/indent': {
    en: 'Enforce consistent indentation',
    zh: '强制执行一致的缩进',
  },
  '@typescript-eslint/init-declarations': {
    en: 'Require or disallow initialization in variable declarations',
    zh: '要求或不允许在变量声明中进行初始化',
  },
  '@typescript-eslint/keyword-spacing': {
    en: 'Enforce consistent spacing before and after keywords',
    zh: '强制执行关键词前后一致的间距',
  },
  '@typescript-eslint/lines-between-class-members': {
    en: 'Require or disallow an empty line between class members',
    zh: '要求或不允许在类成员之间出现空行',
  },
  '@typescript-eslint/no-array-constructor': {
    en: 'Disallow generic Array constructors',
    zh: '不允许通用阵列构造器',
  },
  '@typescript-eslint/no-dupe-class-members': {
    en: 'Disallow duplicate class members',
    zh: '不允许重复的类成员',
  },
  '@typescript-eslint/no-duplicate-imports': {
    en: 'Disallow duplicate imports',
    zh: '不允许重复进口',
  },
  '@typescript-eslint/no-empty-function': {
    en: 'Disallow empty functions',
    zh: '不允许空函数',
  },
  '@typescript-eslint/no-extra-parens': {
    en: 'Disallow unnecessary parentheses',
    zh: '不允许有不必要的括号',
  },
  '@typescript-eslint/no-extra-semi': {
    en: 'Disallow unnecessary semicolons',
    zh: '不允许不必要的分号',
  },
  '@typescript-eslint/no-implied-eval': {
    en: 'Disallow the use of eval()-like methods',
    zh: '不允许使用类似eval()的方法',
  },
  '@typescript-eslint/no-invalid-this': {
    en: 'Disallow this keywords outside of classes or class-like objects',
    zh: '禁止在类或类似类的对象之外使用这个关键词',
  },
  '@typescript-eslint/no-loop-func': {
    en: 'Disallow function declarations that contain unsafe references inside loop statements',
    zh: '不允许在循环语句中包含不安全引用的函数声明',
  },
  '@typescript-eslint/no-loss-of-precision': {
    en: 'Disallow literal numbers that lose precision',
    zh: '不允许失去精度的字面数字',
  },
  '@typescript-eslint/no-magic-numbers': {
    en: 'Disallow magic numbers',
    zh: '不允许神奇的数字',
  },
  '@typescript-eslint/no-redeclare': {
    en: 'Disallow variable redeclaration',
    zh: '不允许变量重新声明',
  },
  '@typescript-eslint/no-restricted-imports': {
    en: 'Disallow specified modules when loaded by import',
    zh: '通过导入加载时不允许指定的模块',
  },
  '@typescript-eslint/no-shadow': {
    en: 'Disallow variable declarations from shadowing variables declared in the outer scope',
    zh: '不允许变量声明影射在外层作用域中声明的变量',
  },
  '@typescript-eslint/no-throw-literal': {
    en: 'Disallow throwing literals as exceptions',
    zh: '不允许将字词作为异常抛出',
  },
  '@typescript-eslint/no-unused-expressions': {
    en: 'Expected an assignment or function call and instead saw an expression',
    zh: '期望赋值或函数调用，而不是表达式',
  },
  '@typescript-eslint/no-unused-vars': {
    en: 'Disallow unused variables',
    zh: '不允许未使用的变量',
  },
  '@typescript-eslint/no-use-before-define': {
    en: 'Disallow the use of variables before they are defined',
    zh: '在变量被定义之前，不允许使用这些变量',
  },
  '@typescript-eslint/no-useless-constructor': {
    en: 'Disallow unnecessary constructors',
    zh: '不允许不必要的构造函数',
  },
  '@typescript-eslint/object-curly-spacing': {
    en: 'Enforce consistent spacing inside braces',
    zh: '执行大括号内的一致间距',
  },
  '@typescript-eslint/padding-line-between-statements': {
    en: 'Require or disallow padding lines between statements',
    zh: '要求或不允许在语句之间有填充线',
  },
  '@typescript-eslint/quotes': {
    en: 'Enforce the consistent use of either backticks, double, or single quotes',
    zh: '强制执行反斜线、双引号或单引号的一致使用',
  },
  '@typescript-eslint/require-await': {
    en: 'Disallow async functions which have no await expression',
    zh: '不允许没有等待表达式的异步函数',
  },
  '@typescript-eslint/return-await': {
    en: 'Enforce consistent returning of awaited values',
    zh: '强制执行等待值的一致返回',
  },
  '@typescript-eslint/semi': {
    en: 'Require or disallow semicolons instead of ASI',
    zh: '要求或不允许用分号代替ASI',
  },
  '@typescript-eslint/space-before-blocks': {
    en: 'Enforce consistent spacing before blocks',
    zh: '在区块前执行一致的间隔',
  },
  '@typescript-eslint/space-before-function-paren': {
    en: 'Enforce consistent spacing before function parenthesis',
    zh: '在函数括号前执行一致的间距',
  },
  '@typescript-eslint/space-infix-ops': {
    en: 'Require spacing around infix operators',
    zh: '要求在infix运算符周围有间距',
  },
}
