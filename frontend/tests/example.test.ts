// tests/example.test.ts
import { sum } from '../src/example'; // Example function to test

test('adds 1 + 2 to equal 3', () => {
  expect(sum(1, 2)).toBe(3);
});
