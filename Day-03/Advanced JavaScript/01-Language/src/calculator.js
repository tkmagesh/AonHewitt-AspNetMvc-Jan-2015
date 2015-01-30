function add(){
	function parseArg(n){
		if (typeof n === "function") return parseArg(n());
		if (n instanceof Array) return add.apply(this, n);
		return isNaN(n) ? 0 : parseInt(n,10);
	}
	return arguments.length <= 1 ? parseArg(arguments[0]) : parseArg(arguments[0]) + add(Array.prototype.slice.call(arguments,1));
}

/*

arguments -> array like object supports indexer [0] [1] & length 
this

Function invocation (6)
As a function  -> this => window
As a method of obj -> this => obj
Using "call" method
Using "apply" method
*/
/*
sum(10,20,30,40)
	10 + sum(20,30,40)
			20 + sum(30,40)
					30 + sum(40)
							40
							*/