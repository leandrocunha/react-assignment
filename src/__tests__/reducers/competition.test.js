import competition from './../../reducers/competition';
import { groupBy } from './../../utils';

const initialState = {
    list: [],
    loading: false,
};

describe('competition reducer', () => {
    it('get areas', () => {
        const action = { type: 'COMPETITION/GET' };
        const expectArr = { ...initialState, loading: true };
        expect(competition(initialState, action)).toEqual(expectArr);
    });

    it('get standings and matches', () => {
        const action = { type: 'COMPETITION/GETSTANDINGS_AND_MATCHES' };
        const expectArr = {
            ...initialState,
            matches: { list: [], loading: true },
            standings: { list: [], loading: true },
        };
        expect(competition(initialState, action)).toEqual(expectArr);
    });

    it('get competitions', () => {
        const data = { competition: [], count: 0 };
        const action = { type: 'COMPETITION/COMPETITIONS', data };
        const expectArr = { ...initialState, loading: false, list: data.competitions, count: data.count };
        expect(competition(initialState, action)).toEqual(expectArr);
    });

    it('get matches', () => {
        const data = { matches: [] };
        const action = { type: 'COMPETITION/MATCHES', data };
        const expectArr = { ...initialState, matches: { loading: false, list: groupBy(data.matches) } };
        expect(competition(initialState, action)).toEqual(expectArr);
    });

    it('get standings table', () => {
        const data = { standings: [{ table: [] }] };
        const action = { type: 'COMPETITION/STANDINGS', data };
        const expectArr = {
            ...initialState,
            standings: { loading: false, list: data.standings[0].table },
        };
        expect(competition(initialState, action)).toEqual(expectArr);
    });

    it('should render default', () => {
        const action = { type: undefined };
        const expectArr = { ...initialState };
        expect(competition(initialState, action)).toEqual(expectArr);
    });
});
