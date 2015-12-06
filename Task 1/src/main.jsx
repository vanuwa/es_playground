/**
 * Created by vanuwa on 12/6/15.
 */

import _ from 'lodash';

// You are given a set of data in the following format:
const data = [
  {requestId: 1, data: 'a'},
  {requestId: 1, data: 'b'},
  {requestId: 1, data: 'c'},
  {requestId: 2, data: 'a'},
  {requestId: 2, data: 'b'}
];

function aggregate_lodash (src) {
  return _.map(_.reduce(src, function (result, value) {
    result[value.requestId] = result[value.requestId] || [];
    result[value.requestId].push(value);

    return result;
  }, {}), _.values);
}

function aggregate (src) {
  let cache = {};
  let dist = [];

  src.forEach(item => {
    let key = item.requestId;

    cache[key] = cache[key] || [];
    cache[key].push(item);
  });

  for (let key in cache) {
    dist.push(cache[key]);
  }

  return dist;
}

// ... write the function `aggregate` which will pass the following test:
const transformedData = [
  [
    {requestId: 1, data: 'a'},
    {requestId: 1, data: 'b'},
    {requestId: 1, data: 'c'}
  ],
  [
    {requestId: 2, data: 'a'},
    {requestId: 2, data: 'b'}
  ]
];

// Note: https://lodash.com/docs#isEqual
console.log("aggregate", aggregate(data));
_.isEqual(aggregate(data), transformedData) === true;
console.log('Result', _.isEqual(aggregate(data), transformedData));

// Additional Notes:
//  - Declarative is preferred over Imperative
//  - Feel free to use any lodash method, but bonus if implemented using no external libraries
//  - ES6 syntax is allowed.