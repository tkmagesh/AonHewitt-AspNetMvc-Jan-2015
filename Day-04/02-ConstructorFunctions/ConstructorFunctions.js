/*
1. new
2. this -> new object
3. this is returned by default
*/
function Employee(id, name){
	this["id"] = id;
	this["name"] = name;
}

function Spinner(){
   var count = 0;
   this["up"] = function(){ return ++count; }
   this["down"] = function(){ return --count; }
}

var spinner1 = new Spinner();

var spinner2 = (function(){
	var count = 0;
	return {
		up : function(){ return ++count;},
		down : function(){ return --count;}
	}
})();