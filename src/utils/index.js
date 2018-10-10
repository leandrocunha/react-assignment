const groupBy = (arr) => {
    const grouped = [];

    arr.forEach((element) => {
        grouped[element.matchday - 1] = arr.filter(m => element.matchday === m.matchday);
    });

    return grouped;
};

const search = (str, arr) => {
    const newArr = [];

    arr.forEach((a) => {
        if (a.name.toLowerCase().includes(str.toLowerCase())) {
            newArr.push(a);
        }
    });

    return newArr;
};

const filter = (arr, position) => arr.filter(player => player.position === position);

export { filter, groupBy, search };
