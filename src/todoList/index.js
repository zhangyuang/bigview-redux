'use strict'

const Biglet = require('biglet')
const actions = require('./lib/actions')
const store = require('./lib/store')

class TodoListPagelet extends Biglet {
  constructor () {
    super()
    this.store = store()
    this.unsubscribe = this.store.subscribe(this.changeTodoList.bind(this))
    this.root = __dirname
    this.tpl = './index.nj'
    this.name = 'todolist'
    this.domid = 'todolist'
  }

  changeTodoList () {
    const state = this.store.getState()
    this.data = {
      todoList: state.todos
    }
  }
  async fetch () {
    // use owner dataStore mainData
    const text = '测试数据1'
    this.store.dispatch(actions.addTodo(text))

    this.unsubscribe()
  }
}

module.exports = TodoListPagelet
