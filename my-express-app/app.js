const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => res.send('Hello World!'));

app.get('/teamMembers', (req, res) => {
    const members = [
        { id: 1, name: 'Jesus' },
        { id: 2, name: 'Juan' },
        { id: 3, name: 'Darwin' },
    ];
    res.json(members);
});

app.listen(port, () => {
    console.log(`App listening on port ${port}! http://localhost:${port}/`);
});