let assert = require('chai').assert;
import { hideOrGenCSSClass } from '../';

describe('hideOrGenCSSClass', () => {
  it(`returns 'hidden' if selector is 'hidden'`, () => {
    assert.equal(
      hideOrGenCSSClass('hidden', 'string'),
      'hidden',
      `returns 'hidden' when selector is 'hidden'`
    );
  });
  it(`returns 'selector_element' when selector is not 'hidden'`, () => {
    hideOrGenCSSClass('string1', 'string2'),
      'string1_string2',
      `returns 'string1_string2' when selector is not 'hidden': 'string1'`;
  });
});