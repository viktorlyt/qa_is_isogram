'use strict';

describe('isIsogram', () => {
  const { isIsogram } = require('./isIsogram');

  it(`should be declared`, () => {
    expect(isIsogram).toBeInstanceOf(Function);
  });

  it(`true if empty string`, () => {
    expect(isIsogram('')).toBe(true);
  });

  it(`true if no repeating letters in the string`, () => {
    expect(isIsogram('playgrounds')).toBe(true);
  });

  it(`false if has repeating letters`, () => {
    expect(isIsogram('look')).toBe(false);
  });
});
