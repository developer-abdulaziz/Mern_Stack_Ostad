/*========= Asynchronus system a readFile =======*/

/*
var fs = require('fs');
var http = require('http');
var server = http.createServer(function(req,res){
    if(req.url == "/"){
        //Asynchronus
        fs.readFile('index.html',function(error,data){
            res.writeHead(200,{'Content-Type':'text/html'});
            res.write(data);
            res.end();
        })
    }
})

server.listen(5858);
console.log('fs module run');
*/



/*========= synchronus system a readFile =======*/
/*
var fs = require('fs');
var http = require('http');
var server = http.createServer(function(req,res){
    if(req.url == "/"){
        //synchronus
        var myData = fs.readFileSync('index.html');
        res.writeHead(200,{'Content-Type':'text/html'});
        res.write(myData);
        res.end();
    }
})

server.listen(2828);
console.log('fs module run');
*/




/*=================== fs File Write Asynchronus =================*/
/*
var fs = require('fs');
var http = require('http');
var server = http.createServer(function(req,res){
    if(req.url == "/"){
        fs.writeFile('demo.txt','Hello world',function(error){
            if(error){
                res.writeHead(200,{'Content-Type':'text/html'});
                res.write('File write Fail');
                res.end();
            }
            else{
                res.writeHead(200,{'Content-Type':'text/html'});
                res.write('File write success');
                res.end();
            }
        });
    }
})

server.listen(2030);
console.log('write file run');
*/



/*=================== fs File Write synchronus =================*/
/*
var fs = require('fs');
var http = require('http');
var server = http.createServer(function(req,res){
    if(req.url == "/"){
       var error = fs.writeFileSync('demoSync.txt','welcome to sync File'); 
       if(error){
            res.writeHead(200,{'Content-Type':'text/html'});
            res.write('File write Fail');
            res.end();
       }
       else{
        res.writeHead(200,{'Content-Type':'text/html'});
        res.write('File write success');
        res.end();
       }
    }
})

server.listen(4040);
console.log('write file run');
*/




/* ================ fs File Rename Asynchronus poddotite =============*/
/*
var fs = require('fs');
var http = require('http');
var server = http.createServer(function(req,res){
    if(req.url == "/"){
       fs.rename('demo.txt','intro.txt',function(error){
            if(error){
                res.writeHead(200,{'Content-Type':'text/html'});
                res.write('File Rename Fail');
                res.end();
            }
            else{
                res.writeHead(200,{'Content-Type':'text/html'});
                res.write('File Rename success');
                res.end();
            }
       })
    }
})

server.listen(3010);
console.log('write file run');
*/






/* ================ fs File Rename synchronus poddotite =============*/
/*
var fs = require('fs');
var http = require('http');
var server = http.createServer(function(req,res){
    if(req.url == "/"){
       let result = fs.renameSync('practice.html','p.html');
       if(result){
        res.writeHead(200,{'Content-Type':'text/html'});
        res.write('ile Rename Fail');
        res.end();
       }
       else{
        res.writeHead(200,{'Content-Type':'text/html'});
        res.write('File Rename success');
        res.end();
       }
    }
})

server.listen(3020);
console.log('write Rename file run');
*/



/*==================== fs File Delete Async =================*/
/*
var fs = require('fs');
var http = require('http');
var server = http.createServer(function(req,res){
    if(req.url == "/"){
        fs.unlink('p.html',function(error){
            if(error){
                res.writeHead(200,{'Content-Type':'text/html'});
                res.write('File Delete Fail');
                res.end();
            }
            else{
                res.writeHead(200,{'Content-Type':'text/html'});
                res.write('File Delete success');
                res.end();
            }
        })
    }
})

server.listen(3040)
console.log('File delete server run......');
*/




/*==================== fs File Delete sync =================*/
/*
var fs = require('fs');
var http = require('http');
var server = http.createServer(function(req,res){
    if(req.url == "/"){
        let result = fs.unlinkSync('intro.txt');
        if(result){
            res.writeHead(200,{'Content-Type':'text/html'});
            res.write('File Delete Fail');
            res.end();
        }
        else{
            res.writeHead(200,{'Content-Type':'text/html'});
            res.write('File Delete success');
            res.end();
        }
    }
})

server.listen(3070)
console.log('File delete server run......');
*/





/* ============= fs File Exists Sync ===============*/
/*
var fs = require('fs');
var http = require('http');
var server = http.createServer(function(req,res){
    if(req.url == "/"){
        let result = fs.existsSync("demo.txt");
        if(result){
            res.end('true');
        }
        else{
            res.end('false');
        }
    }
})

server.listen(3080);
console.log('File exists server run.........');
*/




/* ============= fs File Exists Async ===============*/
/*
var fs = require('fs');
var http = require('http');
var server = http.createServer(function(req,res){
    if(req.url == "/"){
        fs.exists('abc.txt',function(error){
            if(error){
                res.end('true');
            }
            else{
                res.end('false');
            }
        })
    }
})

server.listen(4010);
console.log('File exists server run.........');
*/







