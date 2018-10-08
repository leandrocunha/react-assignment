import groupBy from './../utils';

const intialstate = {
    list: [],
    loading: false,
};

const competition = (state = intialstate, { data, type }) => {
    switch (type) {
        case 'COMPETITION/GET':
            return { ...state, loading: true };

        case 'COMPETITION/GETSTANDINGS_AND_MATCHES':
            return {
                ...state,
                matches: { ...state.matches, loading: true },
                standings: { ...state.standings, loading: true },
            };

        case 'COMPETITION/COMPETITIONS':
            return { ...state, loading: false, list: data.competitions };

        case 'COMPETITION/MATCHES':
            return { ...state, matches: { loading: true, list: groupBy(data.matches) } };

        case 'COMPETITION/STANDINGS':
            return { ...state, standings: { loading: false, list: data.standings[0].table } };

        default:
            return intialstate;
    }
};

export default competition;
