import { checkState } from '../basic';
import { sortState } from '../basic';
import { test } from '@jest/globals';
import { expect } from '@jest/globals';

test('testing state healthy', () => {
  const result = checkState({ name: 'Маг', health: 90 });
  expect(result).toBe("healthy");
})

test('testing state wounded', () => {
  const result = checkState({ name: 'Маг', health: 40 });
  expect(result).toBe("wounded");
})

test('testing state critical', () => {
  const result = checkState({ name: 'Маг', health: 10 });
  expect(result).toBe("critical");
})

test('sorting arrays of characters', () => {
  const result = sortState([
    { name: 'мечник', health: 10 },
    { name: 'маг', health: 100 },
    { name: 'лучник', health: 80 },
  ]);
  const sortedArr = [
    { name: 'маг', health: 100 },
    { name: 'лучник', health: 80 },
    { name: 'мечник', health: 10 },
  ];
  expect(result).toEqual(sortedArr);
})