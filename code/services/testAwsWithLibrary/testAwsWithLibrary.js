/**
 * Type: Micro Service
 * Description: A short-lived service which is expected to complete within a fixed period of time.
 * @param {CbServer.BasicReq} req
 * @param {string} req.systemKey
 * @param {string} req.systemSecret
 * @param {string} req.userEmail
 * @param {string} req.userid
 * @param {string} req.userToken
 * @param {boolean} req.isLogging
 * @param {[id: string]} req.params
 * @param {CbServer.Resp} resp
 */

const region = 'us-east-2';

function testAwsWithLibrary(req, resp) {
  AWS.config.update({ region });
  const credentials = new AWS.Credentials('<access_key_id>', '<secret_access_key>');
  const sns = new AWS.SNS({
    credentials: credentials,
  });
  const params = {
    TopicArn: 'arn:aws:sns:us-east-2:750868284189:testTopic',
    Message: 'hello!',
  };
  sns.publish(params, function (err, data) {
    if (err) {
      resp.error(err);
    } else {
      resp.success(data);
    }
  });
}
