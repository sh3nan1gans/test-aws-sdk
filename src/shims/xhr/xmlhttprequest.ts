import XMLHttpRequestEventTarget, { XMLHttpRequestEventTargetInterface } from './xmlhttprequesteventtarget';
import __extends from '../../util/extends';

enum HttpMethods {
  GET = 'GET',
  POST = 'POST',
  PUT = 'PUT',
  DELETE = 'DELETE',
}

enum ReadyState {
  UNSENT,
  OPENED,
  HEADERS_RECEIVED,
  LOADING,
  DONE,
}

const methodMap = {
  [HttpMethods.GET]: 'get',
  [HttpMethods.PUT]: 'put',
  [HttpMethods.POST]: 'post',
  [HttpMethods.DELETE]: 'delete',
};

interface XMLHttpRequestInterface extends XMLHttpRequestEventTargetInterface {
  options: RequestsOptions;
  method: HttpMethods;
  async: boolean;
  readyState: ReadyState;
  status: number;
  statusText: string;
  responseText: string;
  UNSENT: ReadyState.UNSENT;
  OPENED: ReadyState.OPENED;
  HEADERS_RECEIVED: ReadyState.HEADERS_RECEIVED;
  LOADING: ReadyState.LOADING;
  DONE: ReadyState.DONE;
  abort: () => void;
  getAllResponseHeaders: () => void;
  getResponseHeader: (header: string) => void;
  open: () => void;
  overrideMimeType: () => void;
  send: (body?: string | Record<string, unknown>) => void | string;
  setRequestHeader: (header: string, value: string) => void;
  upload: XMLHttpRequestEventTargetInterface;
}

interface XMLHttpRequestConstructor {
  new (): XMLHttpRequestInterface;
}

const XMLHttpRequest = (function (XMLHttpRequestEventTarget) {
  const XMLHttpRequest = (function (this: XMLHttpRequestInterface) {
    XMLHttpRequestEventTarget.call(this);

    this.options = { uri: '' };
    this.method = HttpMethods.GET;
    this.async = true;
    this.readyState = ReadyState.UNSENT;
    this.status = 0;
    this.statusText = '';
    this.UNSENT = ReadyState.UNSENT;
    this.OPENED = ReadyState.OPENED;
    this.HEADERS_RECEIVED = ReadyState.HEADERS_RECEIVED;
    this.LOADING = ReadyState.LOADING;
    this.DONE = ReadyState.DONE;
  } as unknown) as XMLHttpRequestConstructor;
  __extends(XMLHttpRequest, XMLHttpRequestEventTarget);

  XMLHttpRequest.prototype.abort = function () {
    throw new Error('XMLHttpRequest.abort not implemented');
  };
  XMLHttpRequest.prototype.getAllResponseHeaders = function () {
    return '';
  };
  XMLHttpRequest.prototype.getResponseHeader = (header: string) => {
    return '';
  };
  XMLHttpRequest.prototype.open = function (
    method: HttpMethods,
    url: string,
    async = true, // todo: support async - if true, use events to notify of completion, if false/null, .send must return response synchronously
    user?: string,
    pass?: string,
  ) {
    this.readyState = ReadyState.OPENED;
    this.status = 0;
    this.statusText = '';
    this.options.uri = url;
    this.method = method;
    this.async = async;
    if (user && pass) {
      this.options.auth = {
        user,
        pass,
      };
    }
  };
  XMLHttpRequest.prototype.overrideMimeType = function () {
    throw new Error('XMLHttpRequest.overrideMimeType not implemented');
  };
  XMLHttpRequest.prototype.send = function (
    this: XMLHttpRequestInterface,
    body?: string | Record<string, unknown>,
  ): void | string {
    switch (this.method) {
      case HttpMethods.GET:
      case HttpMethods.DELETE:
        this.options.qs = body;
        break;
      case HttpMethods.POST:
      case HttpMethods.PUT:
        this.options.body = body;
        break;
    }

    const reqObject = global.Requests();
    const method = methodMap[this.method] as keyof RequestsObject;
    reqObject[method](this.options, (err, data) => {
      if (err) {
        this.readyState = ReadyState.DONE;
        this.status = 400; // since the Requests object doesn't return status or response headers, status will be hardcoded
        this.statusText = '';
        this.responseText = err;
        this.dispatchEvent({ type: 'error' });
        return;
      }
      this.readyState = ReadyState.DONE;
      this.status = 200;
      this.statusText = 'OK';
      this.responseText = data as string;
      this.dispatchEvent({ type: 'readystatechange' });
    });
  };
  XMLHttpRequest.prototype.setRequestHeader = function (header: string, value: string) {
    if (!this.options.headers) {
      this.options.headers = {};
    }
    this.options.headers[header] = value;
  };
  XMLHttpRequest.prototype.upload = new XMLHttpRequestEventTarget();
  return XMLHttpRequest;
})(XMLHttpRequestEventTarget);

export default XMLHttpRequest;

interface RequestsOptions {
  uri: string;
  qs?: Record<string, string>;
  body?: Record<string, unknown>;
  form?: boolean;
  headers?: Record<string, string>;
  followRedirect?: number;
  timeout?: number;
  auth?: { user: string; pass: string };
  strictSSL?: boolean;
  getProxyUrl?: boolean;
  isXML?: boolean;
  isSoap?: boolean;
  full?: boolean;
}

type RequestsMethod<T = unknown> = (o: RequestsOptions, cb: (err: string | undefined, data: T) => void) => void;

interface RequestsObject {
  get: RequestsMethod;
  put: RequestsMethod;
  post: RequestsMethod;
  delete: RequestsMethod;
}

declare global {
  // eslint-disable-next-line @typescript-eslint/no-namespace
  namespace NodeJS {
    interface Global {
      Requests: () => RequestsObject;
    }
  }
}
