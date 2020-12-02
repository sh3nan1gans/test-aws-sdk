# aws-sdk npm in ClearBlade

This repository demonstrates how to use a npm library like `aws-sdk` in the ClearBlade code engine. [cb-dev-kit](https://github.com/clearblade/cb-dev-kit) is used to transpile and bundle the JS for usage.

### Using the library

The example code service in `code/libraries/awsExample` includes `aws` as a dependency and demonstrates how to interact with the aws-sdk. The transpiled version of the aws-sdk is located in `code/libraries/aws`. Example:

```
function awsExample(req, resp) {
  AWS.config.update({ region: 'us-east-2' });
  const credentials = new AWS.Credentials("your_access_key_id", "your_secret_access_key");
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
```
