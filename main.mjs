import axios from 'axios';
import cors from 'cors';
import express from 'express';
import path from 'path';

const app = express();
const api = axios.create({
    baseURL: 'http://api.football-data.org/v2',
    headers: { 'X-Auth-Token': '161a83f0655b4cb983842ebd4a8430de' },
});
const STATIC_PATH = 'build';

app.use(express.static(STATIC_PATH));
app.use(cors());

app.get('/api/areas', (req, res) => {
    api.get('/areas').then(r => res.json({ ...r.data }));
});

app.get('/api/competitions', (req, res) => {
    const { query } = req;
    api.get(`/competitions?areas=${query.areas}`).then(r => res.json({ ...r.data }));
});

app.get('/api/competitions/:competitionId/matches', (req, res) => {
    const { params } = req;
    api.get(`/competitions/${params.competitionId}/matches`).then(r => res.json({ ...r.data }));
});

app.get('/api/competitions/:competitionId/standings', (req, res) => {
    const { params } = req;
    api.get(`/competitions/${params.competitionId}/standings`)
        .then(r => res.json({ ...r.data }))
        .catch(err => res.json({ ...err.data }));
});

app.get('/api/teams/:teamId', (req, res) => {
    const { params } = req;
    api.get(`/teams/${params.teamId}`).then(r => res.json({ ...r.data }));
});

app.get('*', (req, res) => {
    res.send('Hello World!');
});

app.listen(3000, () => {
    console.log('Example app listening on port 3000!');
});
