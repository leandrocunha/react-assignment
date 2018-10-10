import * as actions from './../../actions/areas';

const areas = {
    areas: [{ id: 1, name: 'Netherlands' }, { id: 2, name: 'Brazil' }, { id: 3, name: 'Germany' }],
    count: 3,
    filters: {},
};

describe('actions', () => {
    it('should get areas', () => {
        const expectedAction = { type: 'AREA/GET', data: { ...areas } };
        expect(actions.get(areas)).toEqual(expectedAction);
    });

    it('should search an area', () => {
        const str = 'Netherlands';
        const expectedAction = { type: 'AREA/SEARCH', data: str };
        expect(actions.search(str)).toEqual(expectedAction);
    });
});
