import * as actions from './../../actions/modal';

const team = { activeCompetitions: [], address: 'Fredriklaan 10a Eindhoven 5616 NH', area: {} };

describe('actions', () => {
    it('should close', () => {
        const expectedAction = { type: 'MODAL/CLOSE' };
        expect(actions.close()).toEqual(expectedAction);
    });

    it('should show', () => {
        const expectedAction = { type: 'MODAL/OPEN', data: 10 };
        expect(actions.show(10)).toEqual(expectedAction);
    });

    it('should load success', () => {
        const expectedAction = { type: 'MODAL/SUCCESS', data: { ...team } };
        expect(actions.success(team)).toEqual(expectedAction);
    });
});
