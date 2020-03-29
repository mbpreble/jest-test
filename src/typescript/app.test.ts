import { helloWorld } from './app';

describe('hello world', () => {
    it('should say hello world', () => {
        expect(helloWorld()).toBe('hello world')
    });
});
