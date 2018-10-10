import * as actions from './../../actions/competitions';

const competitions = {
    competitions: [
        { id: 1, name: 'KNVB Beker' },
        { id: 2, name: 'Eredivisie' },
        { id: 2, name: 'John Cruijff Schaal' },
    ],
    count: 3,
    filters: { areas: [2163] },
};

const matches = {
    competition: { id: 2003, name: 'Eredivisie' },
    count: 306,
    filters: {},
    matches: [{ id: 1, awayTeam: {} }, { id: 2, awayTeam: {} }, { id: 3, awayTeam: {} }],
};

const standings = {
    competition: { id: 2003, name: 'Eredivisie' },
    filters: {},
    season: { id: 1, currentMatchday: 1 },
    standings: [{ stage: 'REGULAR_SEASON', type: 'TOTAL' }],
};

describe('actions', () => {
    it('should get competitions', () => {
        const expectedAction = { type: 'COMPETITION/GET' };
        expect(actions.get()).toEqual(expectedAction);
    });

    it('should get standings and matches', () => {
        const expectedAction = { type: 'COMPETITION/GETSTANDINGS_AND_MATCHES' };
        expect(actions.getStandingsAndMatches()).toEqual(expectedAction);
    });

    it('should get competitions', () => {
        const expectedAction = { type: 'COMPETITION/COMPETITIONS', data: { ...competitions } };
        expect(actions.competitions(competitions)).toEqual(expectedAction);
    });

    it('should get matches', () => {
        const expectedAction = { type: 'COMPETITION/MATCHES', data: { ...matches } };
        expect(actions.matches(matches)).toEqual(expectedAction);
    });

    it('should get standings', () => {
        const expectedAction = { type: 'COMPETITION/STANDINGS', data: { ...standings } };
        expect(actions.standings(standings)).toEqual(expectedAction);
    });
});
