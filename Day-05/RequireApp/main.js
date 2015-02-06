require(['SalaryCalculator', 'SalaryCalculatorView', 'jquery'], function(SalaryCalculator, SalaryCalculatorView, $){
	$(function(){
		var calculator = new SalaryCalculator();
		var view1 = new SalaryCalculatorView(calculator, "#calculatorTemplate");
		view1.initialize();
		view1.render().$root.appendTo(document.body);
	});
})
	