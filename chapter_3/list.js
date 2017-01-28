var arrayToList = function(array) {
  var list = null;
  for(var i = array.length - 1; i > 0; i--) {
    list = { value: array[i], rest: list }
  }
  return list;
};

function listToArray(list) {
  var array = [];
  for (var node = list; node; node = node.rest) {
    array.push(node.value);
  }
  return array;
}

function prepend(e, list) {
  return newList = { value: e, rest: list};
}

function nth(list, n) {
  if(!list) {
    return undefined;
  } else if(n === 0) {
    return list.value
  } else {
    return nth(list.rest, n - 1);
  }
}

function nth2(list, n) {
  var i = 0;
  var value = 0;
  for (var node = list; node; node = node.rest) {
    if(i == n) {
      return node.value;
    }
    i++;
  }
}

function nth2(list, n) {
  var i = 0;
  for (var node = list; node; node = node.rest) {
    console.log(node);
    if(i === n) {
      list.value;
    }
    i++;
  }
}

var list = {
  value: 1,
  rest: {
    value: 2,
    rest: {
      value: 3,
      rest: null
    }
  }
}

var i = arrayToList([1,2,3]);
console.log(prepend(2, list));
