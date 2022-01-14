import { doSomething } from './doSomething';

describe('doSomething', () => {
  it('should return true', () => {
    expect(doSomething()).toBe(true);
  });
});
