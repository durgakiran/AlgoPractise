import { getPermutations } from "./permutations";

describe('permutations', () => {
    it('should give permutations', () => {
        const perms = getPermutations([1, 2, 3]);
        expect(perms).toStrictEqual([
            [1, 2, 3],
            [1, 3, 2],
            [2, 1, 3],
            [2, 3, 1],
            [3, 1, 2],
            [3, 2, 1]
          ]);
    });
});
