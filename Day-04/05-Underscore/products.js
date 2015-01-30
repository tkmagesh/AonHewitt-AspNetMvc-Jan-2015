var products =[
	{"id" : 6, "name" : "Pen", "cost" : 60, "units" : 70, "category" : 1},
	{"id" : 9, "name" : "Hen", "cost" : 90, "units" : 40, "category" : 2},
	{"id" : 3, "name" : "Den", "cost" : 30, "units" : 90, "category" : 1},
	{"id" : 5, "name" : "Ken", "cost" : 70, "units" : 30, "category" : 2},
	{"id" : 7, "name" : "Len", "cost" : 50, "units" : 60, "category" : 1},
	{"id" : 1, "name" : "Zen", "cost" : 20, "units" : 10, "category" : 2}
]
function displayGroup(groupName, fn){
	console.group(groupName);
	fn();
	console.groupEnd();
}

displayGroup("Default product list", function(){
	console.table(products);
});

displayGroup("Sorting", function(){
	displayGroup("Default sorting", function(){
		function sort(){
			for(var i=0;i<products.length-1;i++)
				for(var j=i+1; j< products.length;j++){
					var left = products[i],
						right = products[j];
					if (left.id > right.id){
						var temp = left;
						products[i] = products[j];
						products[j] = temp;
					}
				}
		}
		sort();
		console.table(products);	
	});
	displayGroup("Generalized sorting-1 [By cost]", function(){
		function sort(list, attrName){
			for(var i=0;i<list.length-1;i++)
				for(var j=i+1; j< list.length;j++){
					var left = list[i],
						right = list[j];
					if (left[attrName] > right[attrName]){
						var temp = left;
						list[i] = list[j];
						list[j] = temp;
					}
				}
		}
		sort(products, "cost");
		console.table(products);	
	});
	displayGroup("Generalized sorting-2 [By ProductValue = cost * units]", function(){
		function sort(list, comparerFn){
			for(var i=0;i<list.length-1;i++)
				for(var j=i+1; j< list.length;j++){
					var left = list[i],
						right = list[j];
					if (comparerFn(left, right) > 0){
						var temp = left;
						list[i] = list[j];
						list[j] = temp;
					}
				}
		}
		var productComparerByValue = function(left, right){
			var leftValue = left.cost * left.units,
				rightValue = right.cost * right.units;
			if (leftValue < rightValue) return -1;
			if (leftValue === rightValue) return 0;
			return 1;
		}
		sort(products, productComparerByValue);
		console.table(products);	
	});

	displayGroup("Filter", function(){
		var filter = function(list, criteriaFn){
			var result = [];
			for(var i=0;i<list.length;i++){
				if (criteriaFn(list[i]))
					result.push(list[i]);
			}
			return result;
		}
		var costlyProductCriteria = function(product){
			return product.cost > 50;
		}
		displayGroup("By costly products [cost > 50]", function(){
			var costlyProductCriteria = function(product){
				return product.cost > 50;
			}
			var costlyProducts = filter(products, costlyProductCriteria);
			console.table(costlyProducts);
		});
		/*	var affordableProductCriteria = function(product){
				return product.cost <= 50;
			}
		*/
		var inverseCriteria = function(criteriaFn){
			return function(){
				return !criteriaFn.apply(this,arguments);
			}
		}
		var affordableProductCriteria = inverseCriteria(costlyProductCriteria);

		displayGroup("By affordable [cost <= 50]", function(){
			var affordableProducts = filter(products, affordableProductCriteria);
			console.table(affordableProducts);
		});
	});

	displayGroup("Every", function(){
		function every(list, predicateFn){
			for(var i=0;i<list.length;i++)
				if (!predicateFn(list[i])) return false;
			return true;
		}
		var costlyProductPredicate = function(p){ return p.cost > 50;}
		console.log("Are all products costly ?" , every(products,costlyProductPredicate));
	})
	displayGroup("Some", function(){
		function some(list, predicateFn){
			for(var i=0;i<list.length;i++)
				if (predicateFn(list[i])) return true;
			return false;
		}
		var costlyProductPredicate = function(p){ return p.cost > 50;}
		console.log("Are there any costly products ?" , some(products,costlyProductPredicate));
	})
	displayGroup("GroupBy", function(){
		function groupBy(list, keySelectorFn){
			var result = {};
			for(var i=0;i<list.length;i++){
				var key = keySelectorFn(list[i]);
				if (typeof result[key] === "undefined")
					result[key] = [];
				result[key].push(list[i]);
			}
			return result;
		}
		var categoryKeySelector = function(p){ return p.category; };
		window.productsGroupedByCategory = groupBy(products, categoryKeySelector);

		var costKeySelector = function(p){
			return p.cost > 50 ? "costly" : "affordable";
		};
		window.productsGroupedByCost = groupBy(products, costKeySelector);

	})
});

function memoize(fn, keySelector){
   var cache={};
   return function(){
       var key = keySelector.apply(this,arguments);
       if (typeof cache[key] === "undefined")
          cache[key] = fn.apply(this,arguments);
       return cache[key];
   }
}
function each(list, fn){
	for(var i=0;i<list.length;i++)
		fn(list[i]);
}

function map(list, fn){
	var result = [];
	for(var i=0;i<list.length;i++)
		result.push(fn(list[i]));
	return result;
}