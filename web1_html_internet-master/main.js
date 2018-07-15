var http = require('http');
var fs = require('fs');
var url = require('url');

var app = http.createServer(function(request,response){
    var _url = request.url;
    var qDate = url.parse(_url, true).query;
    // console.log('>>'+_url);

    // console.log(qDate.id);

    if(_url == '/'){
      _url = '/index.html';
    }
    if(_url == '/favicon.ico'){
      return response.writeHead(404);
    }

    response.writeHead(200);
    //response.end(fs.readFileSync(__dirname + _url));
    response.end(qDate.id);
 
});
app.listen(3000);