define([], function(){
	function SalaryCalculator(){
		var data = {
			basic : 0,
			hra : 0,
			da : 0,
			tax : 0,
			salary : 0
		};
		this.toJSON = function(){
			return {
				basic : data.basic,
				hra : data.hra,
				da : data.da,
				tax : data.tax,
				salary : data.salary
			};
		};

		this.set = function(attrName, value){
			data[attrName] = value;
			//trigger change notifications
			triggerEvent(attrName);
		};
		this.get = function(attrName){
			return data[attrName];
		};
		var eventSubscriptions = {};
		this.addSubscriber = function(attrName, subscriptionFn){
			eventSubscriptions[attrName] = eventSubscriptions[attrName] || [];
			eventSubscriptions[attrName].push(subscriptionFn);
		};
		this.removeSubscriber = function(){
			/*Home work*/
		}
		function triggerEvent(attrName){
			var subscriptionFns = eventSubscriptions[attrName] || [];
			subscriptionFns.forEach(function(subscriptionFn){
				subscriptionFn();
			});
		}	
	}
	SalaryCalculator.prototype["calculate"] = function(){
		var net = this.get('basic') + this.get('hra') + this.get('da');
		var gross = net * ((100-this.get('tax'))/100);
		this.set('salary', gross);
	}
	return SalaryCalculator;
});