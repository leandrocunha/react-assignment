const initialState = { open: false };

const modal = (state = initialState, { data, type }) => {
    switch (type) {
        case 'MODAL/OPEN':
            return { ...state, open: true, teamId: data };

        case 'MODAL/SUCCESS':
            return { ...state, content: { ...data } };

        case 'MODAL/CLOSE':
            return { ...state, open: false };

        default:
            return state;
    }
};

export default modal;
