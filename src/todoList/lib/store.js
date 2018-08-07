const redux = require('redux')
const todoApp = require('./reducer')
const createStore = redux.createStore
// 导出一个创建store的函数保证每次客户端的连接都是单独的，否则会造成请求污染
const store = function () {
  return createStore(todoApp)
}

module.exports = store
