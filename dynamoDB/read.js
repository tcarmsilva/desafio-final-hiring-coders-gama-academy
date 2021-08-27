var AWS = require('aws-sdk');

// console.log('Region: ', AWS.config.region);

let awsConfig = {
  region: 'sa-east-1',
  endpoint: 'dynamodb.sa-east-1.amazonaws.com',
  accessKeyId,
  secretAccessKey,
};
AWS.config.update(awsConfig);

let docClient = new AWS.DynamoDB.DocumentClient();

let fetchOneByKey = function () {
  var params = {
    TableName: 'prospects-clients',
    Key: {
      email: 'example@gmail.com',
    },
  };
  //video 40;32 brasileiro descomplicando

  docClient.get(params, function (err, data) {
    if (err) {
      console.log(
        'users::fetchOneByKey::error - ' + JSON.stringify(err, null, 2)
      );
    } else {
      console.log('users::fetchOneByKey::success');
    }
  });
};

fetchOneByKey();
