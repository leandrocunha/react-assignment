const get = data => ({ type: 'COMPETITION/GET', data });
const getStandingsAndMatches = () => ({ type: 'COMPETITION/GETSTANDINGS_AND_MATCHES' });
const competitions = data => ({ type: 'COMPETITION/COMPETITIONS', data });
const matches = data => ({ type: 'COMPETITION/MATCHES', data });
const standings = data => ({ type: 'COMPETITION/STANDINGS', data });

export { competitions, get, getStandingsAndMatches, matches, standings };
