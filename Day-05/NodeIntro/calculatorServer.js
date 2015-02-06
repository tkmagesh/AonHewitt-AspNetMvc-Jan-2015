var fs = require("fs"),
	http = require("http"),
	url = require("url"),
	path = require("path"),
	qs = require("querystring"),
	calculator = require("./calculator");

var staticResourceExtns = [".html", ".js", ".css", ".jpg", ".ico"];

function isStaticResource(resourcePath){
	var extn = path.extname(resourcePath);
	return staticResourceExtns.indexOf(extn) !== -1;
}

http.createServer(function(req,res){
	req.url = url.parse(req.url !== "/" ? req.url : "/index.html", true );
	if (isStaticResource(req.url.pathname)){
		var resourcePath = path.join(__dirname, req.url.pathname);
		if (fs.existsSync(resourcePath)){
			fs.createReadStream(resourcePath, {encoding : "utf8"}).pipe(res);	
		} else {
			res.statusCode = 404;
			res.end();
		}
	} else {
		if (req.url.pathname === "/calculate"){
			//op=Add&n1=100&n2=200
			var data = req.url.query;
			var n1 = parseInt(data.n1,10);
			var n2 = parseInt(data.n2,10);
			var result = calculator[data.op](n1, n2);
			res.write("<h1>" + result + "</h1>"); 
			res.end(); 
		}
	}
}).listen(9090);
console.log("server running on port 9090");