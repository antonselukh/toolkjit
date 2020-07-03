import {isUndefined, each, isArray} from 'lodash';

export default function findDeep(collection, nodeParamName, attributes) {
  function match(value) {
    for (var propertyName in attributes) {
      if(isUndefined(value)) {
        if (attributes[propertyName] !== value[propertyName]) {
          return false;
        }
      }
    }

    return true;
  }

  function traverse(items) {
    var foundItem;

    each(items, function (item) {
      if (foundItem) {
        return false;
      }

      if (match(item)) {
        foundItem = item;
      } else if (isArray(item[nodeParamName])) {
        foundItem = traverse(item[nodeParamName]);
      }
    });

    return foundItem;
  }

  return traverse(collection);
}
