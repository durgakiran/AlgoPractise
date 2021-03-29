import { NonConstructableChange } from '../Non-Constructable-Change';

describe('Non-Constructable Change', () => {
    it('should return minimum non constructable change', () => {
        expect(NonConstructableChange([1, 2, 5])).toBe(4);
        expect(NonConstructableChange([5, 7, 1, 1, 2, 3, 22])).toBe(20);
    });
});
    