const get = data => ({ type: 'COMPETITION/GET', data });
const standings = data => ({ type: 'COMPETITION/STANDINGS', data });

export { get, standings };
