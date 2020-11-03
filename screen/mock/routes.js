const Mock = require('mockjs')
const MockList = require('./list')

// method path
module.exports = {
  'get /list': Mock.mock(MockList),
}
