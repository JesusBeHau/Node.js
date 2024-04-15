const http = require('http');

class HTTPClient{
  constructor(){
    //replace with the server IP
    //this.HOST = '192.168.3.165';
    this.HOST = 'http://10.0.144.226';
    this.PORT = 3000;
    this.APIURL = `${this.HOST}:${this.PORT}`;
  }

  jsonRequest(){
    http.get(`${this.APIURL}/json`, (res) => {
      res.on('data', (data) => {
        console.log('Respuesta json del servidor:', data.toString());
      });
    });
  }

  plainTextRequest(){
    http.get(`${this.APIURL}/plaintext`, (res) => {
      res.on('data', (data) => {
        console.log('Respuesta texto plano del servidor:', data.toString());
      });
    });
  }
}

const client = new HTTPClient();
client.plainTextRequest();
client.jsonRequest();