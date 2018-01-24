var Mock = require('mockjs')
var userIdData = Mock.mock({
    'user_list|5-10': [{
        'user_id|10000-99999': 1
    }]
})

module.exports = userIdData
