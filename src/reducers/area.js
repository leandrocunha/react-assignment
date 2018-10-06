const intialstate = { list: [], loading: true, searcheable: [] };

const search = (str, arr) => {
    const newArr = [];

    arr.forEach((a) => {
        if (a.name.toLowerCase().includes(str.toLowerCase())) {
            newArr.push(a);
        }
    });

    return newArr;
};

const area = (state = intialstate, { data, type }) => {
    switch (type) {
        case 'AREA/GET':
            return { ...intialstate, list: data.areas, loading: false, searcheable: data.areas };

        case 'AREA/SEARCH':
            return { ...state, searcheable: search(data, state.list) };

        default:
            return state;
    }
};

export default area;
