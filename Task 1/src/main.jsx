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

function aggregate (src) {
  return _.map(_.reduce(src, function (result, value) {
    result[value.requestId] = result[value.requestId] || [];
    result[value.requestId].push(value);
    return result;
  }, {}), _.values);
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
_.isEqual(aggregate(data), transformedData) === true;

// Additional Notes:
//  - Declarative is preferred over Imperative
//  - Feel free to use any lodash method, but bonus if implemented using no external libraries
//  - ES6 syntax is allowed.