'use strict'

const BigView = require('bigview')

const layoutPagelet = require('./layout')
const mainPagelet = require('./main')
const otherPagelet = require('./other')
const TodoListPagelet = require('./todoList')

function createBigView (ctx) {
  return new BigView(ctx)
}
async function index (ctx) {
  const bigView = new BigView(ctx)
  // const bigView = createBigView(ctx)
  // set layout
  bigView.layout = layoutPagelet

  // set main
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
