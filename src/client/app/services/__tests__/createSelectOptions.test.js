import React from 'react';

let assert = require('chai').assert;
import { createSelectOptions } from '../';

let mock = el => (
  <option key={el.toString()} value={el}>
    {el}
  </option>
);

let arg1 = ['one', 'two', 'three'];
let arg2 = { one: null, two: null, three: null };
let result1 = createSelectOptions(arg1);
let result2 = createSelectOptions(arg2);

describe('createSelectOptions', () => {
  it('returns an array with an element for each elem in arg', () => {
    assert.equal(
      result1.length,
      arg1.length,
      `returns an array with same length as arg array`
    );
    assert.equal(
      result2.length,
      3,
      `returns an array with same length as array from arg object`
    );
  });
  it('returns a matching array when arg has multiple elements', () => {
    assert.deepEqual(
      result1,
      [mock('one'), mock('two'), mock('three')],
      `returns a matching array when arg has multiple elements`
    );
  });
});
