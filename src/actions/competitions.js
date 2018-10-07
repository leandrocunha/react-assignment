const get = data => ({ type: 'COMPETITION/GET', data });
const matches = data => ({ type: 'COMPETITION/MATCHES', data });
const standings = data => ({ type: 'COMPETITION/STANDINGS', data });

export { get, matches, standings };
