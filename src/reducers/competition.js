const intialstate = { competition: {}, loading: false };

const competition = (state = intialstate, { data, type }) => {
    switch (type) {
        case 'COMPETITION/GET':
            return { loading: false, ...data };

        default:
            return state;
    }
};

export default competition;
