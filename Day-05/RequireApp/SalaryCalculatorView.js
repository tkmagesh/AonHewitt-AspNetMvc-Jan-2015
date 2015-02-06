define(['jquery', 'Handlebars'], function($, Handlebars){
	function SalaryCalculatorView(calculator, templateId){
		var $root = this.$root = $("<div></div>");
		this.initialize = function(){
			var self = this;

			calculator.addSubscriber("salary", function(){
				console.dir(this);
				self.render();
			});

			calculator.addSubscriber("basic", function(){
				self.render();
			});
			calculator.addSubscriber("hra", function(){
				self.render();
			});
			calculator.addSubscriber("da", function(){
				self.render();
			});
			calculator.addSubscriber("tax", function(){
				self.render();
			});

			/*User Actions*/
			$root.on("change", "#txtBasic", function(){
				calculator.set('basic', parseInt(this.value,10));
			});
			$root.on("change", "#txtHra", function(){
				calculator.set('hra', parseInt(this.value,10));
			});
			$root.on("change", "#txtDa", function(){
				calculator.set('da', parseInt(this.value,10));
			});
			$root.on("change", "#rangeTax", function(){
				calculator.set('tax', parseInt(this.value,10));
			});
			$root.on("click", "#btnCalculate", function(){
				calculator.calculate();
				
			});
		}

		this.render = function(){
			var templateFn = Handlebars.compile($(templateId).html());
			var calculatorHTML = templateFn(calculator.toJSON());
			$root.html(calculatorHTML);
			return this;
		}
		
	};
	return SalaryCalculatorView;
});
	
