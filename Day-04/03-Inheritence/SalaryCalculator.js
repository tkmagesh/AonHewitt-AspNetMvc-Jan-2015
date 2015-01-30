function SalaryCalculator(basic, hra, da, tax){
	this["basic"] = basic;
	this["hra"] = hra;
	this["da"] = da;
	this["tax"] = tax;
	this["salary"] = 0;
}
SalaryCalculator.prototype["calculate"] = function(){
	var net = this.basic + this.hra + this.da;
	this.salary = net * ((100- this.tax)/100);
};