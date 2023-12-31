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
// note ==> sob code likhar pore localhost postman a post request send korar age niche body click => raw data => key te myFile diye file set kore value diye send click.....
// taholei dekhbo j upload file a select kora valu uplod hoi gase
//multer diye kivabe file upload korbo 

/*
var express = require('express');
var multer = require('multer');

var app = express();

// create storage
var storage = multer.diskStorage({
    destination:function(req,file,callback){
        callback(null,'./upload _02')
    },
    filename:function(req,file,callback){
        callback(null,file.originalname)
    }
})


var upload = multer({storage:storage}).single('myFile');

app.post("/",function(req,res){
    upload(req,res,function(error){
        if(error){
            res.send('file upload Fail')
        }
        else{
            res.send('file upload success')
        }
    })
})


app.listen(4040,function(){
    console.log('server run.......');
})
*/




/*===================================================== Application Middleware ===========================================*/
/*note==>next = req jai middlware a . middleware abr next kore response er kase

==> request middlware a jaia execute hoia response dei. orthat request response er maje j execute hoi setai next er kaj

===> application middleware puro application jurei kaj kore.
puro apllication jure jotogulo req res thakbe sobgulor jonnoi midlleware application execute hobe*/



/*
var express = require('express');
var app = express();

//application middleware
app.use(function(req,res,next){
    console.log("I am application level middleware");
    next();
})


app.get("/",function(req,res){
    res.send('This is Home page')
})
app.get("/about",function(req,res){
    res.send('This is about page')
})
app.get("/contact",function(req,res){
    res.send('This is contact page')
})

app.listen(2000,function(){
    console.log('server run.....');
})
*/





/*===================================================== Route Middleware ===========================================*/
/*note==>Route level =>route level holo kono specific rout er jonno execute hobe sobgulor jonno hobena*/


/*
var express = require('express');
var app = express();


app.get("/",function(req,res){
    res.send('This is Home page')
})



//Route middleware
app.use("/about",function(req,res,next){
    console.log('I am about middleware');
    next();
})

app.get("/about",function(req,res){
    res.send('This is about page')
})
app.get("/contact",function(req,res){
    res.send('This is contact page')
})

app.listen(3000,function(){
    console.log('server run.....');
})
*/
