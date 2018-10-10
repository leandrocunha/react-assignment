import { groupBy } from './../utils';

const intialstate = {
    list: [],
    loading: false,
};

const competition = (state = intialstate, { data, type }) => {
    switch (type) {
        case 'COMPETITION/GET':
            return { ...intialstate, loading: true };

        case 'COMPETITION/GETSTANDINGS_AND_MATCHES':
            return {
                ...state,
                matches: { list: [], loading: true },
                standings: { list: [], loading: true },
            };

        case 'COMPETITION/COMPETITIONS':
            return { ...intialstate, loading: false, list: data.competitions, count: data.count };

        case 'COMPETITION/MATCHES':
            return { ...state, matches: { loading: false, list: groupBy(data.matches) } };

        case 'COMPETITION/STANDINGS':
            return {
                ...state,
                standings: { loading: false, list: data.standings ? data.standings[0].table : [] },
            };

        default:
            return state;
    }
};

export default competition;
