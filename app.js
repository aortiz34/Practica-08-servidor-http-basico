var http = require('http');

http.createServer(function(req,res){

    res.writeHead(200, {'Content-Type': 'tex/plain'});
    res.end('Hello world');

}).listen(1337,'127.0.0.1');
//Aqui se usa de un paquete para mandar unas response apartir de que se pida algo en el navegador por medio del localhost

