const groupBy = (arr) => {
    const grouped = [];

    arr.forEach((element) => {
        grouped[element.matchday - 1] = arr.filter(m => element.matchday === m.matchday);
    });

    return grouped;
};

export default groupBy;
