const redux = require('redux')
const todoApp = require('./reducer')
const createStore = redux.createStore
const store = createStore(todoApp)

module.exports = store
