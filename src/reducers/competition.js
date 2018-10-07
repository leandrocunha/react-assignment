const intialstate = { list: [], loading: false, standings: [] };

const competition = (state = intialstate, { data, type }) => {
    switch (type) {
        case 'COMPETITION/GET':
            return { ...state, loading: false, list: data.competitions };

        case 'COMPETITION/STANDINGS':
            return { ...state, standings: data.standings[0].table };

        default:
            return intialstate;
    }
};

export default competition;