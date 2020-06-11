import AWS from 'aws-sdk';

global.AWS = AWS;

declare global {
  // eslint-disable-next-line @typescript-eslint/no-namespace
  namespace NodeJS {
    interface Global {
      AWS: typeof AWS;
    }
  }
}
