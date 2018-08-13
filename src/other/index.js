'use strict'

const Biglet = require('biglet')

const Model = require('./lib/model')
const fetch = require('./lib/fetch')

const Other1 = require('../other1')
const Other2 = require('../other2')

class OtherPagelet extends Biglet {
  constructor (owner) {
    super(owner)

    this.root = __dirname
    this.tpl = './index.nj'
    this.name = 'bpmodule-other'
    this.domid = 'bpmodule-other'

    this.addChild(Other1)
    this.addChild(Other2)
  }
  otherGetData () {
    const state = this.owner.getState()
    console.log('在other中获取redux state', state)
  }
  async fetch () {
    this.sub(this.otherGetData)
    // use owner dataStore mainData
    const mainData = this.owner.dataStore.mainData
    const data = await fetch()
    const model = new Model(mainData, data)
    this.data = model.toJSON()
  }
}

module.exports = OtherPagelet
