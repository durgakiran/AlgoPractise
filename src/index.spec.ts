import sum from "./index";

describe('sum', () => {
    it('test should work', () => {
        const res = sum(1, 2);
        expect(res).toBe(3);
    });
});
