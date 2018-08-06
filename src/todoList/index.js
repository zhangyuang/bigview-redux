'use strict'

const Biglet = require('biglet')
const myRedux = require('../myRedux')

class TodoListPagelet extends Biglet {
  constructor () {
    super()
    const store = myRedux.store
    this.unsubscribe = store.subscribe(this.changeTodoList.bind(this))
    this.root = __dirname
    this.tpl = './index.nj'
    this.name = 'todolist'
    this.domid = 'todolist'
  }

  changeTodoList () {
    const store = myRedux.store
    const state = store.getState()
    this.data = {
      todoList: state.todos
    }
  }
  async fetch () {
    // use owner dataStore mainData
    const store = myRedux.store
    const actions = myRedux.actions
    const text = '测试数据1'
    store.dispatch(actions.addTodo(text))

    this.unsubscribe()
  }
}

module.exports = TodoListPagelet
