import Validator from '../app';

test('All rules are matched', () => {
  expect(Validator.validateUsername('petruxa11_-31XxX')).toBe(true);
});

test('3 numbers or more', () => {
  expect(Validator.validateUsername('petruxa3333XxX')).toBe(false);
});

test('Starts from a number', () => {
  expect(Validator.validateUsername('3petruxa')).toBe(false);
});

test('Ends from a number', () => {
  expect(Validator.validateUsername('petruxa3')).toBe(false);
});

test('Starts with a _', () => {
  expect(Validator.validateUsername('_petruxa')).toBe(false);
});

test('Ends with a _', () => {
  expect(Validator.validateUsername('petruxa_')).toBe(false);
});
