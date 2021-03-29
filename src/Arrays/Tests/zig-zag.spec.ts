import minimumNumberOfOperationsNeeded from "../zig-zag";


describe('minimumNumberOfOperationsNeeded', () => {
    it('should give minimum number of transaction needed to zig zag the array', () => {
        const n = minimumNumberOfOperationsNeeded([1, 2, 3, 4, 5]);
        expect(n).toBe(2);
        expect(minimumNumberOfOperationsNeeded([0, 0, 0, 0, 0])).toBe(2);
        expect(minimumNumberOfOperationsNeeded([1, 2])).toBe(0);
        expect(minimumNumberOfOperationsNeeded([1, 1])).toBe(1);
    });
})
