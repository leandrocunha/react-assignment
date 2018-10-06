const get = areas => ({ type: 'AREA/GET', data: { ...areas } });
const search = str => ({ type: 'AREA/SEARCH', data: str });

export { get, search };
