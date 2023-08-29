
/*
var http = require('http');
var url = require('url');

var server = http.createServer(function(req,res){
    var myUrl = "http://rabbil.com/blog.html?year=2020&month=july";
    var myUrlObj = url.parse(myUrl,true);
    var myHostName = myUrlObj.host;
    var myPathName = myUrlObj.pathname;
    var mySearchName = myUrlObj.search;
    res.writeHead(200,{'Content-Type':'text/html'});
    res.write(myHostName);
    res.end();

})

server.listen(6060);
console.log('Server Run Success');
*/