const http = require('http');

http.get(`http://localhost:3000/teamMembers`, (res) => {
    res.on('data', (data) => {
        console.log('Respuesta del servidor:', data.toString());
    });
});