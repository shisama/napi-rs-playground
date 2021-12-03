const napi = require('@shisama/napi-sample');
const { equal } = require('assert');

equal(napi.fibonacci(10), 55);