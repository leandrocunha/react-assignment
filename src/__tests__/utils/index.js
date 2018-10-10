import { groupBy } from './../../utils';

describe('Utils', () => {
    it('group matches', () => {
        const arr = [
            { id: 1, matchday: 1 },
            { id: 2, matchday: 2 },
            { id: 3, matchday: 3 },
            { id: 4, matchday: 1 },
            { id: 5, matchday: 2 },
        ];
        const expectArr = [
            [{ id: 1, matchday: 1 }, { id: 4, matchday: 1 }],
            [{ id: 2, matchday: 2 }, { id: 5, matchday: 2 }],
            [{ id: 3, matchday: 3 }],
        ];

        expect(groupBy(arr)).toEqual(expectArr);
    });
});
