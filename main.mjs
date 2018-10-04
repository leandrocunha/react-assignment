import axios from 'axios';
import cors from 'cors';
import express from 'express';

const app = express();
const apiURL = 'http://api.football-data.org/v2';

app.use(cors());
app.get('/api/competitions', (req, res) => {
    axios.get(`${apiURL}/competitions`).then(r => res.json({ ...r.data }));
});

app.get('*', (req, res) => {
    res.send('Hello World!');
});

app.listen(3000, () => {
    console.log('Example app listening on port 3000!');
});
