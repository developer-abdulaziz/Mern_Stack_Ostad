/* ========= simple get request ========= */
/*
var express = require('express');

app = express();
app.get("/",function(req,res){
    res.end('This is simple get request')
})
app.listen(8000,function(){
    console.log('server run success....');
})
*/





/* ============== Get Request With URL Query ==========*/
/*
var express = require('express');
app = express();

app.get("/",function(req,res){
    let firstName = req.query.firstName;
    let lastName = req.query.lastName;
    res.end(firstName + " " + lastName);

})

app.listen(9030,function(){
    console.log('run.............');
})
*/






/*====================== Working With Get Request Header =====================*/
/*
var express = require('express');
app = express();

app.get("/",function(req,res){
    var firstName = req.header('firstName');
    var lastName = req.header('lastName');
    res.end(firstName + " " + lastName);
})
//postman a giye header click kore fistname o lastname a key value set kore request send korle data dekheabe

app.listen(4000,function(){
    console.log('Run..........');
})
*/



/* ===================== Simple Post Request ===================*/
/*
var express = require('express');
app = express();
 
// akta kotha mne rakhte hobe j post() ai method diye call korle browser dekhano jabe na .  
app.post("/",function(req,res){
    res.send('This is simple post request');
});

app.listen(4060,function(){
    console.log('server run.....');
})
*/




/*======================= Post Request With URL Query =====================*/
/*
var express = require('express');
app = express();

app.post("/",function(req,res){
    let firstName = req.query.firstName;
    let lastName = req.query.lastName;
    res.send(firstName + ' ' + lastName);
})

app.listen(5060,function(){
    console.log('server run...');
})
*/



/*========================== Post Request With Header ====================*/
/*
var express = require('express');
app = express();

app.post("/",function(req,res){
    let userName = req.header('userName');
    let passWord = req.header('passWord');
    res.send("User Name:" + userName + "Password:" + passWord);
})

app.listen(5010,function(){
    console.log('run.....');
})
*/




/*======================================== Working with JSON Body =========================================*/
//npm install body-parser first run kore nite hobe
//body json k kaj koreate hole at first bodyParser method use korte hobe
// then parser theke json use korbo
//jokhoni amra parser theke json use korbo tokhoni req parameter theke req.body property k call korte parbo
//jokhon req theke body te call korbo tokhon body te jodi kono post kora hoi tokhon body te dore felte parbo

/*
var express = require('express');
var bodyParser = require('body-parser');
app = express();
app.use(bodyParser.json());


app.post("/",function(req,res){
    let jsonData = req.body;

    // let jsonString = JSON.stringify(jsonData);


    //alada alada data show korar jonno
    let name = jsonData['name'];
    let city = jsonData['city'];
    res.send(name + ' ' + city);
})

app.listen(5040,function(){
    console.log('runnnnnnnnn.....');
})
*/





/*================================= Working With Multipart Form Data ==============================*/
/*
var express = require('express');

var multer = require('multer');

var multer = multer()
var app = express();

// for pursing multipart/form-data
app.use(multer.array());
app.use(express.static('public'));

app.post("/",function(req,res){
    let jsonData = req.body;
    res.send(JSON.stringify(jsonData));
})

app.listen(8010,function(){
    console.log('run.........');
})
*/



/*================== File Upload ====================*/

//multer diye kivabe file upload korbo 

var express = require('express');
var multer = require('multer');

var app = express();

var storage = multer.diskStorage({
    destination:function(req,file,callback){
        callback(null,'./upload _02')
    },
    filename:function(req,file,callback){
        callback(null,file.originalname)
    }
})

app.listen(3000,function(){
    console.log('server run.......');
})