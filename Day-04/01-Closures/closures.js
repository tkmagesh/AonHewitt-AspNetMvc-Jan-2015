create an object as following

var spinner = .....

function getSpinner(){
	var count = 0;
	function inc(){
		return ++count;
	}
	function dec(){
		return --count;
	}
	return {
		up : inc,
		down : dec
	}
}

spinner.up() //=> 1
spinner.up() //=> 2
spinner.up() //=> 3
spinner.up() //=> 4

spinner.down() //=> 3
spinner.down() //=> 2
spinner.down() //=> 1
spinner.down() //=> 0
spinner.down() //=> -1

isPrime(100)
isPrime(100)


var checkPrime = (function(){
	var cache = {}
	function isPrime(n){
		if (n <= 3) return true;
		for(var i=2; i<=(n/2);i++)
			if (n % i === 0) return false;
		return true;
	}

	function checkPrime(n){
		if (typeof cache[n] !== "undefined"){
			console.log("From cache");
			return cache[n]
		}
		cache[n] = isPrime(n);
		console.log("Juz processed");
		return cache[n];
	}
	return checkPrime;
})();