const http = require('http');
const fs = require('fs');

class HTTPServer{
    constructor(){
        //replace this.HOST with you IP
        //this.HOST = '192.168.3.165'
        this.HOST = '10.0.144.226';
        this.PORT = 3000;
    }

    handlePlainTextRequest(req, res) {
        res.writeHead(200, {'Content-Type': 'text/plain'});
        res.end('Hello, world!');
    }
    
    handleJSONRequest(req, res) {
        const responseData = { message: 'Hello, world!' };
        res.writeHead(200, {'Content-Type': 'application/json'});
        res.end(JSON.stringify(responseData));
    }
    
    handleHtmlRequest(req, res){
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.end('<html><body><h1>Hello, world!</h1></body></html>')
    }

    handleImageRequest(req, res){
        fs.readFile('UADY.png', (err, data) =>{
            if(err){
                res.writeHead(500, {'Content-Type': 'text/plain'});
                res.end('Internal Server Error');
            }else{
                res.writeHead(200, {'Content-Type': 'image/jpeg'});
                res.end(data);
            }
        })
    }

    requestHandler = (req, res) => {
        const {method, url} = req;
        
        switch(url){
            case '/plaintext': 
                this.handlePlainTextRequest(req, res);
                break;
            case '/json': 
                this.handleJSONRequest(req, res);
                break;
            case '/html': 
                this.handleHtmlRequest(req, res);
                break;
            case '/image':
                this.handleImageRequest(req, res);
                break;
            default:
                res.writeHead(404, {'Content-Type': 'text/plain'});
                res.end('404 Not Found');
        }
    }

    startServer(){
        const server = http.createServer(this.requestHandler.bind(this));
        server.listen(this.PORT, this.HOST, () => {
            console.log(`listening on port ${this.HOST}:${this.PORT}`)
        })
    }
}

const server = new HTTPServer();
server.startServer();