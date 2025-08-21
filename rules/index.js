const eslintRules = require('./base.js')
const eslintVueRules = require('./vue.js')
const eslintReactRules = require('./react.js')
const eslintReactRefreshRules = require('./react-refresh.js')
const eslintTypescriptRules = require('./ts.js')

module.exports = {
  ...eslintRules,
  ...eslintVueRules,
  ...eslintReactRules,
  ...eslintReactRefreshRules,
  ...eslintTypescriptRules
}
