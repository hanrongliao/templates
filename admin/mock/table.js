const Mock = require('mockjs')

const data = Mock.mock({
  'items|5': [{
    id: '@id',
    name: '@cname',
    'status|1': [0, 1, 2],
    displayTime: '@datetime',
  }]
})

module.exports = [
  {
    url: '/api/table/list',
    type: 'get',
    response: config => {
      const items = data.items
      return {
        code: 200,
        data: {
          total: items.length,
          items: items
        }
      }
    }
  }
]
