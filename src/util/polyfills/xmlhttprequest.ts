import XMLHttpRequest from '../../shims/xhr/xmlhttprequest';

global.XMLHttpRequest = XMLHttpRequest; // place XMLHttpRequest on global so that aws-sdk can use it

declare global {
  // eslint-disable-next-line @typescript-eslint/no-namespace
  namespace NodeJS {
    interface Global {
      XMLHttpRequest: typeof XMLHttpRequest;
    }
  }
}
