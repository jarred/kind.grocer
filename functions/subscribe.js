var campaignMonitor = require('campaignmonitor')

var cmApi = campaignMonitor({
  apiKey: '047998d3b4cb256d632dc70be936e3a811773eba764bdfe1',
})

exports.handler = function(event, context, callback) {
  cmApi.addSubscriber('92253f9570b9a118b42a5671a0d27007', {
    EmailAddress: 'jarred@output.nz',
  })
  callback(null, {
    statusCode: 200,
    body: 'Hello, World',
  })
}
