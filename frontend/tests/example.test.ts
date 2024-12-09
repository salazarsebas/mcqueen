// tests/example.test.ts
import {describe, expect, test} from '@jest/globals';
import {sum} from '../src/example.ts';

describe('sum module', () => {
  test('adds 1 + 2 to equal 3', () => {
    expect(sum(1, 2)).toBe(3);
  });
});
