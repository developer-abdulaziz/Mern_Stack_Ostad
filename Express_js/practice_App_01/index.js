/*======== your first express Application ========*/
/*
var express = require('express');
app = express();

app.get("/",function(req,res){
    res.send('Hello express js');
})
app.listen(8000,function(){
    console.log('server run success....');
})
*/




/*======== Express js routing ============*/
/*
var express = require('express');
app = express();

app.get("/",function(req,res){
    res.send('Home page');
})
app.post("/about",function(req,res){
    res.send('About page');
})
app.put("/contact",function(req,res){
    res.send('Contact page');
})
app.delete("/terms",function(req,res){
    res.send('Terms page');
})



app.listen(8080,function(){
    console.log('server run success....');
})
*/



/*=============== Simple String Response =============*/
/*
var express = require('express');
app = express();

app.get("/one",function(req,res){
    res.send('This is simple string response one');
})
app.get("/two",function(req,res){
    res.send('This is simple string response two');
})



app.listen(8090,function(){
    console.log('server run success....');
})
*/






/*========== Response Status Code ============*/
/*
var express = require('express');
app = express();

app.get("/one",function(req,res){
    res.end('This is simple string response one....')
});

app.post("/two",function(req,res){
    res.end('This is simple string response two....')
});

//Response Status code
app.get("/three",function(req,res){
    res.status(401).end('Unauthor...');
});

app.listen(9010,function(){
    console.log('server run success....');
})
*/





/*================ JSON Response ==================*/
/*
var express = require('express');
app = express();

app.get("/one",function(req,res){
    res.end('This is simple string response one....')
});

app.post("/two",function(req,res){
    res.end('This is simple string response two....')
});

//Response Status code
app.get("/three",function(req,res){
    res.status(401).end('Unauthor...');
});

//Json Response
app.get("/four",function(req,res){
    let myJsonArray =[
        {
            name:'Md Abdul Aziz',
            city:'Tongi',
            occupation:'Job holder'
        },
        {
            name:'Rakib',
            city:'Dhaka',
            occupation:'eng'
        },
        {
            name:'Rifat',
            city:'Jatrabari',
            occupation:'Data analysis'
        }
    ]
    res.json(myJsonArray);
});

app.listen(9020,function(){
    console.log('server run success....');
})
*/



/*===========================================================*/
/*
var express = require('express');
app = express();

app.get("/",function(req,res){
    res.send('This is get method')
});

app.post("/about",function(req,res){
    res.send('This is post method')
});

app.put("/contact",function(req,res){
    res.send('This is put method')
});

app.delete("/terms",function(req,res){
    res.send('This is delete method')
});


//status code
app.get("/statusMethod",function(req,res){
    res.send(401).end();
});


//Json method
app.get("/json",function(req,res){
    var identity =[
        {
            name:'Rakib',
            location:'Tongi',
            number: 1
        },
        {
            name:'Rajon',
            location:'dhaka',
            number: 2  
        },
        {
            name:'Rahat',
            location:'joidevpur',
            number: 3  
        },
        {
            name:'Rajib',
            location:'MoinaDeep',
            number: 4  
        }
    ]


    res.json(identity);

});



app.listen(8010,function(){
    console.log('express js server run success.....');
})
*/




/*===============all method==================*/
/*
var express = require('express');
app = express();

app.get("/one",function(req,res){
    res.send('This is get method')
});

app.post("/two",function(req,res){
    res.send('This is post method')
});

app.put("/three",function(req,res){
    res.send('This is put method')
});

app.delete("/four",function(req,res){
    res.send('This is delete method')
});


//status code
app.get("/statusMethod",function(req,res){
    res.send(401).end();
});


//Json method
app.get("/json",function(req,res){
    var identity =[
        {
            name:'Rakib',
            location:'Tongi',
            number: 1
        },
        {
            name:'Rajon',
            location:'dhaka',
            number: 2  
        },
        {
            name:'Rahat',
            location:'joidevpur',
            number: 3  
        },
        {
            name:'Rajib',
            location:'MoinaDeep',
            number: 4  
        }
    ]


    res.json(identity);

});

//download() method
app.get("/five",function(req,res){
    res.download("./upload/download (1).jpg")
})


app.listen(8040,function(){
    console.log('express js server run success.....');
})
*/




/*========== Response Redirect ==========*/
/*
var express = require('express');
app = express();

app.get("/bangladesh",function(req,res){
    res.redirect('http://localhost:8080/india')
})
app.get("/india",function(req,res){
    res.send('This is india')
})

app.listen(8080,function(){
    console.log('server run success......');
})
*/



/*========== Response Header ==========*/
/*
var express = require('express');
app = express();

app.get("/responseHeader",function(req,res){
   //append()==>first element holo key second ta holo value
    res.append('name','Abdul Aziz');
    res.append('city','Tongi');
    res.append('age','28 years old');
    res.append('village','charkalekha');
    res.send('Hello World');
    res.status(201).end();
})

app.listen(8040,function(){
    console.log('server run success....');
})
*/






/*========== Response Set Cookies ==========*/
/*
var express = require('express');
app = express();
 
app.get("/setCookies",function(req,res){
    res.cookie('name','Abdul Aziz'); //key,value
    res.cookie('city','Tongi');
    res.cookie('age','28 years old');
    res.cookie('village','charkalekha');
    res.end('cookie set success');
})

app.listen(4050,function(){
    console.log('server run.....');
})
*/




/*========== Response clear Cookies ==========*/
/*
var express = require('express');
app = express();

app.get("/setCookies",function(req,res){
    res.cookie('name','Rakib');
    res.cookie('city','Dhaka');
    res.cookie('age','28 years old');
    res.cookie('date','28/02/23');
    res.end('cookie run.......')
});

app.get("/clearCookies",function(req,res){
    res.clearCookie('name');
    res.clearCookie('date');
    res.clearCookie('village');
    res.clearCookie('city');
    res.end('cookies clear success.....')
})
app.listen(3060,function(){
    console.log('server run.....');
})
*/