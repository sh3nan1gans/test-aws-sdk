interface Event {
  type: string;
  defaultPrevented?: boolean;
}

export interface EventTargetInterface {
  listeners: Record<string, Array<(e: Event) => void>>;
  addEventListener: (type: string, callback: () => void) => void;
  removeEventListener: (type: string, callback: () => void) => void;
  dispatchEvent: (e: Event) => boolean;
}

interface EventTargetConstructor {
  new (): EventTargetInterface;
}

const EventTarget = (function (this: EventTargetInterface) {
  this.listeners = {};
} as unknown) as EventTargetConstructor;

EventTarget.prototype.listeners = null;
EventTarget.prototype.addEventListener = function (type: string, callback: () => void) {
  if (!(type in this.listeners)) {
    this.listeners[type] = [];
  }
  this.listeners[type].push(callback);
};

EventTarget.prototype.removeEventListener = function (this: EventTargetInterface, type: string, callback: () => void) {
  if (!(type in this.listeners)) {
    return;
  }
  const stack = this.listeners[type];
  for (let i = 0, l = stack.length; i < l; i++) {
    if (stack[i] === callback) {
      stack.splice(i, 1);
      return;
    }
  }
};

EventTarget.prototype.dispatchEvent = function (this: EventTargetInterface, event: Event) {
  if (!(event.type in this.listeners)) {
    return true;
  }
  const stack = this.listeners[event.type].slice();
  for (let i = 0, l = stack.length; i < l; i++) {
    stack[i].call(this, event);
  }
  return !event.defaultPrevented;
};

export default EventTarget;
