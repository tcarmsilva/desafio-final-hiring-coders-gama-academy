var AWS = require('aws-sdk');

// console.log('Region: ', AWS.config.region);

let awsConfig = {
  region: 'sa-east-1',
  endpoint: 'dynamodb.sa-east-1.amazonaws.com',
  accessKeyId: ,
  secretAccessKey: ,
};
AWS.config.update(awsConfig);

let docClient = new AWS.DynamoDB.DocumentClient();

let save = function () {
  var input = {
    email: 'example-1@gmail.com',
    telephone: '3374-9800',
    fullName: 'Roberto Dias',
    created_on: new Date().toString(),
    clientType: 'prospect',
    // caso acesso usuário
    // updated_by: 'clientUser',
    updated_on: new Date().toString(),
    is_deleted: false,
  };
  var params = {
    TableName: 'prospects-clients',
    Item: input,
  };
  //video 40;32 brasileiro descomplicando
  docClient.put(params, function (err, data) {
    if (err) {
      console.log('users::save::error - ' + JSON.stringify(err, null, 2));
    } else {
      console.log('users::save::success');
    }
  });
};

save();
