import {isUndefined} from 'lodash';

export default function getValueByNs(obj, namespace, defaults) {
  if (!obj) {
    return defaults; // by default "defaults" is undefined
  }
  if (!namespace) {
    return obj;
  }
  try {
    var keys = namespace.split('.'); // Currently doesn't support brackets. Use dot notation for array.
    for (var i = 0, l = keys.length - 1; (i <= l) && obj; i++) {
      obj = obj[keys[i]];
    }
  } catch (e) {
    obj = void 0;
  }
  if (isUndefined(obj)) {
    //Logger.debug('Possibly malformed data object consumed in namespace:', namespace, '. returning fallback:', defaults);
    return defaults;
  }
  return obj;
}
