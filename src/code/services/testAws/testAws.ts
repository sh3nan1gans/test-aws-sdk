import AWS from 'aws-sdk';
import {
  access_key_id,
  secret_access_key,
  region,
  kinesis_stream_name,
  bucket_name,
} from '../../../util/aws-credentials';
import '../../../util/polyfills/domparser';
import '../../../util/polyfills/xmlhttprequest';

AWS.config.update({ region });
const credentials = new AWS.Credentials(access_key_id, secret_access_key);

function testAws(_: CbServer.BasicReq, resp: CbServer.Resp) {
  myAws.SNS.publish().then(
    (data) => {
      resp.success(data);
    },
    (err) => {
      resp.error(err);
    },
  );
}

const myAws = {
  SNS: {
    createTopic: function () {
      return new Promise((res, rej) => {
        const sns = new AWS.SNS({
          credentials,
        });
        const params = {
          Name: 'testTopic',
        };
        sns.createTopic(params, function (err, data) {
          if (err) {
            rej(err);
          } else {
            res(data);
          }
        });
      });
    },
    deleteTopic: function () {
      return new Promise((res, rej) => {
        const sns = new AWS.SNS({
          credentials,
        });
        const params = {
          TopicArn: 'arn:aws:sns:us-east-2:750868284189:testTopic',
        };
        sns.deleteTopic(params, function (err, data) {
          if (err) {
            rej(err);
          } else {
            res(data);
          }
        });
      });
    },
    publish: function () {
      return new Promise((res, rej) => {
        const sns = new AWS.SNS({
          credentials,
        });
        const params = {
          TopicArn: 'arn:aws:sns:us-east-2:750868284189:testTopic',
          Message: 'hello!',
        };
        sns.publish(params, function (err, data) {
          if (err) {
            rej(err);
          } else {
            res(data);
          }
        });
      });
    },
  },
  SQS: {
    sendMessage: function () {
      return new Promise((res, rej) => {
        const sqs = new AWS.SQS({
          credentials,
        });
        const params = {
          QueueUrl: 'https://sqs.us-east-1.amazonaws.com/750868284189/testQueue',
          MessageBody: 'message bodyy',
        };
        sqs.sendMessage(params, function (err, data) {
          if (err) {
            rej(err);
          } else {
            res(data);
          }
        });
      });
    },
    sendMessageBatch: function () {
      return new Promise((res, rej) => {
        const sqs = new AWS.SQS({
          credentials,
        });
        const params = {
          QueueUrl: 'https://sqs.us-east-1.amazonaws.com/750868284189/testQueue',
          Entries: [
            { Id: 'one', MessageBody: 'body for one' },
            { Id: 'two', MessageBody: 'body for two' },
          ],
        };
        sqs.sendMessageBatch(params, function (err, data) {
          if (err) {
            rej(err);
          } else {
            res(data);
          }
        });
      });
    },
  },
  Lambda: {
    invoke: function () {
      return new Promise((res, rej) => {
        const lamb = new AWS.Lambda({
          credentials,
        });
        const params = {
          FunctionName: 'testFunction',
        };
        lamb.invoke(params, function (err, data) {
          if (err) {
            rej(err);
          } else {
            res(data);
          }
        });
      });
    },
  },
  S3: {
    getObject: function () {
      return new Promise((res, rej) => {
        const s3 = new AWS.S3({
          credentials,
        });
        const params = {
          Bucket: bucket_name,
          Key: 'cors.json',
        };
        s3.getObject(params, function (err, data) {
          if (err) {
            rej(err);
          } else {
            res(data);
          }
        });
      });
    },
    putObject: function () {
      return new Promise((res, rej) => {
        const s3 = new AWS.S3({
          credentials,
        });
        const params = {
          Body: 'test body',
          Bucket: bucket_name,
          Key: 'testobject',
        };
        s3.putObject(params, function (err, data) {
          if (err) {
            rej(err);
          } else {
            res(data);
          }
        });
      });
    },
    upload: function () {
      return new Promise((res, rej) => {
        const s3 = new AWS.S3({
          credentials,
        });
        const params = { Bucket: bucket_name, Key: 'testupload', Body: 'test upload body' };
        s3.upload(params, function (err, data) {
          if (err) {
            rej(err);
          } else {
            res(data);
          }
        });
      });
    },
  },
  Kinesis: {
    putRecord: function () {
      return new Promise((res, rej) => {
        const kinesis = new AWS.Kinesis({
          credentials,
          region,
        });

        const params = {
          Data: 'some data',
          // Data:
          //   Buffer.from("...") ||
          //   "STRING_VALUE" /* required */ /* Strings will be Base-64 encoded on your behalf */,
          PartitionKey: 'Partition_STRING_VALUE' /* required */,
          StreamName: kinesis_stream_name /* required */,
          // ExplicitHashKey: 'ExplicitHashKey_STRING_VALUE',
          // SequenceNumberForOrdering: 'SequenceNumberForOrdering_STRING_VALUE',
        };

        kinesis.putRecord(params, function (err, data) {
          if (err) {
            rej(err);
          } else {
            res(data);
          }
        });
      });
    },
    putRecords: function () {
      return new Promise((res, rej) => {
        const kinesis = new AWS.Kinesis({
          credentials,
          region,
        });
        const params = {
          Records: [
            /* required */
            {
              Data: 'someData' /* required */ /* Strings will be Base-64 encoded on your behalf */,
              PartitionKey: 'STRING_VALUE' /* required */,
            },
            /* more items */
          ],
          StreamName: kinesis_stream_name /* required */,
        };
        kinesis.putRecords(params, function (err, data) {
          if (err) {
            rej(err);
          } else {
            res(data);
          }
        });
      });
    },
  },
};

global.testAws = testAws; // place our service on global so that our code engine can call it

declare global {
  // eslint-disable-next-line @typescript-eslint/no-namespace
  namespace NodeJS {
    interface Global {
      testAws: typeof testAws;
    }
  }
}
