const express = require('express');
const fs = require('fs');

const app = express();

app.use(express.json());

app.post('/sendData', (req, res) => {
    const data = req.body;

    fs.writeFileSync('data.json',JSON.stringify(data, null, 2));

    console.log(data);

    res.send('Post request received');
});

app.get('/getData', (req, res) => {
    const data = fs.readFileSync('data.json', 'utf-8');

    res.json(JSON.parse(data));
});

app.listen(process.env.PORT || 2000, () => {
    console.log('The server is running at local host 2000');
});