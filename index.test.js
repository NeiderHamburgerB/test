const assert = require('assert');
const calculateScore = require('./index');

describe('calculateScore', () => {
  it('should calculate the score correctly', () => {
    assert.strictEqual(calculateScore([1, 2, 3, 4, 5]), 13);
    assert.strictEqual(calculateScore([17, 19, 21]), 9);
    assert.strictEqual(calculateScore([5, 5, 5]), 15);
  });
});