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

let save = function () {
  var input = {
    email: 'umemailqualquer@gmail.com',
    telephone: '3374-9999',
    fullName: 'chimbinha da alegria',
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
