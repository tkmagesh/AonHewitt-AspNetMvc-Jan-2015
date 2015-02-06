var http = require("http");
var fs = require("fs");
var path = require("path");

var server = http.createServer(function(req,res){
	
	/*fs.readFile("index.html", {encoding : "utf8"},function(err, data){
		if (!err){
			res.write(data);
			res.end();
		} else {
			res.statusCode = 500;
			res.end();
		}
	});*/
	
	/*	var stream = fs.createReadStream("index.html", {encoding : "utf8"});
		stream.on("data", function(data){
			res.write(data)
		});
		stream.on("end", function(){
			res.end();
		});
	*/
	var resourcePath = path.join(__dirname, req.url);
	console.log(resourcePath);

	if (fs.existsSync(resourcePath)){
		var stream = fs.createReadStream(resourcePath, {encoding : "utf8"});
		stream.pipe(res);	
	} else {
		res.statusCode = 404;
		res.end();
	}
});
server.listen(9090);