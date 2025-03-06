const minusOne = require('./code');

describe('Tests', () => {
    test('the tests', () => {
        const x = [1, 2, 3, 4, 5];
        expect(minusOne(x)).toEqual([1, 2, 3, 4]);
        expect(minusOne(x)).toEqual([1, 2, 3, 4]);
        expect(minusOne(x)).toEqual([1, 2, 3, 4]);
        expect(minusOne(x)).toEqual([1, 2, 3, 4]);
        expect(minusOne(x)).toEqual([1, 2, 3, 4]);
    });
});
