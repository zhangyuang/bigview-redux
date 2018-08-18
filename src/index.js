'use strict'

const BigView = require('bigview')
const BigViewRedux = require('bigview-redux')
const layoutPagelet = require('./layout')
const mainPagelet = require('./main')
const otherPagelet = require('./other')
const TodoListPagelet = require('./todoList')

async function index (ctx) {
  const bigView = new BigView(ctx)
  bigView.install(BigViewRedux)
  // const bigView = createBigView(ctx)
  // set layout
  bigView.layout = layoutPagelet

  // set maind
  bigView.main = mainPagelet

  // set others
  bigView.add(otherPagelet)

  // set todolist
  bigView.add(TodoListPagelet)

  // you can custom bigView dataStore
  bigView.dataStore = {}

  // bigView.mode = 'pipeline'

  await bigView.start()
}

module.exports = index
