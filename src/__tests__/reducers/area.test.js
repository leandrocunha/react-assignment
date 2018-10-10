import area from './../../reducers/area';
import { search } from './../../utils';

const areas = [{ id: 1, name: 'Netherlands' }, { id: 2, name: 'Brazil' }, { id: 3, name: 'Germany' }];
const initialState = { list: areas, loading: true, searcheable: [] };

describe('area reducer', () => {
    it('get areas', () => {
        const data = {
            areas,
            count: 3,
            filters: {},
        };
        const action = { type: 'AREA/GET', data };
        const expectArr = { ...initialState, list: data.areas, loading: false, searcheable: data.areas };
        expect(area(initialState, action)).toEqual(expectArr);
    });

    it('search area', () => {
        const data = 'Netherlands';
        const action = { type: 'AREA/SEARCH', data };
        const expectArr = { ...initialState, searcheable: search(data, initialState.list) };
        expect(area(initialState, action)).toEqual(expectArr);
    });

    it('should render default', () => {
        const action = { type: undefined };
        const expectArr = { ...initialState };
        expect(area(initialState, action)).toEqual(expectArr);
    });
});
