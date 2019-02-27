import isUndefined from '../isUndefined';
import expandoStore from '../_internal/_expandoStore';
import forEach from '../forEach';
import remove from '../array/remove';

const removeEventListenerFn = window.removeEventListener ?
  (element, type, fn) => {
    element.removeEventListener(type, fn, false);
  } :
  (element, type, fn) => {
    element.detachEvent(`on${type}`, fn);
  };

export default function (element, types, fn) {
  let events = expandoStore(element, 'events');
  let handle = expandoStore(element, 'handle');

  if (!handle) {
    return; // 没有注册事件
  }
  if (isUndefined(types)) {
    forEach(events, (eventHandler, type) => {
      removeEventListenerFn(element, type, eventHandler);
      delete events[type];
    });
  } else {
    forEach(types.split(' '), (type) => {
      if (isUndefined(fn)) {
        removeEventListenerFn(element, type, events[type]);
        delete events[type];
      } else {
        remove(events[type], fn);
      }
    });
  }
}
