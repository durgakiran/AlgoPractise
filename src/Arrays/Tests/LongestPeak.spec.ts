import { LongestPeak } from "../LongestPeak";

describe(('Longest Peak'), () => {
    it('should return length of longest peak', () => {
        const array = [1, 2, 3, 3, 4, 0, 10, 6, 5, -1, -3, 2, 3];
        const expected = 6;
        expect(LongestPeak(array)).toBe(expected);
        expect(LongestPeak([1, 3, 2])).toBe(3);
    });
});
