let express = require("express");
//변경되는지 확인용!!!ㅇㅇㄴㄴㄴㄴㄴㄴㄴㄴㄴㄴsss
//var http = require('http');
let app = express();
let port = 3000;
var http = require('http');
// var template = require('./lib/template.js');


//mysql연결하기 
var mysql = require('mysql');

var db = mysql.createConnection({
  host:'localhost',
  user:'root',
  password:'111111',
  database:'opentutorials'
});
db.connect();


app.use(express.static("./static"));

app.listen(port, function() {
    console.log(`Listening at http://localhost:${port}`);
});

//디비 연결돼서 출력되는지 

    

    db.query(`SELECT * FROM topic`, function(error,topics){
        console.log(topics);
        // var title = "mysqlDB"
        // var description = "connectionTest"
        // var list = template.list(topics);
        // var html = template.HTML(title, list,
        //         `<h2>${title}</h2>${description}`,
        //         `<a href="/create">create</a>`
        //         );
        //         response.writeHead(200);
        //         response.end(html);
        });




