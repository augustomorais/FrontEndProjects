var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');

var app = express();

/*
var logger = function(req, res, next){
    console.log('Loggin..');
    next();
}

app.use(logger);
*/
//View engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

//Body Parser Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

// Set static Path
app.use(express.static(path.join(__dirname, 'public')));

var users = [
    {
        id: 1,
        first_name: 'John',
        last_name: 'Doe',
        email: 'johndoe@gmail.com'
    },
    {   
        id:2,
        first_name: 'Bob',
        last_name: 'Smith',
        email: 'bobsmith@gmail.com'
    },
    {
        id:3,
        first_name: 'jill',
        last_name: 'Jackson',
        email: 'jilljackson@gmail.com'
    }
]
/*
var people = [
    {
        name:'Jeff',
        age: 30
    },
    {
        name:'Jeff2',
        age: 31
    },
    {
        name:'Jeff3',
        age: 32
    }
]
*/

app.get('/',function(req, res){    
    res.render('index',{
        title:'Customers',
        users: users        
    });
});

app.listen(3000,function(){
    console.log('Server started on Port 3000...');
})