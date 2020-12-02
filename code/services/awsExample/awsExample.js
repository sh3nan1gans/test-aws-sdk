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

function awsExample(req, resp) {
  AWS.config.update({ region: 'us-east-2' });
  const credentials = new AWS.Credentials('your_access_key_id', 'your_secret_access_key');
  const sns = new AWS.SNS({
    credentials,
  });
  const params = {
    Name: 'your_topic',
  };
  sns.createTopic(params, function (err, data) {
    if (err) {
      resp.error(err);
    } else {
      resp.success(data);
    }
  });
}
