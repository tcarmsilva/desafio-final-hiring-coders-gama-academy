var AWS = require('aws-sdk');

// console.log('Region: ', AWS.config.region);

let awsConfig = {
  region: 'sa-east-1',
  endpoint: 'dynamodb.sa-east-1.amazonaws.com',
  accessKeyId: 'AKIA47HDITLFPJ63RFLQ',
  secretAccessKey: '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',
};

AWS.config.update(awsConfig);

let docClient = new AWS.DynamoDB.DocumentClient();

let fetchOneByKey = function () {
  var params = {
    TableName: 'prospects-clients',
    Key: {
      email: 'example-1@gmail.com',
    },
  };

  docClient.get(params, function (err, data) {
    if (err) {
      console.log(
        'users::fetchOneByKey::error - ' + JSON.stringify(err, null, 2)
      );
    } else {
      console.log('users::fetchOneByKey::success');
      console.log(data);
    }
  });
};

fetchOneByKey();
