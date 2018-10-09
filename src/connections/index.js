export const areas = () => {
    const url = 'http://localhost:3000/api/areas';
    return fetch(url).then(response => response.json());
};

export const competitions = (areaId) => {
    const url = `http://localhost:3000/api/competitions?areas=${areaId}`;
    return fetch(url).then(response => response.json());
};

export const matches = (competitionId) => {
    const url = `http://localhost:3000/api/competitions/${competitionId}/matches`;
    return fetch(url).then(response => response.json());
};

export const standings = (competitionId) => {
    const url = `http://localhost:3000/api/competitions/${competitionId}/standings`;
    return fetch(url).then(response => response.json());
};

export const team = (teamId) => {
    const url = `http://localhost:3000/api/teams/${teamId}`;
    return fetch(url).then(response => response.json());
};
