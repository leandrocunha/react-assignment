/**
 * @function groupBy Reorder array grouping results by matchday.
 * @param {Array} arr
 * @example groupBy([{...}]) {
 *      //do something
 *  }
 */
const groupBy = (arr) => {
    const grouped = [];

    arr.forEach((element) => {
        grouped[element.matchday - 1] = arr.filter(m => element.matchday === m.matchday);
    });

    return grouped;
};

/**
 * @function search Search a string inside a array.
 * @param {string} str A string to be searched
 * @param {Array} arr A list of searcheables results.
 */
const search = (str, arr) => {
    const newArr = [];

    arr.forEach((a) => {
        if (a.name.toLowerCase().includes(str.toLowerCase())) {
            newArr.push(a);
        }
    });

    return newArr;
};

/**
 * @function filter Function to get player of specific position.
 * @param {Array} arr
 * @param {string} position
 * @example filter([...], 'Goalkeeper') {
 *      //do something
 *  }
 */
const filter = (arr, position) => arr.filter(player => player.position === position);

export { filter, groupBy, search };
