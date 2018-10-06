const intialstate = { loading: true };

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
            return { loading: false, searcheable: data.areas, ...data };

        case 'AREA/SEARCH':
            return {
                ...state,
                searcheable: search(data, state.areas),
            };

        default:
            return state;
    }
};

export default area;
