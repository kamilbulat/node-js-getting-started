var express = require('express');
var app = express();

app.set('port', (process.env.PORT || 5000));

app.use(express.static(__dirname + '/public'));

// views is directory for all template files
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

app.get('/', function(request, response) {
  response.render('pages/index');
});

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});

var fs = require("fs");
var http = require("http");
var server = http.createServer(function(req,res){
	switch(req.method){
        case "POST":
		

		servResp(req, res);
		
            break;
            
    } 

})

function servResp(req, res){
	var allData="";
	req.on("data", function (data) {
            console.log("data: "+data)
            allData += data;
        })
		req.on("end", function (data) {
            var finish = qs.parse(allData)
            if(finish.login == "admin" && finish.login == "admin"){
				fs.readFile("main.html", function (error, data) {        
						if (error) {
							res.writeHead(404, { 'Content-Type': 'text/html' });
							res.write("<h1>błąd 404 - nie ma pliku!<h1>");
							res.end();
						}

						else {
							res.writeHead(200, { 'Content-Type': 'text/html' });
							res.write(data);
							res.end();
						}
				});
			}
            //res.end("odsyłam do przeglądarki" + JSON.stringify(finish));
        })
}
