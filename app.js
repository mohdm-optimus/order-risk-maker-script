const requestPromise = require('request-promise');
const fs = require('fs');
const Promise = require('bluebird');
const download = require('image-downloader');

order_ids = [529981309043, 526663909491, 525894418547, 525884751987];



Promise.mapSeries(order_ids, (order_id) => {
  let options = {
    headers: {
      'content-type': 'application/json'
    },
    method: 'POST',
    uri: 'https://5acbca5d1770d57f0c2e87f8a709f772:11b1f89265a7d242c73608f2fa2caf6b@optimus-integration-demo.myshopify.com' +
      '/admin/orders/' + order_id +
      '/risks.json',
    json: {
      risk: {
        message: "After further review, this is a legitimate order",
        recommendation: "accept",
        score: 0.0,
        source: "External",
        cause_cancel: false,
        display: true
      }
    }
  };
  return requestPromise(options).then((result) => {
    console.log(result);
    return result;
  }).catch((error)=>{
    console.error(error);
    return error;
  });
}).then((result) => {
  console.log(result);
}).catch((error) => {
  console.error(error);
});

