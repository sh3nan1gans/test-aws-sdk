import MyEventTarget, { EventTargetInterface } from './eventtarget';
import __extends from '../../util/extends';

export interface XMLHttpRequestEventTargetInterface extends EventTargetInterface {
  onabort: () => void;
  onerror: () => void;
  onload: () => void;
  onloadstart: () => void;
  onprogress: () => void;
}

interface XMLHttpRequestEventTargetConstructor {
  new (): XMLHttpRequestEventTargetInterface & EventTargetInterface;
}

const XMLHttpRequestEventTarget = (function (MyEventTarget) {
  const XMLHttpRequestEventTarget = (function (this: XMLHttpRequestEventTargetInterface) {
    MyEventTarget.call(this);
  } as unknown) as XMLHttpRequestEventTargetConstructor;
  __extends(XMLHttpRequestEventTarget, MyEventTarget);

  XMLHttpRequestEventTarget.prototype.onabort = (): void => {
    return;
  };
  XMLHttpRequestEventTarget.prototype.onerror = (): void => {
    return;
  };
  XMLHttpRequestEventTarget.prototype.onload = (): void => {
    return;
  };
  XMLHttpRequestEventTarget.prototype.onloadstart = (): void => {
    return;
  };
  XMLHttpRequestEventTarget.prototype.onprogress = (): void => {
    return;
  };

  return XMLHttpRequestEventTarget;
})(MyEventTarget);

export default XMLHttpRequestEventTarget;
