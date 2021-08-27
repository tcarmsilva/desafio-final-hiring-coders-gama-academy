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

let modify = function () {
  var params = {
    TableName: 'prospects-clients',
    Key: { email: 'example-1@gmail.com' },
    UpdateExpression: 'set updated_by = :byUser, is_deleted = :boolValue',
    ExpressionAttributeValues: {
      ':byUser': 'updateUser',
      ':boolValue': true,
    },
    ReturnValues: 'UPDATED_NEW',
  };
  //video 40;32 brasileiro descomplicando
  docClient.update(params, function (err, data) {
    if (err) {
      console.log('users::update::error - ' + JSON.stringify(err, null, 2));
    } else {
      console.log('users::update::success');
    }
  });
};

modify();
