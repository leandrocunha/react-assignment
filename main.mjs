import express from 'express';
import axios from 'axios';

const app = express();
const apiURL = 'http://api.football-data.org/v2';

app.get('/api/competitions', (req, res) => {
    axios.get(`${apiURL}/competitions`).then(r => res.json({ ...r.data }));
});

app.get('*', (req, res) => {
    res.send('Hello World!');
});

app.listen(3000, () => {
    console.log('Example app listening on port 3000!');
});
