var fs = require("fs");
fs.readFile("index.html", {encoding : "utf8"},function(err, data){
	if (!err){
		console.log(data);
	}
});
console.log("Done");