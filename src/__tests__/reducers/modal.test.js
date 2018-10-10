import modal from './../../reducers/modal';

const initialState = { open: false };

describe('area reducer', () => {
    it('should open', () => {
        const data = 10;
        const action = { type: 'MODAL/OPEN', data };
        const expectArr = { ...initialState, open: true, teamId: data };
        expect(modal(initialState, action)).toEqual(expectArr);
    });

    it('should sucess', () => {
        const data = {};
        const action = { type: 'MODAL/SUCCESS', data };
        const expectArr = { ...initialState, content: { ...data } };
        expect(modal(initialState, action)).toEqual(expectArr);
    });

    it('should close', () => {
        const action = { type: 'MODAL/CLOSE' };
        const expectArr = { ...initialState, open: false };
        expect(modal(initialState, action)).toEqual(expectArr);
    });

    it('should render default', () => {
        const action = { type: undefined };
        const expectArr = { ...initialState };
        expect(modal(initialState, action)).toEqual(expectArr);
    });
});
